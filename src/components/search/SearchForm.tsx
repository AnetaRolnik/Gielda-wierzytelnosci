import { useState } from "react";

import { SearchHandler } from "./types";
import "./SearchForm.scss";

type Props = {
  onSearch: SearchHandler;
  isLoading: boolean;
};

const SearchForm = (props: Props): JSX.Element => {
  const { onSearch, isLoading } = props;

  const [enteredSearch, setEnteredSearch] = useState("");
  const [isValid, setIsValid] = useState(true);

  const searchHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (enteredSearch.length < 3 || enteredSearch.trim().length === 0) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    onSearch(enteredSearch);
  };

  return (
    <form className="form form--search" onSubmit={searchHandler}>
      <label className="form__label" htmlFor="search">
        Podaj nip lub nazwę dłużnika
      </label>
      <div className="form__actions">
        <input
          type="text"
          id="search"
          name="search"
          className="form__control"
          onChange={(event) => setEnteredSearch(event.target.value)}
          value={enteredSearch}
        />
        <button className="form__btn" disabled={isLoading}>
          Szukaj
        </button>
      </div>
      {!isValid && (
        <div className="form__error">
          Szukana fraza musi mieć co najmniej 3 znaki.
        </div>
      )}
    </form>
  );
};

export default SearchForm;
