import Select from "react-select";
import { useAppStore } from "../../store";

export default function SelectInput({ placeholder, data = [], type }) {
  const { setSource, setDestination, source, destination } = useAppStore();

  const onChange = (value) => {
    if (value === null) {
      type === "source" ? setSource(null) : setDestination(null);
      return;
    }

    let data = {
      value: value.value,
      label: value.label,
    };

    type === "source" ? setSource(data) : setDestination(data);
  };

  const options = data.map((item) => {
    let cityCode = item.displayData[type].airport.cityCode;
    let cityName = item.displayData[type].airport.cityName;

    return {
      value: cityCode,
      label: cityName,
    };
  });

  const uniqueOptions = [
    ...new Map(options.map((item) => [item["value"], item])).values(),
  ];

  let value;

  if (type === "source" && source !== null) {
    value = source;
  } else if (type === "destination" && destination !== null) {
    value = destination;
  } else {
    value = null;
  }

  return (
    <div style={{ width: "100%" }}>
      <Select
        onChange={onChange}
        options={uniqueOptions}
        placeholder={placeholder}
        isClearable
        value={value}
      />
    </div>
  );
}
