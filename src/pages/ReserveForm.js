import { FaBars, FaSistrix,FaAngleDown } from "react-icons/fa"

const ReserveForm = () => (
  <div className="background-color: rgb(144,189,0)">
    <div className="m-3 flex justify-between">
      <button className="text-white"> <FaBars/> </button>
      <button className="text-white"> <FaSistrix/> </button>
    </div>
    
    <div className="flex items-center">
      <h4 className="underline"> <span className="mb-2"> Book Appointment </span> </h4>
      <p> We have different doctors from different parts of the world. 
        <span>If you wish to find out if we have a doctor in your area, please use the selector below </span>
      </p>
      <div>
        <button className="text-white hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"> London <FaAngleDown />
          <div>
            <ul>
              <li> Nairobi </li>
            </ul>
          </div> 
        </button>
      </div>
    </div>
  </div> 
)