import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./reducer/counter";
import useTestHook from "./hooks/testHook";
import TestPosts from "./TestPosts";

const TestCounter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const { loading: appLoading, data, num } = useTestHook(1000);

  console.log("rerender counter");

  if (appLoading) {
    return <div>Loading...........................</div>;
  }

  return (
    <div>
      .......................{num}.............................. Counter {count}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Minus
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        ADD 10
      </button>
      {/* <TestPosts /> */}
    </div>
  );
};

export default TestCounter;
