import styled from "styled-components";

export default function Logo() {
  return (
    <Wrapper>
      <span>Gadget_</span>Junkie
    </Wrapper>
  );
}

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-grey-1);
  span {
    color: var(--clr-primary-5);
  }
`;
