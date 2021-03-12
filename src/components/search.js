import styled from "styled-components";

const Search = ({ valueInput, handleSearch }) => {
  return (
    <ContainerSearch>
      <input
        type="search"
        value={valueInput}
        onChange={handleSearch}
        onKeyUp={handleSearch}
      />
    </ContainerSearch>
  );
};

const ContainerSearch = styled.div`
  align-items: center;
  display: flex;
  height: 10%;
  justify-content: center;
  width: 100%;

  input {
    width: 100%;
    height: 90%;
  }
`;

export default Search;
