import { FaBars, FaSistrix } from 'react-icons/fa';

const ReserveForm = () => (
  <div className="h-screen reserveContainer text-white">
    <div className="p-3 flex justify-between">
      <button type="button" className="text-white">
        <FaBars />
      </button>
      <button type="button" className="text-white">
        <FaSistrix />
      </button>
    </div>

    <div>
      <div className="flex justify-center">
        <h4 className="text-4xl tracking-widest reserveFormHeading">
          Book Appointment
        </h4>
      </div>
      <div className="flex justify-center">
        <p className="text-sm text-white text-center mt-4 ml-2">
          We have different doctors from different parts of the world.
          <br />
          If you wish to find out if we have a doctor who is available
          in your city, please use the selector below
        </p>
      </div>
      <div className="mt-5 flex justify-center">
        <div className="flex flex-col lg:block">
          <input type="text" placeholder="City" required className="lg:mr-5 mb-4 p-3 bg-lime-500 rounded-lg outline outline-offset-2 outline-3" />
          <select name="availableDoctors" required id="availableDoctors" className="lg:ml-3 lg:mr-5 p-3 bg-lime-500 rounded-lg outline outline-offset-2 outline-3">
            <option value="" selected disabled hidden>Choose here</option>
            <option value="Ranjeet"> Dr.Ranjeet1 </option>
            <option value="Ranjeet"> Dr.Ranjeet2 </option>
            <option value="Ranjeet"> Dr.Ranjeet3 </option>
          </select>
          <input type="date" value="Date" required className="text-white mt-6 lg:mt-0 lg:mr-10 p-3 bg-lime-500 rounded-lg outline outline-offset-2 outline-3" />
          <br />
          <div className="flex flex-col items-center lg:grow">
            <input type="submit" value="Book Now" className="mt-4 text-lime-500 bg-white p-3 rounded-lg outline outline-offset-2 outline-3" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReserveForm;
