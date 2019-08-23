import {useState,useEffect} from 'react'
import React from 'react'
export function ExampleState() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
         ExampleState
        </button>
      </div>
    );
}
