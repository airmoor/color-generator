import css from "./LayoutHeader.module.css";
import { ChangeTheme } from "@/features/theme/changeTheme";

export function LayoutHeader() {
  return (
    <header className={css.header}>
      Header
      <ChangeTheme />
    </header>
  );
}
