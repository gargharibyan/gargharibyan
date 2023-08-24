import { MyContext } from "../Context";
import { useContext } from "react";
const NumberButton = (props) => {
  const changeContext = useContext(MyContext);
  let lastElem = changeContext.val.slice(0,1)
  return (
    <input
      value={props.value}
      type="button"
      key={props.k}
      onClick={function () {
        changeContext.setVal((e) => [...changeContext.val, props.value]);

        if((lastElem[0] === 0 ||lastElem[0]  === "" )&& changeContext.val.length == 1){ 
          changeContext.setVal(() => [props.value]);
        }
        else{
           changeContext.setVal((e) => [...changeContext.val, props.value]);
        }
      }}
    />
  );
};
export default NumberButton;
