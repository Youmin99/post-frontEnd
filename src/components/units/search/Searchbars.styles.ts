import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 600px;
  height: 52px;
  border-radius: 15px;
  background-color: #f5f2fc;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 300px;
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;
