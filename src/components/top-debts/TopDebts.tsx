import Container from "../layout/container/Container";
import DebtTable from "./DebtTable";
import { Debts } from "./types";

type Props = {
  debts: Debts | null;
};

const TopDebts = (props: Props): JSX.Element => {
  const { debts } = props;

  return (
    <Container>
      <DebtTable debts={debts} />
    </Container>
  );
};

export default TopDebts;
