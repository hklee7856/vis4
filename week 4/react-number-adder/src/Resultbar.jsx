import { useDispatch, useSelector } from "react-redux";

export default function Resultbar() {
  const count = useSelector((s) => s.count);
  const history = useSelector((s) => s.history);
  const dispatch = useDispatch();

  const msg =
    count > 0 ? "The total is positive."
    : count < 0 ? "The total is negative."
    : "The total is zero.";

  const adds = history.filter((h) => typeof h === "number" && h > 0).length;
  const subs = history.filter((h) => typeof h === "number" && h < 0).length;

  return (
    <>
      <h3>RESULT</h3>
      <p id="resultId">{count}</p>
      <p id="totalMessage">{msg}</p>

      <h3>SUMMARY</h3>
      <p id="summary">Total additions: {adds}, Total subtractions: {subs}</p>

      <h3>HISTORY (click to remove)</h3>
      <ul id="historyList">
        {history.map((item, i) => (
          <li
            key={i}
            className="history-item"
            onClick={() => dispatch({ type: "UPDATE_HISTORY", payload: i })}
          >
            {String(item)}
          </li>
        ))}
      </ul>
    </>
  );
}
