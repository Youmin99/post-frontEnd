import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 900px;
  margin-bottom: 50px;
  border-radius: 30px;

  @media screen and (max-width: 1024px) {
    width: 700px;
  }
  @media screen and (max-width: 767px) {
    width: 350px;
  }
`;

export const PencilIcon = styled.img``;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
  border-radius: 30px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 30px;
`;

export const Input = styled.input`
  width: 180px;

  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
  border-radius: 30px;

  @media screen and (max-width: 767px) {
    width: 120px;
    margin-right: 0px;
  }
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
  border-radius: 30px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 30px;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 30px;
`;

export const Star = styled(Rate)``;
