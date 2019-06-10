import React, { useState } from 'react';
import { Button, Form, Label, Input } from 'reactstrap';


const AddBuyOrder = props => {
  const initialFormState = { id: null, name: '', maxBidPrice: '', dataPackage: '' }
  const [buyOrder, setBuyOrder] = useState(initialFormState)
  const handleInputChange = event => {
    const { name, value } = event.target
    setBuyOrder({ ...buyOrder, [name]: value })
  }
  // Add state to localStorage after form submits
  return (
    <Form
      onSubmit={event => {
        event.preventDefault()
        if(!buyOrder.name || !buyOrder.maxBidPrice || !buyOrder.dataPackage) return
        props.addOrder(buyOrder);
        setBuyOrder(initialFormState);
      }}
    >

      <Label>Name</Label>
      <Input type="text" name="name" value={buyOrder.name} onChange={handleInputChange}/>
      <Label>Max Bid Price</Label>
      <Input type="text" name="maxBidPrice" value={buyOrder.maxBidPrice} onChange={handleInputChange} />
      <Label>Data Package</Label>
      <select className="custom-select" defaultValue={"default"} name="dataPackage" onChange={handleInputChange}>
        <option value="default" disabled>Please Select an Option</option>
        <option value="Device Location">Device Location</option>
        <option value="Device Behavior">Device Behavior</option>
        <option value="ID Mapping">ID Mapping</option>
      </select>
      <Button className="addButton" color="primary">Add New Buy Order</Button>
    </Form>
  )
}

export default AddBuyOrder;