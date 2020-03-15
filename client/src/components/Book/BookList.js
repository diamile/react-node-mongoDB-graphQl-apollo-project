import React from 'react';
import BookDetails from "./BookDetails";
import {getBooksQuery} from '../../queries/queries';
import {graphql} from "react-apollo";


class BookList extends React.Component{
 constructor(props){
   super(props)
   this.state={
     selected:null
   }
 }
    displayBooks(){
      var data = this.props.data;
      if(data.loading===true){
        return (<div><h1>data loading.....</h1></div>)
      }else{
        return data.books.map((book)=>{
          return (<li key={book.id} onClick={(e)=>this.setState({selected:book.id})}>{book.name}</li>)
        })
      }
    }


  render(){
    
    return (
      <div>
       <ul id="book-list">
        {this.displayBooks()}
       </ul>
       <BookDetails bookId={this.state.selected}/>
      </div>
    )
  }
 
}


export default graphql(getBooksQuery)(BookList);
