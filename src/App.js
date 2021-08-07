import Data from "./components/Data";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="container" >
      <div style={{height:"100px", backgroundColor:"lightgreen", padding:"10px"}}>
        <Data/>
      </div>
      <div style={{height:"100px", backgroundColor:"#FFDF00", padding:"10px"}}>
        <Loading />
      </div>
      <div style={{height:"100px", backgroundColor:"coral", padding:"10px"}}>
        <Error />
      </div>
    </div>
  );
}

export default App;
