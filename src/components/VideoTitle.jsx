

const VideoTitle=({title,overview})=>{
    return (
      <div className="w-screen aspect-video  pt-[30%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/2">{overview}</p>
        <div>
          <button className="bg-white text-black p-4 px-12 font-extrabold text-xl rounded-lg hover:opacity-80">
            ▶️Play
          </button>
          <button className=" mx-2 bg-gray-500 text-black p-4 px-12 font-extrabold text-xl bg-opacity-50 rounded-lg hover:opacity-80">
            ℹ️More Info
          </button>
        </div>
      </div>
    );
}

export default VideoTitle;
