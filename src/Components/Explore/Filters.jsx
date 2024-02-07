import { useState } from "react";
import { useAppStore } from "../../store";

export default function Filters() {
  const { availableFlights } = useAppStore();
  const [priceRange, setPriceRange] = useState(2000);

  return (
    <div
      style={{
        width: "20%",
        backgroundColor: "white",
        padding: "16px",
      }}
      className="explore-item"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>Filters</span>
        <span style={{ color: "grey" }}>
          Showing {availableFlights.length} results
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ fontWeight: "bold" }}>Stops</div>
          <div style={{ display: "flex", gap: "8px" }}>
            <input type="checkbox" id="nonStop" />

            <label htmlFor="nonStop">Non Stop</label>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <input type="checkbox" id="1Stop" />

            <label htmlFor="1Stop">1 Stop</label>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ fontWeight: "bold" }}>Airlines</div>
          <div style={{ display: "flex", gap: "8px" }}>
            <input type="checkbox" id="jetspice" />

            <label htmlFor="jetspice">Jetspice</label>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <input type="checkbox" id="airIndia" />

            <label htmlFor="airIndia">Air India</label>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ fontWeight: "bold" }}>Price</div>
          <input
            type="range"
            value={priceRange}
            min="1000"
            max="5000"
            onChange={(e) => setPriceRange(e.target.value)}
          />
          <span>{priceRange}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ fontWeight: "bold" }}>Sort By</div>
          <div style={{ display: "flex", gap: "8px" }}>
            <input type="radio" id="price" />

            <label htmlFor="price">Price</label>
          </div>
        </div>
      </div>
    </div>
  );
}
