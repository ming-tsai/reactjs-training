import './App.css';
import { useReducer } from "react";

function App() {
  const [checked, setChecked] = useReducer(
    (checked) => !checked,
    false
  );
  const msg = "checked";
  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={setChecked} />
      <label>{checked ? msg : `not ${msg}`}</label>
    </div>
  );
}

export default App;
