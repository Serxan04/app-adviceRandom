import React, { useEffect, useState } from "react";
import divider from "../Images/pattern-divider-desktop.svg";
import icon from "../Images/icon-dice.svg";
const Advice = () => {
  const [data, setData] = useState(null);

  function getData() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setData(data.slip));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {data && <h3>Advice #{data.id}</h3>}
      {data && <p className="advice">"{data.advice}"</p>}

      <img className="img" src={divider} alt="" />
      <div className="circle">
        <img className="btn" onClick={() => getData()} src={icon} alt="" />
      </div>
    </div>
  );
};

export default Advice;
