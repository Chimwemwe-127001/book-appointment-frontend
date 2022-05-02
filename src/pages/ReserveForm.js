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
        <p className="text-sm mt-4">
          We have different doctors from different parts of the world.
          <br />
          If you wish to find out if we have a doctor in your area, please use the selector below
        </p>
      </div>
      <div className="mt-5 flex justify-center">
        <form action="/#">
          <select name="cities" id="cities">
            <option value="Nairobi">Nairobi</option>
            <option value="Delhi">Delhi</option>
            <option value="Abuja">Abuja</option>
            <option value="Lusaka">Lusaka</option>
          </select>
          <br />
          <input type="submit" value="Book Now" className="mt-4 text-lime-500" />
        </form>
      </div>
    </div>
  </div>
);

export default ReserveForm;
