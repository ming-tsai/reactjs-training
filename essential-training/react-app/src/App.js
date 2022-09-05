import './App.css';
import { useRef } from "react";

function App() {
  const textTitle = useRef();
  const hexColor = useRef();
  
  const submit = (e) => {
    e.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    textTitle.current.value = '';
    hexColor.current.value = '';
  }
  return (
    <div className="App">
      <form onSubmit={submit}>
      <input
        ref={textTitle}
        type="text"
        placeholder='color title' />

      <input
        ref={hexColor}
        type="color" />
      <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
