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

const Debt = (props: Props): JSX.Element => {
  const { Name, NIP, Value, Date: date } = props.debt;

  const newDate = new Date(date);
  const formattedDate = formatDate(newDate);

  return (
    <tr>
      <td>{Name}</td>
      <td>{NIP}</td>
      <td>{Value}</td>
      <td>{formattedDate}</td>
    </tr>
  );
};

export default Debt;
