/* eslint-disable no-constant-condition */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../../components/admindash/DataTable/DataTable';
import Navbar from '../../components/admindash/admin/admin';
import Sidebar from '../../components/admindash/Sidebar/Sidebar';
import TableList from '../../components/admindash/TableList/TableList';
import './userlists.scss';

function Lists({ type }) {
    //
    return (
        <div className="list_page">
            <div className="home_sidebar">
                <Sidebar />
            </div>

            <div className="list_page_main">
                <Navbar />

                {/* mui data table */}
                <div className="data_table">
                    <div className="btnn">
                        <Link
                            to={`/${
                                type === 'product' ? 'products' : 'user' ? 'users' : 'blogs'
                            }/addnew`}
                            style={{ textDecoration: 'none' }}
                        >
                            <button type="button">Add New {type}</button>
                        </Link>
                    </div>

                    {type === 'user' ? <DataTable /> : <TableList />}
                </div>
            </div>
        </div>
    );
}

export default Lists;
