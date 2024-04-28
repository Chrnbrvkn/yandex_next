import { useState, useCallback } from "react";

export function useCount(initialValue: number = 0 ) {
  let [count, setCount] = useState(initialValue);

  const decrement = useCallback(() => setCount( prev => prev - 1), []);
  const increment = useCallback(() => setCount( prev => prev + 1), []);

  return { count, decrement, increment };
}
