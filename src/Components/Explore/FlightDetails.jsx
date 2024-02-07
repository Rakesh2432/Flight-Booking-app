export default function FlightDetails({
  flight,
  bookedFlight,
  setBookedFlight,
}) {
  const {
    displayData: {
      airlines,
      source: {
        depTime,
        airport: { cityName: sourceCity },
      },
      destination: {
        arrTime,
        airport: { cityName: destinationCity },
      },
      totalDuration,
      stopInfo,
    },
    fare,
    id,
  } = flight;

  return (
    <div className="flight-details">
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>
        {airlines[0].airlineName}
      </div>

      <div className="flight-detail-item">
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
          {new Date(depTime).getHours()}: {new Date(depTime).getMinutes()}
        </span>
        <span>{sourceCity}</span>
      </div>

      <div className="flight-detail-item" style={{ color: "grey" }}>
        <span>{totalDuration}</span>
        <span>-----------</span>
        <span>{stopInfo}</span>
      </div>

      <div className="flight-detail-item">
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
          {new Date(arrTime).getHours()}: {new Date(arrTime).getMinutes()}
        </span>
        <span>{destinationCity}</span>
      </div>

      <div style={{ fontWeight: "bold", fontSize: "18px" }}>₹ {fare}</div>

      <button
        className="btn"
        onClick={() =>
          bookedFlight !== id ? setBookedFlight(id) : setBookedFlight()
        }
      >
        {bookedFlight === id ? "Booked" : "Book"}
      </button>
    </div>
  );
}
