import "../App.css";

const Desktop = ({title})=> {
  return (
    <div className="bg-[#E4D9C4] min-h-screen  border-[40px] border-[#AFD1CE] border-b-[]">
      <div className="h-[400px] w-[600px] mt-44 bg-[#F1EBDD] border-[#323130] border-[3px] mx-auto rounded-xl shadow-[#323130] shadow-right-bottom border-b-8 border-r-8">
        <div className="h-[20%] border-[#323130] border-b-[3px]">
          <div className="flex">
          <div className="flex p-2">
            <div className="border-[#323130] w-5 h-5 border-[3px] rounded-full"></div>
            <div className="border-[#323130] w-5 h-5 border-[3px] rounded-full ml-2"></div>
          </div>
            <div className="ml-[35%] p-2 font-semibold">{title}</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );  
}

export default Desktop;
