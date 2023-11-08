import {Content} from "@shared/api/schema/graphql";

export type GetContentsResponseItem = Pick<Content, "id" | "title" | "dates" | "description">
export type GetContentsResponse = GetContentsResponseItem[]