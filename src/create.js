const axios = require('axios')

const createACupcake = async(cake)=>{
  const response = await axios.post('/cupcake', cake);
  return response.data;
}

// const createACustomer = async(person)=>{
//   const response = await axios.post('/customer',person)
//   return response.data
// }

export default createACupcake
