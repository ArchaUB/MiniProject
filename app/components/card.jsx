export const Card = ({ children, className = "" }) => {
    return (
      <div className={`bg-white rounded-lg p-4 shadow-md ${className}`}>
        {children}
      </div>
    );
  };
  
  export const CardContent = ({ children }) => {
    return <div className="mt-2">{children}</div>;
  };
  
  export const CardTitle = ({ children }) => {
    return <h2 className="text-lg font-bold">{children}</h2>;
  };