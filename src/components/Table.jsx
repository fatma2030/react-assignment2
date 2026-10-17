import React from "react";
import "./Table.css";

/**
 * Reusable Table component
 * Props:
 *  - columns: string[] -> column headers, e.g. ["Name", "Age", "City"]
 *  - data: object[] -> rows; keys should match lowercase column names
 *  - striped: boolean (optional) -> enable striped rows
 */
function Table({ columns, data, striped = false }) {
  return (
    <table className={`table ${striped ? "table-striped" : ""}`}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td key={col}>{row[col.toLowerCase()]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
