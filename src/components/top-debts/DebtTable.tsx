import { useEffect, useState } from "react";

import Debt from "./Debt";
import { Debts } from "./types";

const DebtTable = (): JSX.Element => {
  const [debts, setDebts] = useState<Debts | null>([]);

  useEffect(() => {
    fetch("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts")
      .then((response) => response.json())
      .then((data) => setDebts(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Dłużnik</th>
          <th>Nip</th>
          <th>Kwota zadłużenia</th>
          <th>Data powstania zobowiązania</th>
        </tr>
      </thead>
      <tbody>
        {debts && debts.map((debt) => <Debt key={debt.Id} debt={debt} />)}
      </tbody>
    </table>
  );
};

export default DebtTable;
