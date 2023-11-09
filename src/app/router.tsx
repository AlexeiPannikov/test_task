import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {App} from "@/app";
import {ArticlesPage, ArticleDetailPage, ErrorPage} from "@/pages";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<ArticlesPage/>} />
            <Route path=":articleLink" element={<ArticleDetailPage/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Route>
    )
)