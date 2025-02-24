const PositionExample = () => {
  return (
    <div className="relative h-[300px] w-full bg-gray-200">
      <div className="absolute top-0 right-1/2 translate-x-1/2 h-16 w-16 bg-blue-500 flex items-center justify-center text-white">
        Top Center
      </div>
      <div className="absolute bottom-0 right-0 h-16 w-16 bg-red-500 flex items-center justify-center text-white">
        Bottom Right
      </div>
    </div>
  );
};

export default PositionExample;
