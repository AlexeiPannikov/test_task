import {GET_CONTENTS, GetContentsResponse, GetContentsRequest} from "@/shared";
import {} from "@shared/api/content/requests/GetContentsRequest";
import {LazyQueryHookOptions, useLazyQuery, useQuery} from "@apollo/client";
import {useObserver} from "@shared/lib/useObserver";
import styled from "styled-components";
import React, {useEffect, useState} from "react"
import {log} from "util";

export const useFetchArticles = () => {
    const args = {
        skip: 0,
        take: 10
    }
    const [fetchArticlesData, fetchArticlesDataResult] = useLazyQuery<GetContentsResponse, GetContentsRequest>(
        GET_CONTENTS,
        {
            fetchPolicy: "network-only",
            variables: {
                ...args
            },
        })

    let isFirstLoading = true

    useEffect(() => {
        if (fetchArticlesDataResult.loading || !isFirstLoading) return
        isFirstLoading = false
        fetchArticlesData().then(() => {
            args.skip += 10
        })
    }, []);

    const {observerTarget} = useObserver({
        onIntersecting: () => {
            fetchArticlesDataResult.fetchMore({
                variables: {
                    ...args,
                },
                updateQuery: ({contents}, {fetchMoreResult}) => {
                    if (!fetchMoreResult) return {contents}
                    args.skip += 10
                    return {
                        contents: [...contents, ...fetchMoreResult.contents]
                    }
                }
            })
        }
    })

    return {fetchArticlesDataResult, observerTarget}
}
