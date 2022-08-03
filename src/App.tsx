import Home from "./Home";
import "./App.css";
import { useRecoilValue } from "./utils/Recoil/atom";
import { counterState, checkGreater } from "./utils/store";

export default function App() {
  const count = useRecoilValue(counterState);

  const selector = useRecoilValue(checkGreater);

  return (
    <>
      <Home />
      <h1>Index Value: {count}</h1>
      <h1>Selector value: {selector}</h1>
    </>
  );
}
