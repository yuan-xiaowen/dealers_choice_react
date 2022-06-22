const axios = require('axios')

const createACustomer = async(person)=>{
    const response = await axios.post('/customer',person)
    return response.data
  }
export default createACustomer