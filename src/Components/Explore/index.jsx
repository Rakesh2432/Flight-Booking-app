import { useState } from "react";
import { useAppStore } from "../../store";
import FlightDetails from "./FlightDetails";
import Filters from "./Filters";

export default function Explore() {
  const [bookedFlight, setBookedFlight] = useState();
  const [filters, setFilters] = useState({
    stops: [],
    airlines: [],
    price: 2000,
  });

  const { availableFlights } = useAppStore();

  return (
    <div className="explore">
      <Filters filters={filters} setFilters={setFilters} />

      <div style={{ width: "80%" }} className="explore-item">
        {availableFlights.length > 0 ? (
          availableFlights.map((flight) => {
            return (
              <FlightDetails
                key={flight.id}
                flight={flight}
                bookedFlight={bookedFlight}
                setBookedFlight={setBookedFlight}
              />
            );
          })
        ) : (
          <div style={{ fontWeight: "bold" }}>
            No Flights available for this route or Date
          </div>
        )}
      </div>
    </div>
  );
}
