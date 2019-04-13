

const initState = {
  posts : []
};


const postReducer = (state = initState , action) => {
  switch (action.type) {
        case 'CREATE_POST' : 
            console.log('post created', action.post); 
              return {
                posts : [...state.posts, 
                action.post]
              }
          
            
        default: 
            return state;
 
  }  
};

export default postReducer;