const Product = require("../model/poroductSchema");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()

      return res.send({
        message: "returned all the products ", 
        products: products,
      })
  } catch (error) {
    return res.status(500).send({message: error.message})
  }
};


module.exports = {getAllProducts};