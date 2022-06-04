import React from 'react';
import { Outlet } from 'react-router-dom';
import Menues from './Menues';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashBoard-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center md:p-12">

            <label for="dashBoard-drawer" class="btn btn-primary drawer-button lg:hidden
            ml-auto
            ">Open drawer</label>

                {/* <!-- Page content here --> */}

                <Outlet />


            </div>
            <div class="drawer-side">
                <label for="dashBoard-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">


                    {/* <!-- Sidebar content here --> */}
                    <Menues />



                </ul>

            </div>
        </div>
    );
};

export default DashBoard;