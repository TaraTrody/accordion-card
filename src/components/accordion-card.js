import React from "react";
import styled from "styled-components/macro";

const Accordion = ({ faq }) => {
  return (
    <Container>
      <CardBackground>
        <FAQWrapper>
          <Title>FAQ</Title>
          {faq.map((q) => {
            return (
              <div key={q.id} class="wrapper">
                <StyledInput type="checkbox" id={`faq${q.id}`} />
                <StyledLabel for={`faq${q.id}`}>{q.question}</StyledLabel>
                <ContentWrapper>
                  <Content>{q.answer}</Content>
                </ContentWrapper>
              </div>
            );
          })}
          {/* <div>
            <StyledInput type="checkbox" id="faq1" />
            <StyledLabel for="faq1">
              How many team members can I invite?
            </StyledLabel>
            <ContentWrapper>
              <Content>
                Eu Lorem duis fugiat aliqua non enim proident est culpa
                deserunt.
              </Content>
            </ContentWrapper>
          </div>
          <hr /> */}
        </FAQWrapper>
      </CardBackground>
    </Container>
  );
};

export default Accordion;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#b068e9, #6463e7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBackground = styled.div`
  width: 87%;

  background-color: #fff;
  border-radius: 23px;
  display: grid;
  grid-template-row: 1fr;
  grid-template-column: 1fr;
  justify-items: center;
  align-items: end;
  padding-bottom: 3rem;
  overflow: auto;

  @media (min-width: 768px) {
    width: 63%;
    height: 66%;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr;
    align-items: start;
    justify-items: start;
  }
`;

const FAQWrapper = styled.div`
  width: 85%;
  height: 66.3%;

  .wrapper {
    border-bottom: 1px solid #e8e8ea;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  @media (min-width: 768px) {
    grid-column-start: 2;
    margin-top: 3.5rem;
  }

  input + label + div {
    display: none;
  }

  input:checked + label + div {
    display: block;
  }
`;

const Title = styled.div`
  margin: 0 0 2.5rem 0;
  font-family: Helvetica;
  font-size: 2rem;
  color: #1e1f36;
  letter-spacing: 0;
  text-align: center;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  display: block;
  cursor: pointer;
  transition: ease 0.5s;
  font-family: Helvetica;
  font-size: 0.875rem;
  color: #4b4c5f;
  letter-spacing: 0;

  &:hover {
    color: #f47b56;
  }
`;

const ContentWrapper = styled.div``;

const Content = styled.p`
  font-family: Helvetica;
  font-size: 0.75rem;
  color: #787887;
  letter-spacing: 0;
  line-height: 1.125em;
`;
