// import './App.css';
import Home from './home/home';
import Desktop from './pc/desktop';

function App() {
  return (
    // <div className="App">
    //   <center className='pt-10'><h1 className="font-bold">Welcome Here</h1></center>
    //   <center><p className="italic">This page is under construction. Now it's like the city corporation's project. No one knows when it'll be done.</p></center> 
    // </div>
    <div>
      {/* <Home/> */}
      <Desktop title={'About'}/>
    </div>
  );
}

export default App;
