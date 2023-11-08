import React from 'react';
import styled from "styled-components";
import {TodayArticlesWidget} from "@/widgets";

const Wrapper = styled.div`
  width: 100%;
`

export const MainPage = () => {
    return (
        <Wrapper>
            <TodayArticlesWidget/>
        </Wrapper>
    );
};