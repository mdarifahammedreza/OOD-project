import "./App.css";
import Books from "./Component/Book/Books";
import Catagories from "./Component/Catagory/Catagories";
import Header from "./Component/Header/Header";
function App() {
  return (
    <>
      <Header></Header>
      <div className="flex gap-5">
        <div className="w-1/4 bg-base-200 rounded-t-xl">
          <Catagories></Catagories>
        </div>
        <div className="w-full bg-base-200 rounded-xl">
          <Books></Books>
        </div>
      </div>
    </>
  );
}

export default App;
