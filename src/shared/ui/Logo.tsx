import React, {PropsWithChildren} from 'react';
import styled from "styled-components";
import {LogoSvg} from "@/shared";

const LogoDescription = styled.div`
  color: ${props => props.theme.colors.secondaryTextColor};
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

interface IProps {
    onClick?: () => void
}

export const Logo = ({onClick}: PropsWithChildren<IProps>) => {
    return (
        <LogoWrap
            onClick={() => onClick && onClick()}
        >
            <a>
                <LogoImage src={LogoSvg} alt="logo"/>
            </a>
            <LogoDescription>
                Думай и решай свободно
            </LogoDescription>
        </LogoWrap>
    );
};