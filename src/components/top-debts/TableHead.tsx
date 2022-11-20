import { useState } from "react";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

import { SortHandler, SortBy } from "./types";

type Props = {
  onSort: SortHandler;
};

const TableHead = (props: Props): JSX.Element => {
  const { onSort } = props;

  const [sortField, setSortField] = useState("Name");
  const [order, setOrder] = useState("asc");

  const changeSortingHandler = (sortBy: SortBy) => {
    const sortOrder = sortBy === sortField && order === "asc" ? "desc" : "asc";

    setSortField(sortBy);
    setOrder(sortOrder);
    onSort(sortBy, sortOrder);
  };

  let icon: JSX.Element;

  if (order === "asc") {
    icon = <CaretDownFill className="table__icon" />;
  } else {
    icon = <CaretUpFill className="table__icon" />;
  }

  return (
    <thead>
      <tr className="table__row">
        <th
          className="table__head"
          onClick={() => changeSortingHandler("Name")}
        >
          Dłużnik
          {sortField === "Name" && icon}
        </th>
        <th className="table__head" onClick={() => changeSortingHandler("NIP")}>
          Nip
          {sortField === "NIP" && icon}
        </th>
        <th
          className="table__head"
          onClick={() => changeSortingHandler("Value")}
        >
          Kwota zadłużenia
          {sortField === "Value" && icon}
        </th>
        <th
          className="table__head"
          onClick={() => changeSortingHandler("Date")}
        >
          Data powstania zobowiązania
          {sortField === "Date" && icon}
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
