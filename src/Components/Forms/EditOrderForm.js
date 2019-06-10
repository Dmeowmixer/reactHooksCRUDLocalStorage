import React, { useState, useEffect } from 'react';
import { Form, Button, Label, Input } from 'reactstrap';

const EditOrderForm = props => {
  const [buyOrder, setBuyOrder] = useState(props.currentBuyOrder);
  useEffect(() => {
    setBuyOrder(props.currentBuyOrder)
  }, [props])
  const handleInputChange = event => {
    const { name, value } = event.target
    setBuyOrder({...buyOrder, [name]: value})
  }
  return(
    <Form 
      onSubmit={event => {
        event.preventDefault()
        props.updateBuyOrder(buyOrder.id, buyOrder)
      }}>
      <Label>Name</Label>
      <Input type="text" name="name" value={buyOrder.name} onChange={handleInputChange} />
      <Label>Max Bid Price</Label>
      <Input type="text" name="maxBidPrice" value={buyOrder.maxBidPrice} onChange={handleInputChange} />
      <select className="custom-select" defaultValue={"default"} name="dataPackage" onChange={handleInputChange}>
        <option value="default" disabled>Please Select an Option</option>
        <option value="Device Location">Device Location</option>
        <option value="Device Behavior">Device Behavior</option>
        <option value="ID Mapping">ID Mapping</option>
      </select>
      <Button color="primary">Update Order</Button>
      <Button color="primary" onClick={() => props.setEditing(false)}>Cancel</Button>
    </Form>
  )
}
export default EditOrderForm;