import React from 'react';
import './doc_form.css';
import { useForm } from 'react-hook-form';

export default function DocForm() {
  const { handleSubmit, formState: { errors } } = useForm();
  // eslint-disable-next-line no-console
  const onSubmit = (data) => console.log(data);
  // eslint-disable-next-line no-console
  console.log(errors);

  // const Popup = props => {

  return (
    <div className="card centered-div">
      <div className="card-header">
        Add Doctor
      </div>
      <div className="card-body">
        <form className="add-form">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="mb-3">
            <input className="form-control" type="text" placeholder="Details" />
          </div>
          <div className="mb-3">
            <input className="form-control" type="File" />
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
            <select className="form-control">
              <option selected>Choose cost</option>
              <option value="$10,000">$10,000</option>
              <option value=" $20,000"> $20,000</option>
              <option value=" $30,000"> $30,000</option>
            </select>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-outline-info" onSubmit={handleSubmit(onSubmit)}>Add Doctor</button>
          </div>
        </form>
      </div>
    </div>
  
  );
  // };
}
