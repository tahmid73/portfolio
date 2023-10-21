import "../App.css";
import { LeftOutlined, RightOutlined, MenuOutlined, AppstoreOutlined, CloseOutlined, MinusOutlined, FlagOutlined } from "@ant-design/icons";

const Desktop = ({ title }) => {
  return (
    <div className="bg-[#E4D9C4] min-h-screen  border-[40px] border-[#AFD1CE]">
      <div className="h-[400px] w-[80%] md:w-[37%] mt-44 bg-[#F1EBDD] border-[#323130] border-[3px] mx-auto rounded-xl shadow-[#323130] shadow-right-bottom border-b-8 border-r-8">
        <div className="h-[20%] border-[#323130] border-b-[3px]">
          <div className="flex">
            <div className="flex p-2">
              <div className="flex bg-red-200 border-[#323130] w-6 h-6 border-[2px] rounded-full justify-center items-center">
                <CloseOutlined />
              </div>
              <div className="flex bg-green-200 border-[#323130] w-6 h-6 border-[2px] rounded-full ml-2 justify-center items-center">
              <MinusOutlined />
              </div>
            </div>
            <div className="ml-[34%] p-2 font-semibold">{title}</div>
          </div>
          <div className="flex px-2">
              <div className="flex p-2 w-8 h-6 border-[#323130] border-[3px] rounded-md justify-center items-center">
              <LeftOutlined />
            </div>
            <div className="flex p-2 w-8 h-6 ml-2 border-[#323130] border-[3px] rounded-md justify-center items-center">
              <RightOutlined />
            </div>
            <div className="flex p-2 w-8 h-6 ml-4 border-[#323130] border-[3px] rounded-md justify-center items-center">
              <MenuOutlined />
            </div>
            <div className="flex p-2 w-8 h-6 ml-1 bg-[#B5D4D1] border-[#323130] border-[3px] rounded-md justify-center items-center">
              <AppstoreOutlined /> 
            </div>
          </div>
        </div>
        <center className="pt-5">
          <h1 className="font-bold text-3xl">Tahmid Islam</h1>
          <h1 className="font-semibold">Working as a Junior Software Developer</h1>
        </center>
        <center className="pt-10">
          <h1 className="font-bold">Welcome Here</h1>
        </center>
        <center className="pt-2">
        <FlagOutlined className="text-5xl"/>
        </center>
        <center>
          <p className="italic">
            This page is under construction. Now it's like the city
            corporation's project. No one knows when it'll be done.
          </p>
        </center>
      </div>
    </div>
  );
};

export default Desktop;
