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
            <input type="text" className="form-control" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name" />
          </div>
          <div className="mb-3">
            <input className="form-control" type="text" 
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Details" />
          </div>
          <div className="mb-3">
            <input className="form-control" type="text" 
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Photo link"/>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Add City..." />
          </div>
          <div className="mb-3">
            <select  onChange={(e) => setSpeciality(e.target.value)} className="form-control">
            <option value="" selected disabled hidden>Choose here</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Sergion">Sergion</option>
              <option value="Neurologist">Neurologist</option>
            </select>
          </div>
          <div className="mb-3">
          <input type="number" className="form-control" 
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          placeholder="Add cost $" />
          </div>
          <div className="mb-3">
            <button type="submit" onClick={createDoctor} className="btn btn-outline-info">Add Doctor</button>
          </div>
        </form>
      </div>
    </div>
  
  );
  // };
}

export default AddDoctor;