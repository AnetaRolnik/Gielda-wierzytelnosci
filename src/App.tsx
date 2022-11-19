import { useEffect, useState } from "react";

import { Debts } from "./components/top-debts/types";
import { SearchedValue } from "./components/search/types";
import Search from "./components/search/Search";
import TopDebts from "./components/top-debts/TopDebts";
import Loader from "./components/UI/loader/Loader";

const App = (): JSX.Element => {
  const [debts, setDebts] = useState<Debts>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://rekrutacja-webhosting-it.krd.pl/api/Recruitment/GetTopDebts")
      .then((response) => response.json())
      .then((data) => {
        const sotrtedData = data.sort((a: any, b: any) =>
          a.Name > b.Name ? 1 : -1
        );
        setIsLoading(false);
        setDebts(sotrtedData);
      });
  }, [setDebts]);

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
        setIsLoading(false);
        setDebts(data);
      });
  };

  return (
    <>
      <Search onSearch={searchHandler} isLoading={isLoading} />
      {isLoading && <Loader />}
      {!isLoading && debts.length > 0 && <TopDebts debts={debts} />}
    </>
  );
};

export default App;
