import './App.css';
import {useState} from "react";
function App() {
  let [val,setval] = useState("");
  let [fval,setfval] = useState("");
  let [sign,setsign] = useState("");
  const getdata = (s) =>{
      setval(val+s);
  }
   const caldata = (d) =>{
    setfval(val);
    setval("")
    setsign(d)
   }

   const handleEquals =() =>{
    const lastval= val;
    switch (sign){
      case 1:
        setval((parseFloat(fval))+(parseFloat(lastval)));
        break;
      case 2:
        setval((parseFloat(fval))-(parseFloat(lastval)));
        break;
      case 3:
        setval((parseFloat(fval))*(parseFloat(lastval)));
        break;
      case 4:
        if(parseFloat(lastval)===0){
          setval("0");
          break
        }else{
          setval((parseFloat(fval))/(parseFloat(lastval)));
        break;

        }
      case 5:
        setval((parseFloat(fval))%(parseFloat(lastval)));
        break;
      
    }
   }
   const clear = () => {
    setval("");
   }
   
  return (
    <div className="App">
          <div class="main">
      <div class="top">
        <input type="text" name=""  value={val} />
      </div>
      <div class="bottom">
        <table>
          <tr>
            <td><input type="button" value={"AC"} onClick={() => clear() }/></td>
            <td><input type="button" value={"/"} onClick={() => caldata(4)} /></td>
            <td><input type="button" value={"X"} onClick={() => caldata(3)} /></td>
            <td><input type="button" value={"%"} onClick={() => caldata(5)} /></td>
          </tr>
          <tr>
            <td><input type="button" value={"7"} onClick={() => getdata(7)} /></td>
            <td><input type="button" value={"8"} onClick={() => getdata(8)} /></td>
            <td><input type="button" value={"9"} onClick={() => getdata(9)} /></td>
            <td><input type="button" value={"-"}  onClick={() => caldata(2)}/></td>
          </tr>
          <tr>
            <td><input type="button" value={"4"} onClick={() => getdata(4)} /></td>
            <td><input type="button" value={"5"} onClick={() => getdata(5)} /></td>
            <td><input type="button" value={"6"} onClick={() => getdata(6)} /></td>
            <td><input type="button" value={"+"}  onClick={() => caldata(1)} /></td>
          </tr>
          <tr>
            <td><input type="button" value={"1"} onClick={() => getdata(1)} /></td>
            <td><input type="button" value={"2"} onClick={() => getdata(2)} /></td>
            <td><input type="button" value={"3"} onClick={() => getdata(3)} /></td>
            <td rowspan="2" class="rowspan">
              <input type="button" value={"="} onClick={() => handleEquals(1)} />
            </td>
          </tr>
          <tr>
            <td><input type="button" value={"."} onClick={() => getdata(".")} /></td>
            <td><input type="button" value={"0"} onClick={() => getdata(0)} /></td>
            <td><input type="button" value={"00"} onClick={() => getdata("00")} /></td>
          </tr>
        </table>
          
        </div>
      </div>
	</div>
  );
}

export default App;
