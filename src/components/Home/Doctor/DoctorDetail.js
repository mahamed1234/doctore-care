import React from 'react';

const DoctorDetail = ({item}) => {
    return (
        <div className='col-md-4 col-sm-6 col-12 text-center doctor-content m-3'>
            <div className="container shadow-lg p-3">
                <h2 className="brand-color mt-1">{item.username}</h2>
                <p className="text-primary">
                    Contact : +88017547512 <br /> {item.email}
                </p>
            </div>
        </div>
    );
};
export default DoctorDetail;