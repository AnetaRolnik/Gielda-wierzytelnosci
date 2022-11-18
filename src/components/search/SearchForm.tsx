import "./SearchForm.scss";

const SearchForm = (): JSX.Element => {
  return (
    <form className="form form--search">
      <input type="text" id="search" name="search" className="form__control" />
      <button className="form__btn">Szukaj</button>
    </form>
  );
};

export default SearchForm;
