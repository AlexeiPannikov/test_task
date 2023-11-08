import React from 'react';
import styled from "styled-components";
import {LogoSvg} from "@/shared";

const LogoDescription = styled.div`
  color: ${props => props.theme.secondaryTextColor};
  font-size: 12.1px;
`

const LogoImage = styled.img`
  width: 170px;
  height: 48px;
`

const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Logo = () => {
    return (
        <LogoWrap>
            <a>
                <LogoImage src={LogoSvg} alt="logo"/>
            </a>
            <LogoDescription>
                Думай и решай свободно
            </LogoDescription>
        </LogoWrap>
    );
};