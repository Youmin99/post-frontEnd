import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
// import type { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import type { IBoardWriteProps } from "./BoardWrite.types";
import type { Address } from "react-daum-postcode";
import { useMutationCreateBoard } from "../../../commons/hooks/mutations/useMutationCreateBoard";
import { useMutationUpdateBoard } from "../../../commons/hooks/mutations/useMutationUpdateBoard";
import { useForm } from "react-hook-form";
import { createwrite } from "../../../commons/error/BoardWrite.yup";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();
  const [isActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");

  const [createBoard] = useMutationCreateBoard();
  const [updateBoard] = useMutationUpdateBoard();

  const { register, handleSubmit, formState } = useForm({
    // defaultValues: {
    //   writer: props.isEdit ? props.data?.fetchBoard.writer : "",
    //   title: props.data?.fetchBoard.title,
    // },
    resolver: yupResolver(createwrite),
    mode: "onChange",
  });

  const onClickSubmit = async (data: any): Promise<void> => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail: data.boardAddress.addressDetail,
            },
          },
        },
      });

      console.log(result.data?.createBoard._id);
      if (result.data?.createBoard._id === undefined) {
        alert("error");
        return;
      }

      void router.push(`/boards/${result.data?.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickAddressSearch = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen((prev) => !prev);
  };

  const onClickUpdate = async (data: any): Promise<void> => {
    try {
      if (typeof router.query.boardId !== "string") {
        alert("error");
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: data.password,
          updateBoardInput: {
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail: data.boardAddress.addressDetail,
            },
          },
        },
      });
      if (result.data?.updateBoard._id === undefined) {
        alert("error with request.");
        return;
      }
      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      formState={formState}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
    />
  );
}
