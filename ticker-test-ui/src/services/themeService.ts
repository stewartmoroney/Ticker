import { bind, shareLatest } from "@react-rxjs/core";
import { Subject } from "rxjs";
import { startWith } from "rxjs/operators";

import { ThemeName } from "../state/types";
import { defaultTheme } from "../ui/shared";

export const selectedTheme$ = new Subject<ThemeName>();

export const switchTheme = (theme: ThemeName) => {
  selectedTheme$.next(theme);
};
export const flipTheme = (themeName: ThemeName): ThemeName =>
  themeName === "dark" ? "light" : "dark";

export const themeState$ = () =>
  selectedTheme$.asObservable().pipe(shareLatest());

export const [useTheme] = bind(themeState$().pipe(startWith(defaultTheme)));
