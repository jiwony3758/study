import React, { useEffect, useState } from 'react'

function Hello() {
  const byeFn = () => console.log("Bye!");
  const hiFn = () => {
    console.log("Hi!");
    return byeFn;
  }
  
  useEffect(hiFn, [])
  return <h1>Hello</h1>
}

export default function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show" }</button>
    </div>
  )
}
