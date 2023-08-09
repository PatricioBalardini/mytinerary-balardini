import "../styles/login.scss";

export default function PrimaryButton() {
  const name = "Login";
  return (
    <div className="login">
      <button className="button">
        <div className="user-icono">
          <i className="fa-solid fa-user user-login"></i>
        </div>
        {name}
      </button>
    </div>
  );
}
