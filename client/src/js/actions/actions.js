import axios from "axios"

//get
export const getContacts=()=>dispatch=>{
axios.get('/contacts')
.then(res=>dispatch({type:"GET-CONTACT",payload:res.data}))
.catch(err=>console.log(err))
}

//add
 export const postContact=(newcontact)=>dispatch=>{
    axios.post("/contacts",newcontact)
    .then(res=>dispatch(getContacts()))
    .catch(err=>console.log(err))

 }
 //delete
 export const deleteContact=(id)=>dispatch=>{
     axios.delete(`/contacts/${id}`)
.then(res=>dispatch(getContacts()))
.catch(err=>console.log(err))
 }
 //update
  export const putContact=(id,updatedContact)=>dispatch=>{
      axios.put(`/contacts/${id}`,updatedContact)
      .then(res=>dispatch({type:"UPDATE",payload:res.data}))
.catch(err=>console.log(err))

  }