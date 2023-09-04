import { useEffect, useState } from "react";
import Practise1 from "./Practise1";

const Practise2 = () => {
  let [ans, setAns] = useState([]);

  function getTheSymptomsList(p) {
    console.log(p);
    setAns([...ans, p]);
    console.log(ans.length);
  }

  useEffect(() => {
    console.log(ans);
  }, [ans]);

  return (
    <div>
      {ans}
      <br></br>
      <br></br>
      {/* <button onClick={doSomething}>click me</button> */}

      {ans?.map((sym, index) => (
        <li className="list-group-item bg-dark text-light" key={index}>
          {sym}
        </li>
      ))}

      <br></br>
      <Practise1 addSymptoms={getTheSymptomsList}></Practise1>
      <br></br>
      <br></br>
    </div>
  );
};

export default Practise2;
