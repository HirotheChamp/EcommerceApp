import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
function Dashboard() {
    return (

        <><Navbar/>
        <div className='container'>
            <input type="search" placeholder="search" id="search" />
            <select name="showall" id="showall">
                <option value="ordersinprocess">Orders in process</option>
                <option value="shipped">Shipped</option>
                <option value="canceled">Cancelled</option>

            </select>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Billing Address</th>
                    <th>Total</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>100</td>
                    <td>Joey</td>
                    <td>9/7/2021</td>
                    <td>408 Westside Lane</td>
                    <td>1000$</td>
                    <td>
                        <select name="select" id="select">
                            <option value="ordersinprocess">Orders in process</option>
                            <option value="shipped">Shipped</option>
                            <option value="canceled">Cancelled</option>

                        </select>
                    </td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>Joey</td>
                    <td>9/7/2021</td>
                    <td>408 Westside Lane</td>
                    <td>1000$</td>
                    <td>
                        <select name="select" id="select">
                            <option value="ordersinprocess">Orders in process</option>
                            <option value="shipped">Shipped</option>
                            <option value="canceled">Cancelled</option>

                        </select>
                    </td>
                </tr>
            </table>

            <h3>1</h3> | <h3>2</h3> | <h3>3</h3> | <h3>4</h3>
        </div><Footer /></>
    )
}

export default Dashboard;