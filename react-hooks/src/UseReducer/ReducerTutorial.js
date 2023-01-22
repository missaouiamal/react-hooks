import React , {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count+1, showText: state.showText}
        case "toggleShowText":
            return {count: state.count, showText: !state.showText}
        default:
            return state
    }
} 
// When you have a bunch of state declaration , many different states that are being altered in the same action 
const ReducerTutorial = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText:true});

    return(
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({type: "INCREMENT"});
                    dispatch({ type: "toggleShowText"});
                }}
            >Click Here</button>
            {state.showText && <p> This is a Text !</p>}
        </div>
    );

    // const [count,setCounter] = useState(0);
    // const [showText, setShowText] = useState(true);

    // return(
    //     <div>
    //         <h1>{count}</h1>
    //         <button
    //             onClick={() => {
    //                 setCounter(count+1);
    //                 setShowText(!showText);
    //             }}
    //         >
    //             Click Here
    //         </button>
    //         {showText && <p> This is a text</p>}
    //     </div>
    // );
}

export default ReducerTutorial;