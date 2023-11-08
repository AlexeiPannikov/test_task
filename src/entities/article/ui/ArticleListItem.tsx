import React, {PropsWithChildren} from 'react';
import {GetContentsResponseItem} from "@/shared";

interface IProps {
    data: GetContentsResponseItem
}

export const ArticleListItem = ({data}: PropsWithChildren<IProps>) => {
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};