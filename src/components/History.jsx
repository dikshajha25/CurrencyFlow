const History = ({ history }) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="history-box">
      <h3>Recent Conversions</h3>

      {history.map((item, index) => (
        <div className="history-item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default History;