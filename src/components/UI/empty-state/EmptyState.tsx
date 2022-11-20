import "./EmptyState.scss";

const EmptyState = (): JSX.Element => {
  return (
    <div className="empty-state">
      Brak wyników. Spróbuj wpisać inny NIP lub nazwę dłużnika.
    </div>
  );
};

export default EmptyState;
