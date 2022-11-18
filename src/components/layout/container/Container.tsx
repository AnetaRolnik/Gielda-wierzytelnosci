import "./Container.scss";

type Props = {
  children: React.ReactNode;
};

const Container = (props: Props): JSX.Element => {
  const { children } = props;

  return <div className="container">{children}</div>;
};

export default Container;
