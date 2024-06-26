import styled from "styled-components";

const ErrorPageWrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
  a:hover {
    border: 1px solid var(--primary-500);
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: var(--primary-500);
    color: white;
  }

  @media (min-width: 768px) {
    img {
      width: 50vw;
    }
  }
`;

export default ErrorPageWrapper;
