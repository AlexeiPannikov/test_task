import {QueryContentsArgs, QueryContentArgs} from "@shared/api/schema/graphql";

export type GetContentsRequest = Pick<QueryContentsArgs, "skip" | "take">

export type GetContentRequest = Pick<QueryContentArgs, "full_url">