import './App.css';
import { useState } from "react";

function useInput(initalValue) {
  const [value, setValue] = useState(initalValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initalValue)
  ];
}

function App() {

  const [titleProps, resetTitle] = useInput("");
  const [colorPorps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorPorps.value}`);
    resetTitle();
    resetColor();
  }
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder='color title' />

      <input
        {...colorPorps}
        type="color" />
      <button type="submit">Add</button>
    </form>
  );
}

export default App;
