import { DebtWithoutId } from "./types";

type Props = {
  debt: DebtWithoutId;
};

const Debt = (props: Props): JSX.Element => {
  const { Name, NIP, Value, Date: date } = props.debt;

  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString();

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
