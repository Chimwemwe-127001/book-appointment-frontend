import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createDoctorApi } from '../../redux/doctors/doctors';
import './form.css';

const AddDoctor = () => {
  const user = useSelector((state) => state.signUpReducer);
  const { accessToken } = user;

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [photo, setPhoto] = useState('');
  const [city, setCity] = useState('');
  const [cost, setCost] = useState();
  const [speciality, setSpeciality] = useState('');
  const [successNotice, setSuccessNotice] = useState(false);
  const [errorNotice, setErrorNotice] = useState(false);

  const flashNotices = (type) => {
    if (type === 'error') {
      setErrorNotice(true);
      setSuccessNotice(false);
    }

    if (type === 'success') {
      setErrorNotice(false);
      setSuccessNotice(true);
    }
  };

  const createDoctor = (e) => {
    e.preventDefault();
    if (city === '' || name === '' || cost === -1 || photo === '' || details === '' || speciality === '') {
      flashNotices('error');
      return;
    }
    const data = {
      name,
      details,
      photo,
      city,
      cost,
      specialization: speciality,
    };
    dispatch(createDoctorApi(accessToken, data));
    setCity('');
    setName('');
    setDetails('');
    setCost(0);
    setPhoto('');
    flashNotices('success');
  };
  return (
    <>
      <div className="pt-10 lg:fh lg:pt-20">
        <h1 className="text-3xl text-slate-900 uppercase font-bold">Add a doctor</h1>
      </div>
      <div className="card centered-div mt-4">
        <div className="card-body">
          <form className="add-form w-60">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Photo link"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Add City..."
              />
            </div>
            <div className="mb-3">
              <select onChange={(e) => setSpeciality(e.target.value)} className="form-control">
                <option value="" selected disabled hidden>Choose here</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Sergion">Sergion</option>
                <option value="Neurologist">Neurologist</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                placeholder="Add cost $"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control pb-14"
                type="text"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Details"
              />
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <button type="submit" onClick={createDoctor} className="btn bt">Add Doctor</button>
            </div>
          </form>
        </div>
      </div>
      {successNotice && (
        <p className="text-center text-slate-50 text-lg mt-4">Doctor created succesfully!</p>
      )}
      {errorNotice && (
        <p className="text-center text-slate-50 text-lg mt-4">Please complete all fields!</p>
      )}
    </>
  );
  // };
};

export default AddDoctor;
