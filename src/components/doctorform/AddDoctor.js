import React, {useState} from 'react';
import './doc_form.css';
import { useSelector, useDispatch } from 'react-redux';
import { createDoctorApi } from '../../redux/doctors/doctors';

const AddDoctor=() =>{
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
