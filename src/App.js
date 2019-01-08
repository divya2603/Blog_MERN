import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import SocialAndSearch from './components/Header/socialAndSearch'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
    axios.get('http://localhost:3000/api/book')
      .then(res => {
        console.log(res);
        this.setState({ books: res.data });
      }).catch(error => {
        console.log(error.response)
    });
    // var booksData = this.getBooks();
    // booksData.then(res => {
    //       console.log(res);
    //       this.setState({ books: res.data });
    //     }).catch(error => {
    //       console.log(error.response)
    //   });
  }

  getBooks(){
    try {
      return axios.get('/api/book')
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div className="container">
        
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              BOOK CATALOG
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Book</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
                    <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;