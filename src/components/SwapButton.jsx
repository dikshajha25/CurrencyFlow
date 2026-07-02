import { FaExchangeAlt } from "react-icons/fa";

const SwapButton = ({ onSwap }) => {

  return (

    <button
      type="button"
      className="swap-btn"
      onClick={onSwap}
    >

      <FaExchangeAlt />

    </button>

  );

};

export default SwapButton;