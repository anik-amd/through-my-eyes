import { atom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

export const themeStore = persistentAtom("theme", "dark");

// export type IsDark = boolean;
// export const isDarkStore = persistentAtom<IsDark>("isDark", false, {
//   encode: JSON.stringify,
//   decode: JSON.parse,
// });
