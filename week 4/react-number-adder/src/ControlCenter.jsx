import { useDispatch } from "react-redux";

export default function ControlCenter() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="controls">
        <button onClick={() => dispatch({ type: "REMOVE_2" })}>-2</button>
        <button onClick={() => dispatch({ type: "REMOVE_1" })}>-1</button>
        <button id="btnReset" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <button onClick={() => dispatch({ type: "ADD_1" })}>+1</button>
        <button onClick={() => dispatch({ type: "ADD_2" })}>+2</button>
      </div>

      <div className="clear-container" style={{ marginTop: 16 }}>
        <button id="btnClearAll" onClick={() => dispatch({ type: "CLEAR_ALL" })}>
          Clear History &amp; Results
        </button>
      </div>
    </>
  );
}
