import React from 'react'
import {  PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';
import { savePaypalPayment } from '../../Constant/ServerApi';

function Paypal({setPaymentStatus}) {
    const serverUrl = "http://localhost:5000"
    const createOrder = async (data) => {
        // Order is created on the server and the order id is returned
        const response = await fetch(`${serverUrl}/my-server/create-paypal-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product skus and quantities
            body: JSON.stringify({
                payment: {
                    description: "payment for Register",
                    cost: "1.00"
                }
            }),
        });
        const order = await response.json();
        // console.log('=== Order ID ===', order.id);
        return order.id;
      };
      const onApprove = async (data) => {
         // Order is captured on the server and the response is returned to the browser
         
         const response = await fetch(`${serverUrl}/my-server/capture-paypal-order`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  orderID: data.orderID
              })
          }).then((response) => {
            alert('pay success');
            return response.json();
          }).then((data) => {
            // console.log(data,'order');
            if(data.status === "COMPLETED"){
              setPaymentStatus(true)
              axios.post(`${savePaypalPayment}`, {
                data
              })
            }
          })
        //   return await response.json();
      };
  return (
    <PayPalButtons
    createOrder={(data, actions) => createOrder(data, actions)}
    onApprove={(data, actions) => onApprove(data, actions)}
  />
  )
}

export default Paypal