import './WeightElement.css'
function WeightElement(props){
    return (
    <div className="record-item">
    <h2 >{props.date.toLocaleString()}</h2>
    <div>{props.weight}</div>
    </div>);
}
export default WeightElement;