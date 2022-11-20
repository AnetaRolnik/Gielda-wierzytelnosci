import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { Debts, SortHandler } from "./types";

import "./TopDebtsTable.scss";

type Props = {
  debts: Debts;
  onSort: SortHandler;
};

const TopDebtsTable = (props: Props): JSX.Element => {
  const { debts, onSort } = props;

  return (
    <table className="table table--debts">
      <TableHead onSort={onSort} />
      <TableBody debts={debts} />
    </table>
  );
};

export default TopDebtsTable;
