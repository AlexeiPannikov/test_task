import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: 700;
  text-align: left;
  font-size: 40px;
  letter-spacing: -1px;
  @media ${props => props.theme.media.extraSmall} {
    font-size: 28px;
  }
`