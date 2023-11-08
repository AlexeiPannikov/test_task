import React, {useEffect} from 'react';
import {Card} from "@/shared";
import {ArticleList, useFetchArticles} from "@/entities";

const items: any[] = []

export const TodayArticlesWidget = () => {

    const [getArticles, getArticlesResult] = useFetchArticles({skip: 0, take: 10})

    useEffect(() => {
        getArticles()
    }, []);

    return (
        <Card>
            {
                //TODO
                getArticlesResult.data && JSON.stringify(getArticlesResult.data)

                // getArticlesResult.data && <ArticleList items={getArticlesResult.data}/>
            }
        </Card>
    );
};