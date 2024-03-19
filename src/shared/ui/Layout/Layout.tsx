import { type ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import css from "./Layout.module.css";

type Props = {
  navbarSlot?: ReactNode;
  headerSlot: ReactNode;
  bottomSlot?: ReactNode;
  announcementSlot?: ReactNode;
  sidebarSlot?: ReactNode;
};

export function Layout(props: Props) {
  return (
    <div className={css.root}>
      {props.announcementSlot}
      {props.headerSlot}
      {props.navbarSlot}
      <div className={css.container}>
        <div className={css.content}>
          <Outlet />
        </div>
        {props.sidebarSlot && (
          <aside className={css.sidebar}>{props.sidebarSlot}</aside>
        )}
      </div>

      {props.bottomSlot}
      <ScrollRestoration />
    </div>
  );
}
