import {gql} from "@shared/api/scheme";

export class ArticlesService {
    private GET_TODAY_ARTICLES = gql(`
        query GetTodayArticles($skip: Int!, $take: Int!) {
            contents(
                project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", 
                lang: "ru", 
                skip: $skip,
                take: $take
            )
        }
    `)
}