import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import "./Sidebar.css"

const Sidebar = ({ showFilter }) => {
    return (
        <div className={`sidebar ${showFilter ? 'open' : ''}`}>
            <h3>Filters</h3>
            <div>
                <div className="checkbox-container">
            <input type='checkbox' id='first1' />
                <label className="checkbox-label" htmlFor='first1'>CUSTOMIZBLE</label>
                </div><br />
                <hr />
                <div className='filter-item'>
                    <div className='container-drop'><h3>IDEAL FOR</h3> <FaAngleDown className="dropdown-icon" /></div>
                    <p>All</p>
                </div>
                <hr/>
                <div className='filter-item'>
                    <div className='container-drop'><h3>OCCASION</h3> <FaAngleDown className="dropdown-icon" /></div>
                    <p>All</p>
                </div>
                <hr/>
                <div className='filter-item'>
                    <div className='container-drop'><h3>WORK</h3> <FaAngleDown className="dropdown-icon" /></div>
                    <p>All</p>
                </div>
                <hr/>
                <div className='filter-item'>
                    <div className='container-drop'><h3>FABRIC</h3> <FaAngleDown className="dropdown-icon" /></div>
                    <p>All</p>
                </div>
                <hr/>
                <div className='filter-item'>
                    <div className='container-drop'><h3>SEGMENT</h3> <FaAngleDown className="dropdown-icon" /></div>
                    <p>All</p>
                </div>
                <hr/>
                <div className='filter-item'>
                    <div className='container-drop'><h3>SUITABLE FOR</h3> <FaAngleDown className="dropdown-icon" /></div>
                    <p>All</p>
                </div>
                <hr/>
                <div className='filter-item'>
                    <div className='container-drop'><h3>RAW MATERIALS</h3> <FaAngleDown className="dropdown-icon" /></div>
                    <p>All</p>
                </div>
                <hr/>
                <div className='filter-item'>
                    <div className='container-drop'><h3>PATTERN</h3> <FaAngleDown className="dropdown-icon" /></div>
                    <p>All</p>
                </div>
                <hr/>
                
            </div>
        </div>
    );
};

export default Sidebar;