import { useContext } from "react";
import { MyContext } from "../Context";
function Del(){
    const changeContext = useContext(MyContext);
return(
    <input type="button"value="del" onClick={function(){ 
changeContext.setVal([""])
    }}/>
)
}
export default Del