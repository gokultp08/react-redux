import { useEffect, useState } from "react";

export function useTestHook(limit) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [num, setNum] = useState();

  useEffect(() => {
    setTimeout(() => {
      console.log("hook render");
      setData({ id: "123", name: "hello" });
      setLoading(false);
      setNum(limit);
    }, limit || 2000);
  }, [limit]);

  return {
    loading,
    data,
    num,
  };
}
export default useTestHook;
