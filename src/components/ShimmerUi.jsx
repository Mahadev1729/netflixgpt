// components/ShimmerCard.js
const ShimmerUi = () => {
  return (
    <div className="min-w-[280px] h-[300px] rounded-lg overflow-hidden shadow-lg relative bg-gray-800">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700" />
    </div>
  );
};

export default ShimmerUi;
