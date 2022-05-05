import React from 'react';
import './form.css';
import { useForm } from 'react-hook-form';

export default function DocForm() {
  const { handleSubmit, formState: { errors } } = useForm();
  // eslint-disable-next-line no-console
  const onSubmit = (data) => console.log(data);
  // eslint-disable-next-line no-console
  console.log(errors);

  return (
    <form className="add-form">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Details" />
      <form>
        <option value="file">file</option>
        <input type="File" />
      </form>
      <input type="text" placeholder="City" />
      <select>
        <option value="Cardiolagist">Cardiolagist</option>
        <option value="Sergion">Sergion</option>
        <option value="Neurologist">Neurologist</option>
      </select>
      <select>
        <option value="$10,000">$10,000</option>
        <option value=" $20,000"> $20,000</option>
        <option value=" $30,000"> $30,000</option>
      </select>

      <input type="submit" onClick={handleSubmit(onSubmit)} />
    </form>
  );
}
