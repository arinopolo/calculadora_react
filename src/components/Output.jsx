import "./Output.css";


const Output = ({ outputNumber, outputAction }) => {
  return (
    <div className="input-view">
      <div className="output-number">
        <span>{outputNumber}</span> <span>{outputAction}</span>
      </div>
    </div>
  );
};

export default Output;
