import React from 'react';
import { Route, Switch } from "react-router-dom";
import GreetingContainer from './greeting/greeting_container'
import BookIndexContainer from './home/book_index_container'
import RentalFormContainer from './home/rental_form_container'

const App = () => (
  <div className="body-div">
    <h1 className="page-title">Great Books Library Lending</h1>
    <Switch>
      <Route exact path="/" component={BookIndexContainer} />
      <Route exact path="/books/:id" component={RentalFormContainer} />
    </Switch>
  </div>
);

export default App;