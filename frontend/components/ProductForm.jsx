function ProductForm({ data ,setData}) {
  return <>
    <div>
      <label htmlFor="name">Product name : </label>
      <input type="text" name="name" id="name" autoComplete="off" value={data.name} onChange={e => setData({ ...data, [e.target.name]: e.target.value })} placeholder="enter product name" />
    </div>
    <div>
      <label htmlFor="image">Product image : </label>
      <input type="text" name="image" id="image" autoComplete="off" value={data.image} onChange={e => setData({ ...data, [e.target.name]: e.target.value })} placeholder="paste image url" />
    </div>
    <div>
      <label htmlFor="price">Product price : </label>
      <input type="text" name="price" id="price" autoComplete="off" value={data.price} onChange={e => setData({ ...data, [e.target.name]: e.target.value })} placeholder="0.00" />
    </div>
  </>
}

export default ProductForm;