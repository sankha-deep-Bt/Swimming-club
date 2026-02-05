const NoticeBoard = () => {
  return (
    <div className="w-full bg-[#f0faff]  py-12 px-4 md:px-0">
      {/* Banner Container */}
      <div className="max-w-7xl mx-auto relative h-screen aspect-[21/9] md:aspect-[3/1] bg-[#ccd5e0] overflow-hidden shadow-sm">
        {/* Stylized Mountain/Hill Shapes */}
        <div className="absolute bottom-0 left-[-10%] w-[70%] h-[80%] bg-[#f8fafc] rounded-[100%] translate-y-1/2"></div>
        <div className="absolute bottom-0 right-[-10%] w-[75%] h-[90%] bg-[#f1f5f9] rounded-[100%] translate-y-1/3"></div>

        {/* Stylized Sun/Moon */}
        <div className="absolute top-[30%] left-[25%] w-12 h-12 md:w-20 md:h-20 bg-[#f8fafc] rounded-full opacity-80"></div>

        {/* Optional Overlay Text or Content can be placed here */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <h1 className="text-4xl font-bold text-slate-700">Your Title Here</h1> */}
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
