import React, {PropsWithChildren} from 'react';
import {Article} from "../model/Article";

interface IProps {
    data: Article
}

export const ArticleListItem = ({data}: PropsWithChildren<IProps>) => {
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};