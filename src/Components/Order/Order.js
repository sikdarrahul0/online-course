import React from 'react';
import './Order.css';

const Order = (props) => {
    const course = props.item;

    let totalPrice = course.reduce((total,unitCourse) => total + unitCourse.price,0);

    return (
        <div className="order-box">
            <h3>Order Summary</h3>
            <p>Items ordered : {course.length}</p>
            <p>Total price : $ {totalPrice}</p>
        </div>
    );
};

export default Order;