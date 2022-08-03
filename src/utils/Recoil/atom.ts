import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

export type Atom<T> = BehaviorSubject<T>;

type AtomProps<T> = { default: T };

export function atom<T>(props: AtomProps<T>): Atom<T> {
  const source$ = new BehaviorSubject<T>(props.default);
  return source$;
}

export function useRecoilValue<T>(source$: Atom<T>): T {
  const [value, _setValue] = setRecoilValue<T>(source$);
  return value;
}

export function useRecoilState<T>(source$: Atom<T>): [T, any] {
  const [value, setValue] = setRecoilValue<T>(source$);
  return [value, setValue];
}

function setRecoilValue<T>(source$: BehaviorSubject<T>) {
  const [value, setValue] = useState<typeof source$.value>(source$.value);

  useEffect(() => {
    const source = source$.subscribe(setValue);
    source$.next(value);
    return () => source.unsubscribe();
  }, [value, source$]);
  return [value, setValue] as const;
}
