import {gql} from "@apollo/client";

export const GET_CONTENTS = gql`
    query getContents($skip: Int!, $take: Int!) {
        contents(
            lang: "ru",
            project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1",
            skip: $skip,
            take: $take,
        ) {
            id
            title {
                short
            },
            description {
                intro
            },
            dates {
                posted
            }
            cparent {
                url {
                    ru
                }
            }
            url
            thumbnail
            parents {
                type
                attachment
                id
            }
        }
    }
`

export const GET_CONTENT = gql`
    query getContent($full_url: String!) {
        content(
            id: "",
            lang: "ru",
            project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1",
            full_url: $full_url,
        ) {
            id
            title {
                long
            }
            description {
                long
                intro
            },
            thumbnail
            counters {
                view
            }
            dates {
                posted,
            }
            parents {
                type
                attachment,
                id
            }
        }
    }
`