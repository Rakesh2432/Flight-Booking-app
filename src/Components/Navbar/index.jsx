import { GiAirplaneDeparture } from "react-icons/gi";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-item1">
        <GiAirplaneDeparture className="logo" />

        <span>JetSetGo</span>
      </div>

      <div className="nav-item2">
        <li>Home</li>
        <li>About</li>
        <li>Offers</li>
        <li>Seats</li>
      </div>

      <button className="btn">Contact us</button>
    </div>
  );
}
