import React from 'react';
import './App.css';
import BookList from "./components/Book/BookList";
import AddBook from "./components/Book/Addbook";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";


const client  = new ApolloClient({
  uri:"http://localhost:4000/graphql"
});


class App extends React.Component{


  render(){
    return (
      <ApolloProvider client={client}>
           <div id="main">
            <h1>diamile rendering List</h1>
             <BookList/>
             <AddBook/>
            </div>
      </ApolloProvider>
    
    )
  }
 
}

export default App;
