import { useRecoilState } from "./utils/Recoil/atom";
import { counterState } from "./utils/store";

export default function Home() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "270px",
          justifyContent: "space-between",
        }}
      >
        <h1>Home Value: {count}</h1>
        <button
          style={{ height: "20px", width: "20px" }}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          style={{ height: "20px", width: "20px" }}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}
