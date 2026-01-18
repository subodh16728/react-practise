import { useEffect, useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [numberOfTimesClicked, setNumberOfTimesClicked] = useState(0);

  // without dependency array - useEffect will run on every re-render
  // useEffect(() => {
  //   console.log("Hello World!");
  // });

  // empty dependency array - useEffect will run only once
  // useEffect(() => {
  //   console.log("Hello World!");
  // }, []);

  // dependency array with something - useEffect will run whenever the value of the variable mentioned in the dependency array changes
  // useEffect(() => {
  //   console.log("Count clicked");
  // }, [count]);

  // useEffect(() => {
  //   console.log("numberOfTimesClicked clicked");
  // }, [numberOfTimesClicked, count]);

  // cleanups - first render will happen -> then during re-render, cleanup will happen first -> then actual code inside useEffect
  useEffect(() => {
    console.log("log in useEffect");

    return () => {
      console.log("cleaned up!");
    };
  }, [count]);

  return (
    <>
      <div>UseEffect hook</div>
      <p>Count is: {count}</p>

      {/* Count */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>

      {/* NumberOfTimesClicked */}
      <p>Number of times clicked is: {numberOfTimesClicked}</p>
      <button
        onClick={() =>
          setNumberOfTimesClicked((prevClickCount) => prevClickCount + 1)
        }
      >
        Increase count
      </button>
      <button
        onClick={() =>
          setNumberOfTimesClicked((prevClickCount) => prevClickCount - 1)
        }
      >
        Decrease count
      </button>

      {console.log("Render complete")}
    </>
  );
};

export default Hooks;
