import "./Output.css";

const Output = ({ outputNumberOne, outputAction, outputNumberTwo, result }) => {
  return (
    <div className="input-view">
      <div className="output-number">
        {result ? (
          <>
            <span>{result}</span>
          </>
        ) : (
          <>
            <span>{outputNumberOne}</span>
            <span>{outputAction}</span>
            <span>{outputNumberTwo}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Output;
