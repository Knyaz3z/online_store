import React from "react";

interface pageProps {
  className?: string;
}

const CategoryPage: React.FC<pageProps> = ({ className }) => {
  return (
    <div className={className}>
      {/* page component */}
    </div>
  );
};

export default CategoryPage;
