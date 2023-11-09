import {GET_CONTENTS, GetContentsResponse, GetContentsRequest} from "@/shared";
import {useLazyQuery} from "@apollo/client";
import {useObserver} from "@shared/lib/useObserver";
import React, {useEffect} from "react"

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
