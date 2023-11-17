import "./Number.css";

const Number = ({ number, onClick }) => {
  return (
    <div
      className="number"
      onClick={() => {
        onClick(number);
      }}
    >
      {number}
    </div>
  );
};

export default Number;
