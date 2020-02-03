const initialState = {
  contacts: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-CONTACT":
      return { ...state, contacts: action.payload };}


      switch (action.type) {
        case "UPDATE":
         return {...state,contacts:state.contacts.map((el,id)=>
            id===action.payload.id ?
            {...el, title:action.payload.task }: el)} 


    default:
      return state;
  }
};
export default Reducer;



