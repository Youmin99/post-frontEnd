import styled from "@emotion/styled";
import type { ISubmitButtonProps } from "./CreateAccount.types";

export const Wrapper = styled.form`
  width: 600px;
  height: 700px;
  border: 1px solid black;

  margin-bottom: 50px;
  padding: 50px 102px 70px 102px;
  margin: 20px 0px 100px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: none;
  box-shadow: 0px 0px 10px gray;
  border-radius: 30px;

  @media screen and (max-width: 1024px) {
    width: 500px;
    padding: 50px 50px 70px 50px;
  }
  @media screen and (max-width: 767px) {
    width: 350px;
    height: 550px;
  }
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 500px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  padding-left: 16px;
  @media screen and (max-width: 1024px) {
    width: 400px;
  }
  @media screen and (max-width: 767px) {
    width: 300px;
  }
`;

export const Label = styled.div`
  padding-bottom: 14px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div``;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  border-radius: 15px;

  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "yellow" : "none"};
`;

export const Error = styled.div`
  padding: 0px 0px 0px 10px;
  font-size: 14px;
  color: red;
`;
