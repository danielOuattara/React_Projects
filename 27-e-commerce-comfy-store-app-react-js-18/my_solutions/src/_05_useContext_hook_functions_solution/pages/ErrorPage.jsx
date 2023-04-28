import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>Sorry the page does not exist</h3>
        <Link className="btn" to="/">
          go back to home
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
