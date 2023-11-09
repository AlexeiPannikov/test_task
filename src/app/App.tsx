import React from 'react';
import styled from "styled-components";
import {HeaderWidget} from "@/widgets";
import {ArticlesPage} from "@/pages";
import {Outlet} from "react-router-dom";
import moment from "moment/moment";

import 'moment/locale/ru'

moment.locale("ru")

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${props => props.theme.colors.backgroundColor};
  padding: 40px;
  color: ${props => props.theme.colors.primaryTextColor};
  overflow-y: auto;
  @media ${props => props.theme.media.medium} {
    padding: 20px;
  }
  @media ${props => props.theme.media.small} {
    padding: 10px 0 0 0;
  }
`

const Content = styled.main`
  display: flex;
  justify-content: center;
  padding: 40px 0 0 0;
  @media ${props => props.theme.media.small} {
    padding: 20px 0 0 0;
  }
`

export function App() {
    return (
        <MainWrapper>
            <HeaderWidget/>
            <Content>
                <Outlet/>
            </Content>
        </MainWrapper>
    );
}