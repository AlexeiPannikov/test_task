import React, {PropsWithChildren} from 'react';
import {ArticleListItem} from "@entities/article/ui/ArticleListItem";
import {GetContentsResponse} from "@/shared";

interface IProps {
    items: GetContentsResponse
}

export const ArticleList = ({items}: PropsWithChildren<IProps>) => {
    return (
        <>
            {items.map(item => <ArticleListItem key={item.id} data={item}/>)}
        </>
    );
};