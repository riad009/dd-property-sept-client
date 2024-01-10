import { useState } from "react";
import { cn } from "../utils/cn";

const FurnishOptions = ({ options, onCategoryChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (categoryId) => {
    const updatedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];

    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  };

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {options?.map((category) => (
        <div
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={cn(
            "rounded-[31px] text-[14px] hover:bg-[#ffeceb] py-2 px-5 cursor-pointer",
            selectedCategories.includes(category.id)
              ? "text-black bg-[#ffeceb] transition-all duration-200"
              : "text-[#171D26] font-normal bg-[#F6F6F6] transition-all duration-200 "
          )}
        >
          {category.label}
        </div>
      ))}
    </div>
  );
};

export default FurnishOptions;
