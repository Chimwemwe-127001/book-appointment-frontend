import React, {useState} from 'react';
import './doc_form.css';
import { useSelector, useDispatch } from 'react-redux';
import { createDoctorApi } from '../../redux/doctors/doctors';

const AddDoctor=() =>{
  const user = useSelector((state) => state.signUpReducer);
  const { accessToken } = user;

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [photo, setPhoto] = useState('');
  const [city, setCity] = useState('');
  const [cost, setCost] = useState(0);
  const [speciality, setSpeciality] = useState('');

  const createDoctor = (e) => {
    e.preventDefault();
    if (city === '' || name === '' || cost === -1 || photo === '' || details === '' || speciality === '') return;
    const data = {
      name,
      details,
      photo,
      city,
      cost,
      specialization: speciality
    };
    dispatch(createDoctorApi(accessToken, data));
    setCity('');
    setName('');
    setDetails('');
    setCost(0);
    setPhoto('');
  };
  return (
    <div className="card centered-div mt-4">
      <div className="card-body">
        <form className="add-form w-60">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="mb-3">
            <input className="form-control" type="text" placeholder="Details" />
          </div>
          <div className="mb-3">
            <input className="form-control" type="text" placeholder="Photo link"/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Add City..." />
          </div>
          <div className="mb-3">
            <select className="form-control">
              <option selected>Choose doctor speciality</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Sergion">Sergion</option>
              <option value="Neurologist">Neurologist</option>
            </select>
          </div>
          <div className="mb-3">
          <input type="text" className="form-control" placeholder="Add cost $" />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-outline-info">Add Doctor</button>
          </div>
        </form>
      </div>
    </div>
  
  );
  // };
}

export default AddDoctor;
