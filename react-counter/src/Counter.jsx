import React , {useState} from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const HandleIncre = () => {
        setCount(count+1);
    };

    const HandleDecre = () => {
        setCount(count-1);
    };

    return (
        <React.Fragment>
            <p>Cholen guni : {count} </p>
            <button onClick={HandleIncre}>Increment</button>
            <button onClick={HandleDecre}>Decrement</button>
        </React.Fragment>
    );
};



export default Counter;
