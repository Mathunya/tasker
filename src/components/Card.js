export const Card = ({ header, children }) => {
  return (
    <div
      className="mb-3 p-2"
      style={{ backgroundColor: "#f1f1f1", borderRadius: 25 }}
    >
      <div className="card-header ps-4 bg-transparent">
        <span className="ms-1">{header}</span>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};
