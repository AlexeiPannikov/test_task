import {Content, ContentDates, ContentDescription, ContentTitle, Topic, Counters} from "@shared/api/schema/graphql";
import {Maybe} from "graphql/jsutils/Maybe";

export type GetContentsResponseItem = Pick<Content, "id" | "url" | "thumbnail"> & {
    title: Maybe<Pick<ContentTitle, "short">>,
    dates: Maybe<Pick<ContentDates, "posted">>,
    description: Maybe<Pick<ContentDescription, "intro">>,
    parents: Maybe<Pick<Topic, "id" | "type" | "attachment">>[],
}

export type GetContentsResponse = {
    contents: GetContentsResponseItem[]
}

export type GetContentResponse = {
    content: Pick<Content, "id" | "thumbnail"> & {
        title: Maybe<Pick<ContentTitle, "long">>,
        dates: Maybe<Pick<ContentDates, "posted">>,
        description: Maybe<Pick<ContentDescription, "long" | "intro">>,
        parents: Maybe<Pick<Topic, "id" | "type" | "attachment">>[],
        counters: Maybe<Pick<Counters, "view">>,
    }
}