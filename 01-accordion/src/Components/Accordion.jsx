import React, { useState } from "react";
import { data } from "./data.js";
import "../index.css";

function Accordion() {
  const [selected, setSelected] = useState();
  const [enableMulSel, setEnableMulSel] = useState(false);
  // An array that stores multi items which are open
  const [mulSel, setMulSel] = useState([]);

  const mulSelectionFn = (id) => {
    let copyMul = [...mulSel];
    const indexOfCurrentId = copyMul.indexOf(id);
    if (indexOfCurrentId === -1) copyMul.push(id);
    else copyMul.splice(indexOfCurrentId, 1);
    setMulSel(copyMul);
  };

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };
  return (
    <>
      <div className="wrapper">
        <button className="btn" onClick={() => setEnableMulSel(!enableMulSel)}>
          Multiples {enableMulSel ? "on" : "off"}
        </button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((data) => (
              <div className="item" key={data.id}>
                <div
                  className="question"
                  onClick={
                    enableMulSel
                      ? () => mulSelectionFn(data.id)
                      : () => handleSingleSelection(data.id)
                  }
                >
                  <h3>{data.question}</h3>
                  <span>+</span>
                </div>
                {enableMulSel
                  ? mulSel.indexOf(data.id) !== -1 && (
                      <div className="answer">
                        <h3>{data.answer}</h3>
                      </div>
                    )
                  : selected === data.id && (
                      <div className="answer">
                        <h3>{data.answer}</h3>
                      </div>
                    )}

                {/* {selected === data.id || mulSel.indexOf(data.id) !== -1 ? (
                  <div className="answer">
                    <h3>{data.answer}</h3>
                  </div>
                ) : null} */}
              </div>
            ))
          ) : (
            <h2>No data Found!</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default Accordion;

// Either only one accordion opens at the time or give a button on which it allows to open multiple accordion
