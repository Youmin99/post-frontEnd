import { useRecoilState } from "recoil";
import * as S from "./login.styles";
import type { IloginProps } from "./login.types";
import { openState } from "../../commons/store";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function LoginPresenter(props: IloginProps): JSX.Element {
  const [isOpen, setIsOpen] = useRecoilState(openState);
  return (
    <>
      <S.Wrapper>
        {isOpen && (
          <S.ModalWrapper>
            <S.Modal>
              <S.TitleWrapper>
                <S.Title>login</S.Title>
                <S.Close
                  icon={faXmark}
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              </S.TitleWrapper>
              <S.Wapper>
                <S.EmailInputWrapper>
                  <S.EmailInput
                    type="email"
                    placeholder="email"
                    onChange={props.onChangeEmail}
                  ></S.EmailInput>
                  <S.EmailError>{props.emailError}</S.EmailError>
                </S.EmailInputWrapper>
                <S.PasswordInputWrapper>
                  <S.PasswordInput
                    type="password"
                    placeholder="password"
                    onChange={props.onChangePassword}
                  ></S.PasswordInput>
                  <S.PasswordError>{props.passwordError}</S.PasswordError>
                </S.PasswordInputWrapper>
                <S.buttonWrapper>
                  <S.submit onClick={props.onClickLogin}>log in</S.submit>
                </S.buttonWrapper>
              </S.Wapper>
              <S.EtcButton>
                <S.linkStyle href="/d">
                  <S.e>find email</S.e>
                </S.linkStyle>
                <S.EtcItem>|</S.EtcItem>
                <S.linkStyle href="/about">
                  <S.e>find password </S.e>
                </S.linkStyle>
                <S.EtcItem>|</S.EtcItem>
                <S.linkStyle href="/account">
                  <S.e onClick={() => setIsOpen((prev) => !prev)}>
                    create acount
                  </S.e>
                </S.linkStyle>
              </S.EtcButton>
            </S.Modal>
          </S.ModalWrapper>
        )}
      </S.Wrapper>
    </>
  );
}
