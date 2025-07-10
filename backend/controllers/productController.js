import client from "../config/db.js";

function capitalizeName(name) {
  return name.trim().split(" ").filter(word => word.length > 0).map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

export function apiTest(req, res) {
  res.send("<h1>api is working</h1>");
}

export async function getAllProducts(req, res) {
  try {
    const response = await client.query("select * from products order by id asc");
    console.log(response.rows);
    res.status(200).json({ success: true, products: response.rows });
  }
  catch (error) {
    console.error(`unable to fetch products due to error : ${error}`);
    res.status(500).json({ success: false, message: "unable to fetch products" });
  }
}

export async function addAProduct(req, res) {
  try {
    const { name, image, price } = req.body;
    if (!name || !image || !price) {
      res.status(400).send({ success: false, message: "please fill all the fields" });
    }
    else {
      const capitalizedName = capitalizeName(name);
      const response = await client.query("insert into products(name,image,price) values($1,$2,$3) returning *", [capitalizedName, image, price]);
      res.status(201).json({ success: true, message: "new product created successfully", product: response.rows[0] });
    }
  }
  catch (error) {
    console.error(`unable to add product due to error : ${error}`);
    res.status(500).json({ success: false, message: "unable to add a product" });
  }
}

export async function getAProduct(req, res) {
  try {
    const id = req.params.id;
    const response = await client.query("select * from products where id=$1", [id]);
    if (response.rows.length == 0)
      res.status(400).json({ success: false, message: "no product exists with this id" });
    else
      res.status(200).json({ success: true, product: response.rows[0] });
  }
  catch (error) {
    console.error(`unable to fetch product due to error : ${error}`);
    res.status(500).json({ success: false, message: "unable to get a product" });
  }
}

export async function updateAProduct(req, res) {
  try {
    const id = req.params.id;
    const response = await client.query("select * from products where id=$1", [id]);
    if (response.rows.length == 0)
      res.status(400).json({ success: false, message: "no product exists with this id" });
    else {
      const product = response.rows[0];
      product.name = req.body.name || product.name;
      product.image = req.body.image || product.image;
      product.price = req.body.price || product.price;
      await client.query("update products set name=$1,image=$2,price=$3 where id=$4", [product.name, product.image, product.price, id]);
      res.status(200).json({ success: true, message: "product updated successfully", product: product });
    }
  }
  catch (error) {
    console.error(`unable to update product due to error : ${error}`);
    res.status(500).json({ success: false, message: "unable to update a product" });
  }
}

export async function deleteAProduct(req, res) {
  try {
    const id = req.params.id;
    const response = await client.query("select * from products where id=$1", [id]);
    if (response.rows.length == 0)
      res.status(400).json({ success: false, message: "no product exists with this id" });
    else {
      await client.query("delete from products where id=$1", [id]);
      res.status(200).json({ success: true, message: "product deleted successfully", product: response.rows[0] });
    }
  }
  catch (error) {
    console.error(`unable to delete product due to error : ${error}`);
    res.status(500).json({ success: false, message: "unable to delete a product" });
  }
}