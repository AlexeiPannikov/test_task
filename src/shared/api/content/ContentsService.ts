import {gql} from "@apollo/client";

export const GET_CONTENTS = gql`
    query getContents($skip: Int!, $take: Int!) {
        contents(
            lang: "ru",
            project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1",
            skip: $skip,
            take: $take,
        ) {
            id,
            title {
                short,
            },
            description {
                intro,
            },
            dates {
                posted,
            }
            url,
            thumbnail,
            parents {
                type
                attachment,
                id
            }
        }
    }
`