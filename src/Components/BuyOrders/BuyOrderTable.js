import React from 'react';
const BuyOrderTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Max Bid Price</th>
        <th>Data Package</th>
      </tr>
    </thead>
    <tbody>
    {props.buyOrders.length > 0 ? (
      props.buyOrders.map(buyOrder => (
        <tr key={buyOrder.id}>
          <td>{buyOrder.name}</td>
          <td>{buyOrder.maxBidPrice}</td>
          <td>{buyOrder.dataPackage}</td>
          <td>
            <button onClick={() => { props.editRow(buyOrder) }}
            >Edit</button>
            <button onClick={() => props.deleteOrder(buyOrder.id)}>Delete</button>
          </td>
        </tr>
        ))
      ):(
      <tr>
        <td>No Existing Buy Orders</td>
      </tr>
      )}
    </tbody>
  </table>
)

export default BuyOrderTable;