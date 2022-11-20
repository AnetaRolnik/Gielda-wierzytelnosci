import TableRow from "./TableRow";
import { Debts } from "./types";

type Props = {
  debts: Debts;
};

const TableBody = (props: Props): JSX.Element => {
  const { debts } = props;

  return (
    <tbody>
      {debts.length > 0 &&
        debts.map((debt) => <TableRow key={debt.Id} debt={debt} />)}
    </tbody>
  );
};

export default TableBody;
