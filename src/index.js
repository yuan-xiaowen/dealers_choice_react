console.log('hello world')

//const axios = require('axios')

// const cupcakeList = document.querySelector('#cupcake-list')
// const customerList = document.querySelector('#customer-list')
// const orderList = document.querySelector('#order-list')

// let customers
// let cupcakes
// let orders

// const renderCustomer = async()=>{
//     const response = await axios.get('/customer')
//     customers = response.data
//     console.log(customers)
//     const id = window.location.hash.slice(1)*1
//     const html = customers.map(customer =>{
//         return `<li class='${id===customer.id ? 'selected':''}'>
//                    <a href='#${customer.id}'>
//                     ${customer.name}
//                    </a>
//         </li>`
//     }).join('')
//     customerList.innerHTML = html
// }

// const renderCupcake = async()=>{
//     const response = await axios.get('/cupcake')
//     cupcakes = response.data
//     const html = cupcakes.map(cupcake =>{
//         return `<li data-id = '${cupcake.id}'>
//        ${cupcake.name}
//        </li>`
//     }).join('')
//     cupcakeList.innerHTML = html
// }

// const renderOrder = async()=>{
//     const response = await axios.get('/order')
//     orders = response.data
//     const html = orders.map(order =>{
//         const customer = customers.find(customer=>customer.id===order.customerId)
//         const cupcake = cupcakes.find(cupcake=>cupcake.id===order.cupcakeId)
//         return `
//         <li data-id = '${order.id}'>${customer.name} ordered ${cupcake.name} cupcake
//         </li>`
//     }).join('')
//     orderList.innerHTML = html
// }

// window.addEventListener('hashchange', async()=> {
//     renderCustomer()   
//     renderCupcake()
//   })


// cupcakeList.addEventListener('click',async(ev)=>{
//     if (ev.target.tagName === 'LI'){
//       const id = window.location.hash.slice(1)*1
//       const idx = ev.target.getAttribute('data-id')*1
//       await createOrder({customerId:id,cupcakeId:idx})  
//     }
//     renderOrder()
// })

// const createOrder = async(data)=>{ 
//     const response = await axios.post('/order',data) //got data from click,pass it to post router in server.js and data===req.body
//     return response.data
//   }

// orderList.addEventListener('click',async(ev)=>{
//     if (ev.target.tagName==='LI'){
//         const id = ev.target.getAttribute('data-id')
//         await deleteOrder(id)
//     }
//     renderOrder()
// })

// const deleteOrder = async(id)=>{
//   const response = await axios.delete(`/order/${id}`) // got id from click, put into this address pass to delete router in the server.js
//   return response.data
// }

// const init = async() => {
//     renderCustomer()
//     renderCupcake()
//     renderOrder()
// };

// init();



import React from 'react'
import ReactDOM from 'react-dom'
import Cupcakes from './cupcakes'
import Customers from './customers'
import axios from 'axios'
import createACupcake from './create'
import createACustomer from './create1'
import deleteACupcake from './delete'


class App extends React.Component{
    constructor(){
      super()
      this.state = {cupcakes:[],customers:[]}
      this.addACupcake = this.addACupcake.bind(this)
      this.addACustomer = this.addACustomer.bind(this)
      this.deleteACupcake = this.deleteACupcake.bind(this)
    }
    async componentDidMount(){
      let response = await axios.get('/cupcake')
      this.setState({cupcakes:response.data})
      response = await axios.get('/customer')
      this.setState({customers:response.data})
    }
    async addACupcake(){
      const cupcake = await createACupcake({name:'strawberry'})
      const allCupcake = [...this.state.cupcakes,cupcake]
      this.setState({cupcakes: allCupcake})
    }
    async addACustomer(){
      const customer = await createACustomer({name:'sofia'})
      const allCustomer = [...this.state.customers,customer]
      this.setState({customers: allCustomer})
    }
    
    async deleteACupcake(cupcake){
        await deleteACupcake(cupcake)
        const allCupcake = this.state.cupcakes.filter(item => item.id !== cupcake.id )
        console.log('&&&&&&&&&&&&')
        console.log(allCupcake)
        this.setState({cupcakes:allCupcake})
        }

    render(){
        //const { cupcakes } = this.state
       const cupcakes = this.state.cupcakes
       const customers = this.state.customers
        //const { addACupcake } = this
        const addACake = this.addACupcake
        const addAPerson  = this.addACustomer 
        const deleteACupcake = this.deleteACupcake
        return (
            <div>
              <h1>Cupcake Order With React</h1>
              <main>
                <section>
                  <h2>Cupcakes ({ cupcakes.length })</h2>
                  <button onClick = { addACake }>Add A Cupcake</button>
                  <Cupcakes cupcakes = { cupcakes } type = 'cupcake' deleteACupcake = { deleteACupcake } />
                </section>
                <section>
                  <h2>Customers ({ customers.length })</h2> 
                  <button onClick = {addAPerson}>Add a Customer</button>
                  <Customers customers = { customers }/>
                </section>
              </main>
            </div>
          );
      }
    }
    
    const root =document.querySelector('#root')
    ReactDOM.render(
        <App />,
        root
    )


    //*************************** */
    