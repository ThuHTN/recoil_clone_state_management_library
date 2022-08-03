import { BehaviorSubject, combineLatest, map } from "rxjs";
import { Atom } from "./atom";

interface Selector<T> {
  get: () => Array<Atom<any>>;
  set: (value: any) => T;
}

export function selector<T>({ get, set }: Selector<T>): Atom<any> {
  const observables = get();
  const subject$ = new BehaviorSubject<T>(observables[0].value);
  const source = combineLatest(...observables).pipe(
    map((value) => set([...value]))
  );

  source.subscribe(subject$);

  return subject$;
}
