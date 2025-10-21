import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Range } from "react-range";

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
  {
    title: "Length",
    type: "range",
    min: 10,
    max: 60,
  },
];

const FilterPanel = () => {
  const [openSections, setOpenSections] = useState({});
  const [lengthRange, setLengthRange] = useState([20, 45]);

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
              {filter.type === "range" ? (
                <div className="range-slider">
                  <Range
                    step={1}
                    min={filter.min}
                    max={filter.max}
                    values={lengthRange}
                    onChange={setLengthRange}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        style={{
                          height: "6px",
                          width: "100%",
                          background: "#ddd",
                          borderRadius: "3px",
                          marginTop: "15px",
                          position: "relative"
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            height: "6px",
                            background: "#007bff",
                            borderRadius: "3px",
                            left: `${
                              ((lengthRange[0] - filter.min) /
                                (filter.max - filter.min)) *
                              100
                            }%`,
                            width: `${
                              ((lengthRange[1] - lengthRange[0]) /
                                (filter.max - filter.min)) *
                              100
                            }%`,
                          }}
                        />
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        style={{
                          height: "18px",
                          width: "18px",
                          borderRadius: "50%",
                          backgroundColor: "#007bff",
                          cursor: "pointer",
                          boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "-18px",
                        }}
                      />
                    )}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  >
                    <span>{lengthRange[0]} ft</span>
                    <span>{lengthRange[1]} ft</span>
                  </div>
                </div>
              ) : (
                filter.options.map((option, idx) => (
                  <div className="check-box-item" key={idx}>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() =>
                          handleCheckboxChange(filter.title, option)
                        }
                      />{" "}
                      {option}
                    </label>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default FilterPanel;
