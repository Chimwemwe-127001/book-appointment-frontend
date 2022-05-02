import { FaBars, FaSistrix, FaAngleDown } from 'react-icons/fa';

const ReserveForm = () => (
  <div className="h-screen reserveContainer">
    <div className="m-3 flex justify-between">
      <button type="button" className="text-white">
        <FaBars />
      </button>
      <button type="button" className="text-white">
        <FaSistrix />
      </button>
    </div>

    <div>
      <div className="flex items-center">
        <h4 className="mb-3">
          <span className="underline"> Book Appointment </span>
        </h4>
      </div>
      <p className="flex items-center">
        We have different doctors from different parts of the world.
        {' '}
        <br />
        If you wish to find out if we have a doctor in your area, please use the selector below
      </p>
      <div>
        <form action="#">
          <input type="text" name="username" />
          <button type="button" className="text-white hover:bg-white-800">
            London
            <FaAngleDown />
            <div>
              <ul>
                <li> Nairobi </li>
                <li> Abuja </li>
                <li> Delhi </li>
                <li> Mumbai </li>
              </ul>
            </div>
          </button>
          <button type="button" className="bg-white-500 text-green-600"> Book Now </button>
        </form>
      </div>
    </div>
  </div>
);

export default ReserveForm;
