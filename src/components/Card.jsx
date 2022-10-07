const Card = ({ children }) => {
  return (
    <div className="w-full max-w-sm px-8">
      <div className=" flex h-28 bg-white rounded-2xl shadow-lg px-10 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Card;
