import React from 'react';
import { Table, Button } from 'reactstrap';

const BuyOrderTable = props => (
  <Table>
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
            <Button className="editButton" color="primary" onClick={() => { props.editRow(buyOrder) }}
            >Edit</Button>
            <Button color="primary"onClick={() => props.deleteOrder(buyOrder.id)}>Delete</Button>
          </td>
        </tr>
        ))
      ):(
      <tr>
        <td>No Existing Buy Orders</td>
      </tr>
      )}
    </tbody>
  </Table>
)

export default BuyOrderTable;