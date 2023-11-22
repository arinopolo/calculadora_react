const Even = ({ even, onClick }) => {
  return (
    <div className="even" onClick={onClick}>
      {even}
    </div>
  );
};

export default Even;
