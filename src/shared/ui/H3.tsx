
import styled from "styled-components";

export const H3 = styled.h3`
  font-size: 24px;
  line-height: 26px;
  position: relative;
  color: rgb(15, 23, 42);
  letter-spacing: 0;
  margin: -2.5px 0 8px;
  font-weight: 500;
  @media ${props => props.theme.media.small} {
    font-size: 20px;
  }
  @media ${props => props.theme.media.extraSmall} {
    font-size: 14px;
    line-height: 16px;
  }
`