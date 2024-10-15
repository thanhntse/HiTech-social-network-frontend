import { memo, useState } from 'react'

type Props = {}

export default function TestPage({}: Props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  console.log("Parent Component re-rendered!");
  console.log(count);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(1)}>Set to 1</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <ChildComponent
        count={count}
      />
    </div>
  );
}

const ChildComponent = memo(({ count }: { count: any }) => {
  console.log("Child Component re-rendered!");
  console.log(count);

  return (
    <div>
      Child: {count}
    </div>
  );
});
