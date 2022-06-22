const axios = require('axios')

const deleteACupcake = async(cake)=>{
 const response = axios.delete(`/cupcake/${cake.id}`)
  return response.data
}

export default deleteACupcake