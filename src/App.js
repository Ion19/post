import React, { Component } from 'react';
import Navbar from './components/layout/navbar';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import PostSummary from './components/posts/postSummary';
import CreatePost from './components/posts/createpost'; 
import reactPosts from './components/posts/reactposts';
import ReduxPosts from './components/posts/eduxposts';
import UdacityPosts from './components/posts/udacityposts';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <div className="container">
        <Switch>
          
            <Route exact path="/" component={PostSummary}/>
            <Route path="/createpost" component={CreatePost}/>
            <Route path="/react" component={reactPosts}/>
            <Route path="/redux" component={ReduxPosts}/>
            <Route path="/udacity" component={UdacityPosts}/>

        
        </Switch>
        </div>  

        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
