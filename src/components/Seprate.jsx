import './Seprate.css'
import WeightElement from "./WeightElement.jsx"

function Seprate (){
    return(
        <div className="splitScreen">
          <div className="topPane">
              <h1>Working</h1>
           </div>
           <div className="bottomPane">
              <WeightElement />
           </div>
        </div>
      
      );
}
export default Seprate