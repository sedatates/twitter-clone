import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      {/*sidebar*/}

      <div className="responsive">
        <Sidebar />
      </div>
      {/*feed*/}
      <div className="responsiveFeed">
        <Feed />
      </div>

      {/*widgets*/}
      <div className="responsive2">
        <Widgets />
      </div>
    </div>
  );
}

export default App;
