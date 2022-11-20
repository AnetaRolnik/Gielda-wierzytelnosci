import { DebtWithoutId } from "./types";

type Props = {
  debt: DebtWithoutId;
};

const padTo2Digits = (num: number) => num.toString().padStart(2, "0");

const formatDate = (date: Date) =>
  [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("-");

const TableRow = (props: Props): JSX.Element => {
  const { Name, NIP, Value, Date: date } = props.debt;

  const newDate = new Date(date);
  const formattedDate = formatDate(newDate);

  return (
    <tr className="table__row">
      <td className="table__data">{Name}</td>
      <td className="table__data">{NIP}</td>
      <td className="table__data">{Value}</td>
      <td className="table__data">{formattedDate}</td>
    </tr>
  );
};

export default TableRow;
