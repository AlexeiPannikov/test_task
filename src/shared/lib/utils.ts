import {Topic} from "@shared/api/schema/graphql";
import {Maybe} from "graphql/jsutils/Maybe";

export const getAttachmentSourceParent = (parents:  Maybe<Pick<Topic, "id" | "type" | "attachment">>[] | undefined) =>
    parents?.find((item) => item?.type === "source")?.attachment