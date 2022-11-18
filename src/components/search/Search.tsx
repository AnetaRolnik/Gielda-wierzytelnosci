import Container from "../layout/container/Container";
import SearchForm from "./SearchForm";

import "./Search.scss";

const Search = (): JSX.Element => {
  return (
    <div className="search">
      <Container>
        <SearchForm />
      </Container>
    </div>
  );
};

export default Search;
