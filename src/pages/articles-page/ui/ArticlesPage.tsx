import React from 'react';
import styled from "styled-components";
import {TodayArticlesWidget} from "@/widgets";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ArticlesPage = () => {
    return (
        <Wrapper>
            <TodayArticlesWidget/>
        </Wrapper>
    );
};