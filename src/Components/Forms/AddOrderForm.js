import React, { useState } from 'react';

const AddBuyOrder = props => {
  const initialFormState = { id: null, name: '', maxBidPrice: '', dataPackage: '' }
  const [buyOrder, setBuyOrder] = useState(initialFormState)
  const handleInputChange = event => {
    const { name, value } = event.target
    setBuyOrder({ ...buyOrder, [name]: value })
  }
  // Add state to localStorage after form submits
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if(!buyOrder.name || !buyOrder.maxBidPrice || !buyOrder.dataPackage) return
        props.addOrder(buyOrder);
        setBuyOrder(initialFormState);
      }}
    >

      <label>Name</label>
      <input type="text" name="name" value={buyOrder.name} onChange={handleInputChange}/>
      <label>Max Bid Price</label>
      <input type="text" name="maxBidPrice" value={buyOrder.maxBidPrice} onChange={handleInputChange} />
      <label>Data Package</label>
      <select defaultValue={"default"} name="dataPackage" onChange={handleInputChange}>
        <option value="default" disabled>Please Select an Option</option>
        <option value="Device Location">Device Location</option>
        <option value="Device Behavior">Device Behavior</option>
        <option value="ID Mapping">ID Mapping</option>
      </select>
      <button>Add New Buy Order</button>
    </form>
  )
}

export default AddBuyOrder;