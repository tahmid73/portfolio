import "../App.css";
import TitleBar from "./titlebar";

function Home() {
  return (
    // <div className='bg-[#BFEAD5] min-h-screen min-w-screen'>
    <div className="bg-[#F8F6E6] min-h-screen  border-[50px] border-[#BFEAD5]">
      <img src="../home/25708.jpg" alt="" />
      <TitleBar />
      <div className="mx-auto mt-5 border-[20px] border-[#4C4D49] h-[650px] w-[92%] grid grid-cols-4">
        <p className="col-span-2 text-9xl mx-auto my-auto">
          <p className="p-6 underline underline-offset-[28px]">TAHMID</p>
          <p className="p-6 underline underline-offset-[28px]">ISLAM</p>
          <p className="p-6">BHUIYAN</p>
        </p>
      </div>
      <div className="w-[94%] mx-auto mt-14 border-b-8 border-dashed border-main border-[#4C4D49]"></div>
    </div>
    // </div>
  );
}

export default Home;
