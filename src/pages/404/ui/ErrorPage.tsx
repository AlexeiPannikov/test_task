import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
`

export const ErrorPage = () => {
    return (
        <Wrapper>
            404
        </Wrapper>
    );
};
