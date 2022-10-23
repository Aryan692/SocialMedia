import "./App.css"
// import Authentication from "./components/Authentication";
// import Home from "./components/Home";
import Profile from "./components/Profile/Profile";



function App() {
  return (
    <div >
      <h1 className="App bg-[#cfcdcd] text-[#242d49] overflow-hidden p-[1rem]">

        <div className="blur1 absolute blur-[72px] bg-[#a6ddf0] top-[-18%] right-[0%] w-[22rem] h-[14rem]"></div>
        <div className="blur2 absolute blur-[72px] bg-[#a6ddf0] top-[36%] left-[-8%] w-[22rem] h-[14rem]"></div>
      {/* <Home /> */}
      <Profile />
       
       {/* <Authentication /> */}
        </h1>  
    </div>
  );
}

export default App;
