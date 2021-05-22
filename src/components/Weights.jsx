import WeightElement from "./WeightElement.jsx";
function Weights(props){
    return (
    <div>
        <WeightElement date={props.weights[0].date} weight={props.weights[0].weight}/>
        <WeightElement date={props.weights[1].date} weight={props.weights[1].weight}/>
        <WeightElement date={props.weights[2].date} weight={props.weights[2].weight}/>
        <WeightElement date={props.weights[3].date} weight={props.weights[3].weight}/>
    </div>
    );
}
export default Weights;