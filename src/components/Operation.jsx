const Operation = ({ action, onClick }) => {
  return (
    <div
      onClick={() => {
        onClick(action);
      }}
    >
      {action}
    </div>
  );
};

export default Operation;
