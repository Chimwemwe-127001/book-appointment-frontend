import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDoctorApi } from '../../redux/doctors/doctors';

const DeleteDoctor=() =>{
    const doctors = useSelector((state) => state.doctorsReducer);
    const user = useSelector((state) => state.signUpReducer);
    const { accessToken } = user;
  
    const dispatch = useDispatch();
    const deleteDoctor = (id) => {
      dispatch(deleteDoctorApi(accessToken, id));
    };
    return (
        <div className="w-full my-16 flex flex-col gap-10">
          {
            doctors.map((item) => (
              <div key={item.id} className="flex justify-between mx-4">
                <img src={item.photo} alt="doctor" className="w-20 rounded-full" />
                <p className="mt-8 font-bold">{item.name}</p>
                <button type="button" onClick={() => deleteDoctor(item.id)}
                className="px-4 h-12 bg-lime-500 rounded text-slate-50 mt-4">Delete</button>
              </div>
            ))
          }
        </div>
      
      );
    }

    export default DeleteDoctor;