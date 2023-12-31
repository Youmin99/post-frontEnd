import * as S from "./BoardDetail.styles";
import { getDate } from "../../../../../src/commons/libraries/utils";
import type { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "antd";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>
                {getDate(props.data?.fetchBoard?.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.IconHeadWrapper>
            <S.Icon>
              <FontAwesomeIcon icon={faBookmark} />
            </S.Icon>
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                props.data?.fetchBoard.boardAddress?.city ?? ""
              }`}
            >
              <S.LocationIcon src="/images/board/detail/location.png" />
            </Tooltip>
          </S.IconHeadWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          <S.ImageWrapper>
            {props.data?.fetchBoard.images
              ?.filter((el) => el)
              .map((el) => (
                <S.Image
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageWrapper>
          {props.data?.fetchBoard.youtubeUrl !== "" && (
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl ?? ""}
              width="300px"
              height="240px"
            />
          )}
        </S.Body>
        <S.LikeWrapper>
          <S.IconWrapper>
            <S.LikeIcon onClick={props.onClickLike}>
              <FontAwesomeIcon icon={faThumbsUp} />
            </S.LikeIcon>
            <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
          </S.IconWrapper>
          <S.IconWrapper>
            <S.LikeIcon onClick={props.onClickDislike}>
              <FontAwesomeIcon icon={faThumbsDown} />
            </S.LikeIcon>
            <S.LikeCount>{props.data?.fetchBoard.dislikeCount}</S.LikeCount>
          </S.IconWrapper>
        </S.LikeWrapper>
      </S.CardWrapper>{" "}
      {typeof router.query.boardId === "string" && (
        <S.BottomWrapper>
          <S.Button onClick={onClickMoveToPage(`/boards`)}>list</S.Button>
          <S.Button
            onClick={onClickMoveToPage(`/boards/${router.query.boardId}/edit`)}
          >
            edit
          </S.Button>
          <S.Button
            onClick={() => props.onClickDelete(`${router.query.boardId}`)}
          >
            delete
          </S.Button>
        </S.BottomWrapper>
      )}
    </S.Wrapper>
  );
}
