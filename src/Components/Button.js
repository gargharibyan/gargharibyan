import { useContext } from "react";
import { MyContext } from "../Context";
const Button = (props) => {
  let changeContext = useContext(MyContext);
  const mat = ["+", "-", "*", "/"];
  let n = 1;
  function buttonClick() {
    let lastElem = changeContext.val.slice(-1);
    if (mat.includes(lastElem[0])) {
      n++;
    }
    console.log(n);
    if (props.value === "=") {
      if(lastElem[0]===mat[0] ||lastElem[0]===mat[1]||lastElem[0]===mat[2]||lastElem[0]===mat[3] ){
        alert("ERROR")
      }
      else{
        const text = eval(
          changeContext.val.reduce((elem, e) => (e = elem + e), "")
        );
              console.log(eval(text));
              changeContext.setVal([text]);
      }

    } else if (n < 2) {
      changeContext.setVal((e) => [...changeContext.val, props.value]);
    }
  }
  return (  
    <input className="btt"
      value={props.value}
      type="button"
      key={props.k}
      onClick={buttonClick}
    />
  );
};
export default Button;
