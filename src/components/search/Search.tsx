import Container from "../layout/container/Container";
import SearchForm from "./SearchForm";
import { SearchHandler } from "./types";

import "./Search.scss";

type Props = {
  onSearch: SearchHandler;
  isLoading: boolean;
};

const Search = (props: Props): JSX.Element => {
  const { onSearch, isLoading } = props;

  return (
    <div className="search">
      <Container>
        <SearchForm onSearch={onSearch} isLoading={isLoading} />
      </Container>
    </div>
  );
};

export default Search;
