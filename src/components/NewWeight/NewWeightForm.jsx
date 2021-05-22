import React, {useState} from 'react';

const NewWeightForm = (props) =>{
    // User inputed data  
    // Using useState for each of the component
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredWeight, setEnteredWeight] = useState('')
    const getDateHandler = (event) =>{
       setEnteredDate(event.target.value);
      
    }
    const getWeightHandler = (event) =>{
    setEnteredWeight(event.target.value);
      
    }
    
    // Using only One useState
    // const [userInput, setUserInput] = useState({
    //     enteredDate: '',
    //     enteredWeight: '',
    // });
    // const getDateHandler = (event) =>{
    //    setUserInput(prevState => {
    //        return {...prevState , enteredDate: event.target.value}
    //    });
    
    // }
    // const getWeightHandler = (event) =>{
    //     setUserInput(prevState =>{
    //         return {...prevState , enteredWeight: event.target.value}
    //     });
    // }
    
    const submitHandler = (event) =>{
        // used not to refresh the entire page while submiting
      event.preventDefault();
      const weightData = {
          date:new Date(enteredDate),
          weight:enteredWeight,
      }
      props.onSaveWeightData(weightData);
      setEnteredDate('');
      setEnteredWeight('');
    }
    return (
            
          <form onSubmit={submitHandler}>
              <div>
                   <div>
                    <label>Date</label>
                    <input type='date' min="2021-01-01" max="2023-12-31"  value={enteredDate} onChange={getDateHandler}/>
                   </div>
                  <div>
                    <label>Weight</label>
                    <input type='number' value={enteredWeight} onChange={getWeightHandler} />
                  </div>
              </div>
              <div>
                <button type='submit'> Add Weight</button>
              </div>
          </form>
        
    );
}
export default NewWeightForm;

