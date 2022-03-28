import React from "react";

import Display from "./components/Display";

export default function App() {
  const displayFunc = (data)=> {
    console.log(data);
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Integration Testing Challenge</a>
      </nav>
      <div className="App">
        <Display displayFun={displayFunc}/>
      </div>
    </div>
  );
}
// this is a test just to see if things sync up with working copy
