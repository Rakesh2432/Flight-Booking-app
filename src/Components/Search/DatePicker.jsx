import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppStore } from "../../store";

export default function ReactDatePicker() {
  const { date, setDate } = useAppStore();

  return (
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      isClearable
      placeholderText="Select Date"
      className="dateInput"
    />
  );
}
