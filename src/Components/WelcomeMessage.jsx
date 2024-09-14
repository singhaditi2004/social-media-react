import "../App.css";
const WelcomeMessage = ({ onGetPostClicked }) => {
  return (
    <center>
      <div className="container">
        <h1>Welcome to Social Media</h1>
        <p>Connect with friends and the world around you on Social Media.</p>
      </div>
      <button
        type="button"
        className="btn btn-primary welcBtn"
        onClick={onGetPostClicked}
      >
        Search Posts
      </button>
    </center>
  );
};
export default WelcomeMessage;
