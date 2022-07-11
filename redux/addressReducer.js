export const addressReducer = (state = null,  action) => {
    switch (action.type) {
         case 'ADD_ADDRESS':
         return action.payload
        
         default: 
         return state;
     }
  
 }
 
