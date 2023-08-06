import MainLayaout from "./layouts/NavLayaout";
import Main from "./components/Main";
import "/App.css";

function App() {
  return (
    <div className="body">
      <MainLayaout>
        <Main />
      </MainLayaout>
    </div>
  );
}

export default App;
