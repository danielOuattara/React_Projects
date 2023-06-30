import styled from "styled-components";

const CocktailsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
`;

export default CocktailsListWrapper;
