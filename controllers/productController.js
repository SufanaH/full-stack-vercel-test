const getAllProducts = async (req, res) => {
  try {
    const products = [
        { id: 1, name: "Product 1", price: 19.99 },
        { id: 2, name: "Product 2", price: 29.99 },
        { id: 3, name: "Product 3", price: 39.99 },
        { id: 3, name: "Product 4", price: 49.99 },
      ];

      return res.send(products)
  } catch (error) {
    return res.status(500).send({message: error.message})
  }
};


module.exports = {getAllProducts};