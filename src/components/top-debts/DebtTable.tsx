import { useEffect, useState } from "react";

import Debt from "./Debt";
import { Debts } from "./types";

import "./DebtTable.scss";

const DebtTable = (): JSX.Element => {
  const [debts, setDebts] = useState<Debts | null>([]);

  useEffect(() => {
    fetch("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts")
      .then((response) => response.json())
      .then((data) => {
        const sotrtedData = data.sort((a: any, b: any) =>
          a.Name > b.Name ? 1 : -1
        );
        setDebts(sotrtedData);
      });
  }, []);

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
