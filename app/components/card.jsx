export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-gray-100 rounded-1xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <p className="text-gray-600 mt-2">{children}</p>;
};

export const CardTitle = ({ children }) => {
  return <h2 className="text-xl font-semibold">{children}</h2>;
};




