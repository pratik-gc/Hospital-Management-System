import {useState } from "react";

const Practise1 = (props) => {
//   const [symptoms, setSymptoms] = useState(["vomit", "ulti"]);
  const [symptom, setSymptom] = useState("");

  function callTheFunction() {
    // setSymptoms([...symptoms, symptom]);
    props.addSymptoms(symptom);
    setSymptom("");
  }


  return (
    <div>
      {/* <ul className="list-group">
        {symptoms?.map((sym, index) => (
          <li className="list-group-item bg-dark text-light" key={index}>
            {sym}
          </li>
        ))}
      </ul> */}

      <input value={symptom} onChange={(e) => setSymptom(e.target.value)} />
      <button className="btn btn-info" onClick={() => callTheFunction()}>
        Add symptom
      </button>
    </div>
  );
};
export default Practise1;
