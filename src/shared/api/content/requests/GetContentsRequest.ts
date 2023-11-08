import {QueryContentsArgs} from "@shared/api/schema/graphql";

export type GetContentsRequest = Pick<QueryContentsArgs, "skip" | "take">