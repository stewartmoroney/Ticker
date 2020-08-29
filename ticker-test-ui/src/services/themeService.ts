import { bind } from "@react-rxjs/core";
import { Subject } from "rxjs";
import { shareReplay, startWith } from "rxjs/operators";

import { ThemeName } from "../state/types";
import { defaultTheme } from "../ui/shared";

export const selectedTheme$ = new Subject<ThemeName>();

export const switchTheme = (theme: ThemeName) => {
  selectedTheme$.next(theme);
};
export const flipTheme = (themeName: ThemeName): ThemeName =>
  themeName === "dark" ? "light" : "dark";

export const themeState$ = () =>
  selectedTheme$.asObservable().pipe(shareReplay(1));

export const [useTheme] = bind(themeState$().pipe(startWith(defaultTheme)));
