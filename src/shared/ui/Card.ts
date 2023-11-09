import styled from "styled-components";

export  const Card = styled.div`
  background-color: ${props => props.theme.colors.cardBackgroundColor};
  padding: 24px;
  border-radius: 8px;
  @media ${props => props.theme.media.small} {
    padding: 16px;
  }
  @media ${props => props.theme.media.extraSmall} {
    padding: 8px;
  }
`