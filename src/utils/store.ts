import { atom } from "./Recoil/atom";
import { selector } from "./Recoil/selector";

export const counterState = atom({
  default: 0,
});

export const checkGreater = selector<string>({
  get: () => [counterState],
  set: ([state]) => {
    if (state > 10) {
      return "greater than 10";
    }
    return "less than 10";
  },
});
