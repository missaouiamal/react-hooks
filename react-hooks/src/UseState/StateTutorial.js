import React, {useState} from "react";

const StateTutorial = () => {
    // const [counter,setCounter]= useState(0);

    // const increment = () => {
    //    setCounter(counter+1);
    // };
    // return(
    //     <div>
    //         {counter}
    //         <br></br>
    //         <button onClick={increment}>Increment</button>
    //     </div>
    // );

    const [inputValue, setInputValue] = useState("Amal");
    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    return(
        <div>
            <input placeholder="Enter Something .."
                onChange={onChange}
             />
             <br></br>
             {inputValue}
        </div>
    );
};

export default StateTutorial;
