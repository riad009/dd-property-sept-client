import { useState } from "react";
import { cn } from "../utils/cn";

const FurnishOptions = ({ options }) => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {options?.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={cn(
            "rounded-[31px] text-[14px] hover:bg-[#ffeceb] py-2 px-5",
            activeCategory === category.id
              ? "text-black bg-[#ffeceb] transition-all duration-200"
              : "text-[#171D26] font-normal bg-[#F6F6F6] transition-all duration-200 "
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default FurnishOptions;
