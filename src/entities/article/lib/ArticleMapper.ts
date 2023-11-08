import {Article} from "../model/Article";

export class ArticleMapper {
    static toArticle(): Article {
        return new Article()
    }
}