const ResultCard = ({
  amount,
  from,
  to,
  result,
  rate,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <div className="result-box">
        <h2>Fetching latest exchange rate...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="result-box error-box">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="result-box">

      <div className="result-label">
        Converted Amount
      </div>

      <div className="result-main">
        {result} {to}
      </div>

      <div className="result-original">
        {amount} {from}
      </div>

      <div className="rate-line">
        1 {from} = {rate} {to}
      </div>

    </div>
  );
};

export default ResultCard;