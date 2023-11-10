import React from 'react';
import styled from "styled-components";
import {Logo} from "@/shared";
import {useNavigate} from "react-router-dom";

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`

const LogoWrap = styled.div`
  cursor: pointer;
`

export const HeaderWidget = () => {

    const navigate = useNavigate()

    const goHome = () => navigate("/")

    return (
        <Header>
            <LogoWrap>
                <Logo onClick={goHome}/>
            </LogoWrap>
        </Header>
    );
};