import React from "react";

import AddEventForm from "../../features/AddEventForm";
import style from '../../assets/scss/eventManagement.module.scss';
import Button from "../../ui/button/Button";

const EventList = () => {
  return (
    <div className={style.container} >
      <div className="card shadow mb-4 ">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary fs-5 text">
            The Events Management 
          </h6>
        </div>
        <div className={style.button__wrapper}>
          <Button label={'Add event'} className={'btn-primary btn-sm'}/>
          
        </div>
        <div>
          <AddEventForm />
        </div>        
        <div className="card-body px-5">
          <table className="table table-bordered table-responsive-lg table-hover" >
            <thead className="table-light">
              <tr>
                <th scope="col" className="py-3 pe-5 ps-4" >Name</th>
                <th scope="col" className="py-3  ps-4">Date</th>
                <th scope="col" className="py-3  ps-4">Score</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td className="py-3 pe-5 ps-4">Mark gbfbf h hrth</td>
              <td className="py-3  ps-4">12.12.2022</td>
              <td className="py-3  ps-4">15</td>
            </tr>
            <tr>
              <td className="py-3 pe-5 ps-4">Mark</td>
              <td className="py-3 ps-4">03.11.2020</td>
              <td className="py-3  ps-4">100</td>
            </tr>
            </tbody>
          </table>
        </div>        
      </div>
    </div>
  );
};

export default EventList;