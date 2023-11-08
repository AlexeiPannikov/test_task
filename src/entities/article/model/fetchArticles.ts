import {GET_CONTENTS, GetContentsResponse, GetContentsRequest} from "@/shared";
import {} from "@shared/api/content/requests/GetContentsRequest";
import {LazyQueryHookOptions, useLazyQuery} from "@apollo/client";

export const useFetchArticles = (args: GetContentsRequest, options?: LazyQueryHookOptions) => useLazyQuery<GetContentsResponse, GetContentsRequest>(
    GET_CONTENTS,
    {
        variables: {
            ...args
        },
        ...options
    })
