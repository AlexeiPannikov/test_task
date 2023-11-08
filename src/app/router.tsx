import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {App} from "@app/index";
import {MainPage} from "@/pages";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={"/"} element={<App/>}>
            <Route index element={<MainPage/>} />
        </Route>
    )
)