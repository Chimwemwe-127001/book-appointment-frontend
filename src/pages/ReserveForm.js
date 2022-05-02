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
        <form action="#">
          <input type="text" name="username"/>
          {/* The selected item should appear in the background should user click on reserve button */}
          {/* When user selects reserve for from the nav. bar I was thinking we should have a drop down of all doctors in a given city so that user should select doctor of their preference */}
          <button className="text-white hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5"> London <FaAngleDown />
            <div>
              <ul>
                <li> Nairobi </li>
                <li> Abuja </li>
                <li> Delhi </li>
                <li> Mumbai </li>
              </ul>
            </div> 
          </button>
          <button className="bg-white-500 text-green-600"> Book Now </button>
        </form>
      </div>
    </div>
  </div> 
)

export default ReserveForm;