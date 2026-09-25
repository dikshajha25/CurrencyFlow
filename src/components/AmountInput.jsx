const AmountInput = ({
  amount,
  setAmount,
}) => {
  return (
    <div className="input-group">

      <label>Amount</label>

      <input
        type="number"
        min="1"
        step="0.01"
        placeholder="Enter amount"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
      />

    </div>
  );
};

export default AmountInput;