import Container from "../layout/container/Container";
import SearchForm from "./SearchForm";

import "./Search.scss";

const Search = (): JSX.Element => {
  return (
    <div className="search">
      <Container>
        <div className="search__title">Podaj nip lub nazwę dłużnika</div>
        <SearchForm />
      </Container>
    </div>
  );
};

export default Search;
