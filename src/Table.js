import React from "react";
import "./Table.css";
//import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map((item) => (
        <tr>
          <td>{item.country}</td>
          <td>
            
            <strong>{(item.cases)}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;