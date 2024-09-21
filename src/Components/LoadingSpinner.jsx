import "../App.css";
const LoadingSpinner = () => {
  return (
    <center>
      <div className="d-flex justify-content-center">
        <div
          style={{ width: "3rem", height: "3rem" }}
          className="spinner-border  spin text-primary"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </center>
  );
};
export default LoadingSpinner;
