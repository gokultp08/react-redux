import { useDispatch, useSelector } from "react-redux";
import { add, selectAllPosts } from "./reducer/posts";
import { useState } from "react";
import useTestHook from "./hooks/testHook";

const TestPosts = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();

  const [inp, setInp] = useState("");
  console.log("posts rerender");

  return (
    <div>
      Posts
      {console.log(posts)}
      <input value={inp} type="text" onChange={(e) => setInp(e.target.value)} />
      <button
        onClick={() => {
          dispatch(add(inp));
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default TestPosts;
