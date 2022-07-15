import React, { useEffect, useState } from 'react'

function DataFn({themeProp}) {

    const [todo, setTodo] = useState([]);
    const [post, setPost] = useState([]);
    const [status, setStatus] = useState("todos")
    const[loading,setLoading]=useState(false)

    useEffect(() => {
        loadTodos()
        loadPosts()
      }, [])
    
      //Todos yükleniyor.
      const loadTodos = () => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then(x => x.json())
          .then(response => {
            setTodo(response)
            setLoading(false)
        }).catch(e => {
          console.log(e)
          setLoading(false)
        })
      }

        //  Post yükleme işlemi
      const loadPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(x => x.json())
          .then(response => {
            setPost(response)
        }).catch(e => {
          console.log(e)
        })
      }
  
    const renderPosts = () => {
        return (
            <>
                {loading ? "Yükleniyor...." : post.map((item, i) => (
                        <tbody key={i} >
                            <tr className={themeProp === "bg-dark" ? 'text-light': 'text-dark'}>
                                <th scope="row">{item.id}</th>
                                <td>{item.title.toUpperCase().slice(0, 1)}{item.title.toLowerCase().slice(1)}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </>
        )
    }

    const renderTodos = () => {
        return (
            <>
                {loading ? "Yükleniyor...." :
                    todo.map((item, i) => (
                        <tbody key={i} id="tbodyId">
                            <tr className={themeProp === "bg-dark" ? 'text-light': 'text-dark'}>
                                <th scope="row">{item.id}</th>
                                <td >{item.title.toUpperCase().slice(0, 1)}{item.title.toLowerCase().slice(1)}</td>
                                <td>{item.completed ? "Completed" : "Not Completed"}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </>
        )
    }

    const renderStatus = () => {
        if (status === "todos") {
            return renderTodos()
        } else return renderPosts()
    }

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='mb-4'>
                    <button onClick={() => setStatus("todos")} className='col me-1 btn btn-warning' >Todos</button>
                    <button onClick={() => setStatus("posts")} className='col btn btn-danger'>Posts</button>
                </div>
                <table className="table" id="tableId">
                    <thead>
                        <tr className='' >
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>   
                        </tr>
                    </thead>
                    {
                        renderStatus()
                    }
                </table>
            </div> 
        </div>
    )
}

export default DataFn;