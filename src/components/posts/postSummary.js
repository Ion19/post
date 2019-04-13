import React from 'react'
import {connect} from 'react-redux';

const PostSummary  = (props) => {
  return (

    <div className="row">
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <h5>Author</h5>
          <span>timestamp</span>
          
          <a className="btn-floating halfway-fab waves-effect waves-light red">Remove</a>
         
          
        </div>
        <div className="card-content">
          <span className="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            <a className="btn-floating waves-effect waves-light grey">Add Comment</a>
        </div>
        
      </div>
    </div>
  </div>
  );
}

const mapStateToProps =(state) =>{
  return {
    post : state.posts.post
  }
}

export default connect(mapStateToProps)(PostSummary); 
