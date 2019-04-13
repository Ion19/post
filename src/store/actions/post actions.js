

export const createPostAction = (post)=>{
  console.log('created' , post);
     return {
        type:'CREATE_POST',
        post
   };
   
    };

