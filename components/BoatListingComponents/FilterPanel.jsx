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
    unit: "ft",
  },
  {
    title: "Price",
    type: "range",
    min: 50000,
    max: 500000,
    unit: "$",
  },
];

const FilterPanel = () => {
  const [openSections, setOpenSections] = useState({});
  const [lengthRange, setLengthRange] = useState([20, 45]);
  const [priceRange, setPriceRange] = useState([100000, 300000]);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleCheckboxChange = (filterTitle, option) => {
    console.log(`Filter: ${filterTitle}, Option: ${option}`);
  };

  // 🔹 Reusable function to render a range slider
  const renderRangeSlider = (filter) => {
    const isPrice = filter.title === "Price";
    const values = isPrice ? priceRange : lengthRange;
    const setValues = isPrice ? setPriceRange : setLengthRange;

    return (
      <div className="range-slider">
        <Range
          step={isPrice ? 5000 : 1}
          min={filter.min}
          max={filter.max}
          values={values}
          onChange={setValues}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                height: "6px",
                width: "100%",
                background: "#ddd",
                borderRadius: "3px",
                marginTop: "15px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  height: "6px",
                  background: "#007bff",
                  borderRadius: "3px",
                  left: `${
                    ((values[0] - filter.min) / (filter.max - filter.min)) * 100
                  }%`,
                  width: `${
                    ((values[1] - values[0]) / (filter.max - filter.min)) * 100
                  }%`,
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props, key }) => {
            const { key: _key, ...rest } = props;
            return (
              <div
                key={_key}
                {...rest}
                style={{
                  ...rest.style,
                  height: "18px",
                  width: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#007bff",
                  cursor: "pointer",
                  boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            );
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <span>
            {filter.unit === "$"
              ? `$${values[0].toLocaleString()}`
              : `${values[0]} ft`}
          </span>
          <span>
            {filter.unit === "$"
              ? `$${values[1].toLocaleString()}`
              : `${values[1]} ft`}
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="filter-header">
        <h6>Filter</h6>
      </div>

      {filtersData.map((filter, index) => (
        <div className="filter-card" key={index}>
          {/* Header */}
          <div
            className="filter-card-header"
            onClick={() => toggleSection(filter.title)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <h5>{filter.title}</h5>
            {openSections[filter.title] ? <Minus /> : <Plus />}
          </div>

          {/* Content */}
          {openSections[filter.title] && (
            <div className="filter-card-content">
              {filter.type === "range"
                ? renderRangeSlider(filter)
                : filter.options.map((option, idx) => (
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
                  ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default FilterPanel;
