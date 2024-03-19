import React, { useCallback } from "react";
import { changeTheme, selectCurrentTheme } from "@/entities/theme";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { PiSunThin } from "react-icons/pi";
import { PiMoonStarsThin } from "react-icons/pi";

export function ChangeTheme() {
  const currentTheme = useAppSelector(selectCurrentTheme);
  const dispatch = useAppDispatch();

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      dispatch(changeTheme(currentTheme === "light" ? "dark" : "light"));
    },
    [currentTheme],
  );

  return (
    <div>
      <div onClick={onClick}>
        {currentTheme === "light" ? (
          <PiMoonStarsThin size={30} />
        ) : (
          <PiSunThin size={30} />
        )}
      </div>
    </div>
  );
}
