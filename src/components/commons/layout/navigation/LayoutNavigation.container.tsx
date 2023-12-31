import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import LayoutNavigationUI from "./LayoutNavigation.presenter";
import type { ILayoutNavigation } from "./LayoutNavigation.types";

export default function LayoutNavigation(prop: ILayoutNavigation): JSX.Element {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };

  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
