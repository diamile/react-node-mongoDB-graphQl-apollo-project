import React from 'react';

import {getBookQuery} from '../../queries/queries';
import {graphql} from "react-apollo";


class BookDetails extends React.Component{
  

    dislayDetails=()=>{
     const book = this.props.data.book;

     if(book){
         
             return(
                 <div  id='book-details'>
                  <p>{book.name}</p>
                  <p>{book.genre}</p>
                  <p>{book.author.name}</p>
                  <p>{book.author.age}</p>
                   <ul>
                       {book.author.books.map((item)=>{
                           return (
                               <li key={item.id}>{item.name} {item.genre}</li>
                              
                               
                           )
                       })}
                   </ul>
                 </div>
                
             )
       
     }
    }
  render(){
   
    console.log(this.props.data.book);
    return (
      <div id="book-details">
       <p>output product details</p>
       {this.dislayDetails()}
      </div>
    )
  }
 
}


export default graphql(getBookQuery,{
    options:(props)=>{
        return {
            variables:{
                id:props.bookId
            }
        }
    }
})(BookDetails);
