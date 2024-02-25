import { useState } from "react"
import data from "./data";
import './style.css'
function Accordian() {

    const [selected,setSelected] = useState(null);
    const [enableSelection,setEnableSelection] = useState (false);
    const [multiple,setMultiple]= useState([])

    function handleSingleSelection(getCurrentId){
      setSelected(getCurrentId=== selected ? null :getCurrentId)
      console.log(selected)
    }
    function handleMultiSelection(getCurrentId){
      let copyMultiple =[...multiple];
      const findIndexOfCurrentId= copyMultiple.indexOf(getCurrentId)
      if(findIndexOfCurrentId === -1)copyMultiple.push(getCurrentId)
    else copyMultiple.splice(findIndexOfCurrentId,1)
      setMultiple
    (copyMultiple)

    }
console.log(selected,multiple)
     return (
      <div className="wrapper">
        <button onClick={()=> setEnableSelection(!enableSelection)}>Enable multi selection</button>
      <div className="accordian">
        { data && data.length > 0 ? (
          data.map((dataItem) => ( <div className="item">
            <div onClick ={
              enableSelection ? () => handleMultiSelection(dataItem.id): ()=> handleSingleSelection(dataItem.id)
              }className="title">
              <h3>{dataItem.question}</h3>
              <span>+</span>
              </div>
              {selected === dataItem.id || multiple.indexOf(dataItem.id)!== -1 ? (
              
              
               <div className="content">{dataItem.answer} </div>
              ):null
              }
        
      </div>
          ))
          ) : (
     <div> No data found</div>
    )}
  </div>
  
</div>
          )}

export default Accordian