import React, {useEffect} from 'react';
import {Card, H2, Observer} from "@/shared";
import {ArticleList, useFetchArticles} from "@/entities";
import styled from "styled-components";

const WidgetWrapper = styled.div`
  width: 100%;
  max-width: 806px;
  @media ${props => props.theme.media.medium} {
    max-width: 100%;
  }
`

export const TodayArticlesWidget = () => {

    const {fetchArticlesDataResult, observerTarget} = useFetchArticles()

    return (
        <WidgetWrapper>
            <Card>
                <H2>
                    Сегодня
                </H2>
                {
                    fetchArticlesDataResult.data && <ArticleList items={fetchArticlesDataResult.data.contents}/>
                }
                <Observer ref={observerTarget}/>
            </Card>
        </WidgetWrapper>
    );
};