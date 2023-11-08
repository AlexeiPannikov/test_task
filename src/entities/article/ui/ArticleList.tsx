import React, {PropsWithChildren} from 'react';
import {ArticleListItem} from "@entities/article/ui/ArticleListItem";
import {Article} from "@entities/article/model/Article";

interface IProps {
    items: Article[]
}

export const ArticleList = ({items}: PropsWithChildren<IProps>) => {
    return (
        <>
            {items.map(item => <ArticleListItem key={item.id} data={item}/>)}
        </>
    );
};