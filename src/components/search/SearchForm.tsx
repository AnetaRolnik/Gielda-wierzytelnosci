import { useState } from "react";

import "./SearchForm.scss";

type Props = {
  onSearch: (search: string) => void;
};

const SearchForm = (props: Props): JSX.Element => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const { onSearch } = props;

  const searchHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    onSearch(enteredSearch);
  };

  return (
    <form className="form form--search" onSubmit={searchHandler}>
      <input
        type="text"
        id="search"
        name="search"
        className="form__control"
        onChange={(event) => setEnteredSearch(event.target.value)}
        value={enteredSearch}
      />
      <button className="form__btn">Szukaj</button>
    </form>
  );
};

export default SearchForm;
