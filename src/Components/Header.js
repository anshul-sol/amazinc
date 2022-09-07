import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";

function Header() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="relative flex flex-row items-center justify-between bg-customGray text-customYellow p-2">
      <div className="flex items-start" onClick={() => navigate("/")}>
        <h2 className="text-2xl font-bold pl-2">Amaz Inc</h2>
      </div>
      <div className="flex flex-row-reverse">
        <SearchIcon fontSize="large" className="ml-2" />
        <input
          type="text"
          className=" w-full px-2 py-2 rounded-lg text-gray-800 focus:outline-none focus:shadow-outline "
          placeholder="Search"
        />
      </div>
      <div className="flex flex-row">
        <div className="pl-4">
          <span className="text-xl block">Your</span>
          <span className="text-sm inline-block">Orders</span>
        </div>

        <div className="pl-4" onClick={() => navigate("/checkout")}>
          <ShoppingCartIcon fontSize="large" className="m-3" />
          <span>{basket.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
