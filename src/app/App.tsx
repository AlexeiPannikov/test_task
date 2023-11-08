import React from 'react';
import styled from "styled-components";
import {HeaderWidget} from "@/widgets";
import {MainPage} from "@/pages";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
  padding: 40px;
  color: ${props => props.theme.primaryTextColor};
`

const Content = styled.main`
  display: flex;
  justify-content: center;
  padding: 40px 0 0 0;
`

export function App() {
    return (
        <MainWrapper>
            <HeaderWidget/>
            <Content>
                <MainPage />
            </Content>
        </MainWrapper>
    );
}