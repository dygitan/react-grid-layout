const Grid = ({ children }) => {
  return <div className={`grid`}>{children}</div>;
};

Grid.Col = ({ children, lg = 12, md = 12, sm = 12 }) => {
  console.log(`md=${md}`);
  return (
    <div className={`col col-sm-${sm} col-md-${md} col-lg-${lg}`}>
      {children}
    </div>
  );
};

export default Grid;
