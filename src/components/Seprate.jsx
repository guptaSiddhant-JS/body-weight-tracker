import './Seprate.css'
import WeightElement from "./WeightElement.jsx"

function Seprate (){
    return(
        <div>
          <div className="topPane">
              <h1>Chart</h1>
           </div>
           <div className="bottomPane containerBox">
              <WeightElement />
              <WeightElement />
              <WeightElement />
              <WeightElement />
              
           </div>
        </div>
      
      );
}
export default Seprate