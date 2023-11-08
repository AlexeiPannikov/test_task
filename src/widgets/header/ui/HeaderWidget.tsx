import React from 'react';
import styled from "styled-components";
import {Logo} from "@/shared";

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`

export const HeaderWidget = () => {
    return (
        <Header>
            <Logo />
        </Header>
    );
};