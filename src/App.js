import React, { useState, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

import BuyOrderTable from './Components/BuyOrders/BuyOrderTable';
import AddOrderForm from './Components/Forms/AddOrderForm';
import EditOrderForm from './Components/Forms/EditOrderForm';

const App = () => {
  const buyOrdersData = JSON.parse(localStorage.getItem('buyOrders')) || [];

// Initial State Declarations w/ React Hooks
  const initialFormState = { id: null, name: '', maxBidPrice:'', dataPackage: ''}
  const [buyOrders, setBuyOrders] = useState(buyOrdersData);
  const [currentBuyOrder, setCurrentBuyOrder] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
// CRUD Methods
  const addOrder = buyOrder => {
    buyOrder.id = buyOrders.length + 1;
    setBuyOrders([...buyOrders, buyOrder]);
    localStorage.setItem('buyOrders',JSON.stringify([...buyOrders, buyOrder]));
  }
  const deleteOrder = id => {
    setBuyOrders(buyOrders.filter(buyOrder => buyOrder.id !== id ));
    localStorage.setItem('buyOrders', JSON.stringify(buyOrders.filter(buyOrder => buyOrder.id !== id)));
    // localStorage.removeItem(buyOrders.filter(buyOrder => buyOrder.id !== id));
  }
  const updateBuyOrder = (id, updatedBuyOrder) => {
    setEditing(false);
    setBuyOrders(buyOrders.map(buyOrder => (buyOrder.id === id ? updatedBuyOrder : buyOrder)));
    localStorage.setItem('buyOrders', JSON.stringify(buyOrders.map(buyOrder => (buyOrder.id === id ? updatedBuyOrder : buyOrder))))
  }
  const editRow = buyOrder => {
    setEditing(true);
    setCurrentBuyOrder({id: buyOrder.id, name: buyOrder.name, maxBidPrice: buyOrder.maxBidPrice, dataPackage: buyOrder.dataPackage});
  }
  return (
    <Container>
      <Row>
        <Col xs="12">
          <h1>Narrative</h1>
        </Col>
      </Row>
      <Row >
        <Col xs="6">
          {editing ? (
            <Fragment>
              <EditOrderForm 
                editing={editing}
                setEditing={setEditing}
                currentBuyOrder={currentBuyOrder}
                updateBuyOrder={updateBuyOrder}
              />
            </Fragment>
            ):(
              <Fragment>
                <AddOrderForm addOrder={addOrder}/>
              </Fragment>
            )
          }
        </Col>
        <Col xs="6">
          <BuyOrderTable buyOrders={buyOrders} editRow={editRow} deleteOrder={deleteOrder}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;