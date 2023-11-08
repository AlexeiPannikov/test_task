import React from 'react';
import {Card} from "@/shared";
import {ArticleList} from "@/entities";

const items: any[] = []

export const TodayArticlesWidget = () => {
    return (
        <Card>
            <ArticleList items={items}/>
        </Card>
    );
};