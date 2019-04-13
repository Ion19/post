import React , {Component} from 'react'
import {connect} from 'react-redux';
import { createPostAction } from '../../store/actions/post actions';


class CreatePost extends Component {

    state={
        author:'', 
        title:'', 
        body:'',
        category:'',
        timestamp:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:(e.target.value)
        });
    }; 
   

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            timestamp:new Date()
        });
        this.props.createpost(this.state);

    };

    render(){
    
  return (
    
    <form className="ui form">
        <div className="field">
            <label>User Name</label>
            <input type="text" id="author" placeholder="User Name" onChange={this.handleChange}/>
        </div>
        
        <div className="field">
            <label>Post title</label>
            <input type="text" id="title"  placeholder="Post title" onChange={this.handleChange}/>
        </div>
        <div className="six wide field">
          <select className="ui fluid search dropdown" name="card[expire-month]" id="category" onChange={this.handleChange}>
            <option  >Choose Category</option>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="udacity">Udacity</option>
            
          </select>
        </div>
        
        <div className="field">
        <label>Post content</label>
        <textarea id="body" onChange={this.handleChange}></textarea>
        </div>
        <button className="ui button" onClick={this.handleSubmit}>Create Post</button>
    </form>
    
  );
}
}

    const mapDispatchToProps = (dispatch) => {
    return {
    createpost:(post)=>dispatch(createPostAction(post)) 
    }
};

export default connect(null,mapDispatchToProps)(CreatePost);
