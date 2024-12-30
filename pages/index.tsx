import PageWrapper from "@/components/globals/wrapper";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <PageWrapper>
      <div className="ml-3  grid grid-cols-2 gap-4  w-screen h-screen justify-evenly items-center">
        <div className="grid grid-row-3 gap-4">
          <div className="flex items-center ">
            <div className="  text-white  flex-grow row-content-between gap-5 justify-items-center ">
              <div className="flex items-center justify-center bg-black w-80 h-32 rounded-md">Ads</div>
              <div className="flex items-center justify-center bg-yellow-500 w-72 h-32 rounded-md">Events</div>
            </div>
          </div>
          <div className="h-72 bg-red-800 text-white flex items-center justify-center rounded-md">
            The Name School Worldwide
          </div>
        </div>

        <div className="grid grid-row-3 gap-4">
          <div className="h-72 bg-red-800 text-white flex items-center justify-center rounded-md ">
            Baptism
          </div>
          <div className="flex items-center ">
            <div className=" text-white justify-items-center gap-5 flex-grow row-content-between">
              <div className="flex items-center justify-center bg-purple-800 w-72 h-32 rounded-md">The Yout</div>
              <div className="flex items-center justify-center bg-purple-800 w-72 h-32 rounded-md ">Sceva </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
