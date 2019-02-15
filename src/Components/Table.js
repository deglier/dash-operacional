import React from "react";

const Table = props => {
  const { thead } = props;

  const tHeadList = thead.map((th, i) => <th key={i}>{th}</th>);
  return (
    <table className="table is-narrow is-striped">
      <thead>
        <tr>{tHeadList}</tr>
      </thead>
    </table>
  );
};

export default Table;
