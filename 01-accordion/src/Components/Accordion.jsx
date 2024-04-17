import React, { useState } from "react";
import { data } from "./data.js";
import "../index.css";

function Accordion() {
  const [selected, setSelected] = useState();
  const [enableMulSel, setEnableMulSel] = useState(false);
  const [mulSel, setMulSel] = useState([]);

  const mulSelectionFn = (id) => {
setMulSel()

  };

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };
  return (
    <>
      <div className="wrapper">
        <button className="btn" onClick={() => setEnableMulSel(!enableMulSel)}>
          Multiples
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
                {selected === data.id ? (
                  <div className="answer">
                    <h3>{data.answer}</h3>
                  </div>
                ) : null}
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
