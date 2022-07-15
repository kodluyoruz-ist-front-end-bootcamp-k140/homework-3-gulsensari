import React from 'react';


export default class DataClass extends React.Component {


  state = {
    loading: false,
    todos: [],
    post: [],
    status: "todos",
  }

  componentDidMount() {
    this.loadTodos();
    this.loadPost();
  }

  //Todos yükleniyor.
  loadTodos = () => {
    this.setState({ loading: true })
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(x => x.json())
      .then(res => {
        this.setState({ todos: res, loading: false })
      }).catch(e => {
        this.setState({ loading: false })
      })
  }

  // Todos ile çekilen Api verileri map edilir.
  renderTodos = () => {
    return (
      <>
        {
          this.state.todos.slice(0, 50).map((item, i) => {
            return (
              <tr key={i} className={this.props.theme === "bg-dark" ? 'text-light': 'text-dark'}>
                <th scope="row" >{item.id}</th>
                <td >{item.title.toUpperCase().slice(0, 1)}{item.title.toLowerCase().slice(1)}</td>
                <td>{item.completed ? "Completed" : "Not Completed"}</td>

              </tr>
            )
          })
        }
      </>
    )
  }

  // Table yapılır ve  Todos ile çekilen Api verileri içerisine render edilir.
  renderTableTodos = () => {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Completed</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTodos()}
          </tbody>
        </table>
      </>
    )
  }
  
  //  Post yükleme işlemi
  loadPost = () => {
    this.setState({ loading: true })
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(x => x.json())
      .then(response => {
        this.setState({ post: response, loading: false })
      }).catch(e => {
        this.setState({ loading: false })
      })
  }

  // Post ile çekilen Api verileri map edilir.
  renderPost = () => {
    return (
      <>
        {
          this.state.post.slice(0, 50).map((item, i) => {
            return (
              <tr key={i} className={this.props.theme === "bg-dark" ? 'text-light': 'text-dark'}>
                <th scope="row" >{item.id}</th>
                <td >{item.title.toUpperCase().slice(0, 1)}{item.title.toLowerCase().slice(1)}</td>
              </tr>
            )
          })
        }
      </>
    )
  }


  // Table yapılır ve  Post ile çekilen Api verileri içerisine render edilir.
  renderTablePost = () => {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPost()}
          </tbody>
        </table>
      </>
    )
  }

  
  renderStatus = () => {
    if (this.state.status === "todos") {
      return this.renderTableTodos()
    } else return this.renderTablePost()
  }

  clickTodos = () => {
    this.setState({ status: "todos" })
  }

  clickPost = () => {
    this.setState({ status: "post" })
  }

  
  render() {

    const { loading } = this.state

    return (
      <div className='container mt-3'>
        <div className='row'>
          
          <div className='mb-4'>
            <button onClick={this.clickTodos} className='col me-1 btn btn-warning' >Todos</button>
            <button onClick={this.clickPost} className='col btn btn-danger'>Posts</button>
          </div>

          {loading ? "Loading..." : this.renderStatus()}
        </div>
      </div>
    )
  }
};
