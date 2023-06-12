import "./App.css";
import Apidatadisplay from "./components/Apidatadisplay";
import Editpage from "./components/EditPage";
import Insertpage from "./components/InsertPage";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App" style={{ textAlign: "-webkit-center" }}>
        <h1>Crud redux API</h1>
        <div style={{ marginBottom: "20px" }}>
          <Link to={/crud-redux-api}>HOme</Link>
          <Link to={"crud-redux-api/insert"}>Insert</Link>
        </div>
        <Routes>
          <Route path="/crud-redux-api" element={<Apidatadisplay />} />
          <Route path="/crud-redux-api/insert" element={<Insertpage />} />
          <Route path="crud-redux-api/edit/:id" element={<Editpage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
