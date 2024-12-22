import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    // Membuat variabel untuk menyimpan sebuah proses dengan useState

    return (
        <div>
            <p>You clicked {count} times</p>    
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setCount(count - 1)}>Click me</button>
            {/* Statenya adalah mengubah dari nilai 0 ke 1 dan seterusnya */}
        </div>        
    );  
}
export default Counter;