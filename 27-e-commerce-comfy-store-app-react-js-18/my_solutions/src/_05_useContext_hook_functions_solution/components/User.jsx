import React from "react";
import styled from "styled-components";
import { UserCard, UserFollowers } from "./";
//---------------------------------------------------

export default function User() {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <UserCard />
        <UserFollowers />
      </Wrapper>
    </section>
  );
}

//---------------------------------------------------
const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;
