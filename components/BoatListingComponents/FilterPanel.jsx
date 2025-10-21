import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const filtersData = [
  {
    title: "Condition",
    options: ["All", "New", "Pre Owned"],
  },
  {
    title: "Brand",
    options: ["Axis", "Mastercraft", "Fairline"],
  },
  {
    title: "Category",
    options: ["Pontoon Boats", "Ski/Wakeboard Boat"],
  },
];

const FilterPanel = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };


  const handleCheckboxChange = (filterTitle, option) => {
    console.log(`Filter: ${filterTitle}, Option: ${option}`);
  };

  return (
    <>
      {filtersData.map((filter, index) => (
        <div className="filter-card" key={index}>
          <div
            className="filter-card-header"
            onClick={() => toggleSection(filter.title)}
          >
            <h5>{filter.title}</h5>
            {openSections[filter.title] ? <Minus /> : <Plus />}
          </div>

          {openSections[filter.title] && (
            <div className="filter-card-content">
              {filter.options.map((option, idx) => (
                <div className="check-box-item" key={idx}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(filter.title, option)}
                    />{" "}
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default FilterPanel;
