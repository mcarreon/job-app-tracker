const GridExpand = props => {
  const { desc, notes, stack } = props;

  return (
    <div className="grid--expand">
      <div>
        <h3>Description</h3>
        <p>{desc}</p>
      </div>
      <div>
        <h3>Notes</h3>
        <p>{notes}</p>
      </div>
      <div>
        <h3>Stack</h3>
        <p>{stack}</p>
      </div>
    </div>
  );
};

export default GridExpand;
