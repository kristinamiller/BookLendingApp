import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container'
import BookIndexContainer from './home/book_index_container'

const App = () => (
  <div className="body-div">
    <h1 className="page-title">Great Books Library Lending</h1>
    {/* <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignupContainer} /> */}
    {/* <GreetingContainer /> */}
    <BookIndexContainer />
  </div>
);

export default App;