import React from "react";
import styled from "styled-components/macro";

const Accordion = () => {
  return (
    <Container>
      <CardBackground></CardBackground>
    </Container>
  );
};

export default Accordion;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#b068e9, #6463e7);
`;

const CardBackground = styled.div`
  width: 87%;
  height: 70%;
  background-color: #fff;
  border-radius: 23px;

  @media (min-width: 768px) {
    width: 63%;
    height: 66%;
  }
`;
