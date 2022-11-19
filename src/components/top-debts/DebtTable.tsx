import Debt from "./Debt";
import { Debts } from "./types";

import "./DebtTable.scss";

type Props = {
  debts: Debts | null;
};

const DebtTable = (props: Props): JSX.Element => {
  const { debts } = props;

  return (
    <table className="table table--debts">
      <thead>
        <tr className="table__row">
          <th className="table__head">Dłużnik</th>
          <th className="table__head">Nip</th>
          <th className="table__head">Kwota zadłużenia</th>
          <th className="table__head">Data powstania zobowiązania</th>
        </tr>
      </thead>
      <tbody>
        {debts && debts.map((debt) => <Debt key={debt.Id} debt={debt} />)}
      </tbody>
    </table>
  );
};

export default DebtTable;
