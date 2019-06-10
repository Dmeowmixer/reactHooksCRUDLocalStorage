import React, { useState, useEffect } from 'react';

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
    <form 
      onSubmit={event => {
        event.preventDefault()
        props.updateBuyOrder(buyOrder.id, buyOrder)
      }}>
      <label>Name</label>
      <input type="text" name="name" value={buyOrder.name} onChange={handleInputChange} />
      <label>Max Bid Price</label>
      <input type="text" name="maxBidPrice" value={buyOrder.maxBidPrice} onChange={handleInputChange} />
      <select defaultValue={"default"} name="dataPackage" onChange={handleInputChange}>
        <option value="default" disabled>Please Select an Option</option>
        <option value="Device Location">Device Location</option>
        <option value="Device Behavior">Device Behavior</option>
        <option value="ID Mapping">ID Mapping</option>
      </select>
      <button>Update Order</button>
      <button onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  )
}
export default EditOrderForm;