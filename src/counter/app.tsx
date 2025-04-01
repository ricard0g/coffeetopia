import { useState } from 'preact/hooks';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello From Preact</h1>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
    </>
  );
}
