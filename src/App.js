import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import NumberButton from "./Components/NuberButton";
import Del from "./Components/del";
import { MyContext } from "./Context";
import { useState } from "react";
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(i);
}
const signs = ["+", "-", "*", "/", "="];  
function App() {
  const [val, setVal] = useState([]);
  return (
    <div className="App">
      <MyContext.Provider value={{ val: val, setVal: setVal }}>
        <Input value={val} />
        {arr.map((item, i) => (
          <NumberButton value={item} k={i} />
        ))}
        {signs.map((item, i) => (
          <Button value={item} k={i} />
        ))}
        <Del/>
      </MyContext.Provider>
    </div>
  );
}
export default App;
