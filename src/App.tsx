import { useEffect, useState } from "react";

import {
  Debts,
  DebtWithId,
  SortBy,
  SortOrder,
} from "./components/top-debts/types";
import { SearchedValue } from "./components/search/types";
import Search from "./components/search/Search";
import TopDebtsTable from "./components/top-debts/TopDebtsTable";
import Loader from "./components/UI/loader/Loader";
import Container from "./components/layout/container/Container";
import EmptyState from "./components/UI/empty-state/EmptyState";

const sortData = (data: any, sortBy: SortBy, sortOrder: SortOrder) => {
  const sortedData = [...data].sort(
    (a, b) =>
      a[sortBy].toString().localeCompare(b[sortBy].toString(), undefined, {
        numeric: true,
      }) * (sortOrder === "asc" ? 1 : -1)
  );

  return sortedData;
};

const App = (): JSX.Element => {
  const [debts, setDebts] = useState<Debts>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((d: DebtWithId) => {
          return {
            Id: d.Id,
            Name: d.Name,
            Value: d.Value,
            NIP: d.NIP,
            Date: d.Date,
          };
        });
        const sortedData = sortData(newData, "Name", "asc");

        setIsLoading(false);
        setDebts(sortedData);
      });
  }, []);

  const searchHandler = (search: SearchedValue) => {
    setIsLoading(true);

    fetch(
      "https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetFilteredDebts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(search),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((d: DebtWithId) => {
          return {
            Id: d.Id,
            Name: d.Name,
            Value: d.Value,
            NIP: d.NIP,
            Date: d.Date,
          };
        });

        setIsLoading(false);
        setDebts(newData);
      });
  };

  const sortHandler = (sortBy: SortBy, sortOrder: SortOrder) => {
    const sortedData = sortData(debts, sortBy, sortOrder);

    setDebts(sortedData);
  };

  return (
    <>
      <Search onSearch={searchHandler} isLoading={isLoading} />
      <Container>
        {isLoading && <Loader />}
        {!isLoading && debts.length > 0 && (
          <TopDebtsTable debts={debts} onSort={sortHandler} />
        )}
        {!isLoading && debts.length === 0 && <EmptyState />}
      </Container>
    </>
  );
};

export default App;
