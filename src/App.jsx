import desktopBG from "./assets/images/pattern-background-desktop.svg";
import musicSVG from "./assets/images/icon-music.svg";
import image from "./assets/images/illustration-hero.svg";

function App() {
  return (
    <>
      <div className="bg-[#dfe8ff] min-h-screen flex justify-center items-center">
        <img src={desktopBG} className="top-0 w-full absolute" />
        <main className=" w-[28rem] z-10 flex flex-col bg-white rounded-2xl">
          <img src={image} className="rounded-tr-2xl rounded-tl-2xl" />
          <div className="flex flex-col mx-12 my-10">
            <center>
              <h1 className="font-bold text-3xl mb-6">Order Summary</h1>
              <p className="text-slate-600 my-2">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>
            </center>
            <div className="my-2 p-6 rounded-xl flex flex-row justify-between items-center bg-[#f8f9fe] hover:bg-indigo-200/20">
              <div className="flex flex-row items-center">
                <img src={musicSVG} />
                <div className="mx-4 flex flex-col">
                  <h1 className="font-bold">Annual Plan</h1>
                  <h2>$59.99/year</h2>
                </div>
              </div>
              <span className="text-[#534cb1] font-bold underline cursor-pointer">
                Change
              </span>
            </div>
            <button className="bg-[#3c2cdc] hover:bg-[#3c2cdc]/90 shadow-xl shadow-[#3c2cdc]/30 py-3 rounded-xl mt-4 mb-8 text-white font-bold">
              Proceed to Payment
            </button>
            <button className="text-gray-500 hover:text-gray-800 font-bold">
              Cancel Order
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
