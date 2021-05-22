import './Seprate.css'
import Weights from "./Weights.jsx"

function Seprate (){
   const weights = [
         {
            id:'w1',
            date:new Date(Date.UTC(2012, 11, 12, 3, 0, 0)),
            weight:82.65,
         },
         {
            id:'w2',
            date:new Date(Date.UTC(2012, 11, 13, 3, 0, 0)),
            weight:82.55,
         },
         {
            id:'w3',
            date:new Date(Date.UTC(2012, 11, 14, 3, 0, 0)),
            weight:81.2,
         },
          {
            id:'w4',
            date:new Date(Date.UTC(2012, 11, 15, 3, 0, 0)),
            weight:81.75,
         },
         ];

    return(
      
        <div>
          <div className="topPane">
              <h1>Chart</h1>
           </div>
           <div className="bottomPane containerBox">
                <Weights weights={weights} />
           </div>
           
        </div>
      
      );
}
export default Seprate;