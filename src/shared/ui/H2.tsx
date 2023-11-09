import styled from "styled-components";

export const H2 = styled.h2`
  font-weight: 700;
  text-align: left;
  font-size: 28px;
  @media ${props => props.theme.media.small} {
    font-size: 24px;
  }
`