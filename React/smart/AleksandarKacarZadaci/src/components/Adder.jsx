import { useState } from "react";

export default function Adder() {
  const [numbers, setNumbers] = useState({ first: 50, second: 60, sum: 0 });
  const [isNaNError, setIsNaNError] = useState("none");

  const handleChangeFirst = (event) => {
    const first = event.target.value;
    setNumbers({
      ...numbers,
      first: first,
    });
  };

  const handleChangeSecond = (event) => {
    const second = event.target.value;
    setNumbers({
      ...numbers,
      second: second,
    });
  };

  const addNumbers = () => {
    console.log(numbers, "Numbers Objekat");
    const newSum = parseFloat(numbers.first) + parseFloat(numbers.second);
    console.log(newSum, "Suma");
    if (isNaN(newSum)) {
      console.log("Upao u If od addNumbers");
      setNumbers({ ...numbers, sum: "Error" });
      setIsNaNError("inline");
    } else {
      setNumbers({ ...numbers, sum: newSum });
      setIsNaNError("none");
    }
  };

  return (
    <div className="adder">
      <h2 style={{ display: isNaNError, color: "red" }}>
        Error: Please only use numbers in inputs
      </h2>
      <input
        type="text"
        name="first"
        value={numbers.first}
        onChange={handleChangeFirst}
      />
      <input
        type="text"
        name="second"
        value={numbers.second}
        onChange={handleChangeSecond}
      />
      <input type="button" value="Saberi" onClick={() => addNumbers()} />
      <h2>Rezultat: {numbers.sum}</h2>
    </div>
  );
}
