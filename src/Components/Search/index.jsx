import { useEffect, useState } from "react";
import DatePicker from "./DatePicker";
import Input from "./SelectInput";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store";

export default function Search() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { error, setError, source, destination, date, setAvailableFlights } =
    useAppStore();

  const fethData = async () => {
    const res = await fetch("https://api.npoint.io/4829d4ab0e96bfab50e7");
    const data = await res.json();
    setData(data.data.result);
  };
  useEffect(() => {
    fethData();
  }, []);

  const handleSearch = () => {
    if (source === null || destination === null || date === null) {
      setError(true);
    } else {
      setError(false);

      const flights = data.filter(
        (item) =>
          new Date(item.displayData.source.depTime).getDate() ===
            new Date(date).getDate() &&
          item.displayData.source.airport.cityCode === source.value &&
          item.displayData.destination.airport.cityCode === destination.value
      );

      setAvailableFlights(flights);

      navigate("/explore");
    }
  };

  return (
    <div className="search">
      <Input placeholder="From?" data={data} type="source" />

      <Input placeholder="Where to?" data={data} type="destination" />

      <DatePicker />

      <button className="btn" onClick={handleSearch}>
        Search
      </button>

      {error && (
        <div style={{ position: "absolute", bottom: 10, color: "red" }}>
          All above fields are required
        </div>
      )}
    </div>
  );
}
