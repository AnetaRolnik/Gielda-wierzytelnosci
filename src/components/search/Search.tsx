import Container from "../layout/container/Container";
import SearchForm from "./SearchForm";
import { SearchHandler } from "./types";

import "./Search.scss";

type Props = {
  onSearch: SearchHandler;
};

const Search = (props: Props): JSX.Element => {
  const { onSearch } = props;

  return (
    <div className="search">
      <Container>
        <div className="search__title">Podaj nip lub nazwę dłużnika</div>
        <SearchForm onSearch={onSearch} />
      </Container>
    </div>
  );
};

export default Search;
