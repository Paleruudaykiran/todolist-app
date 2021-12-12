import React from 'react' 
import '../Components/Todo.css'
class Todo extends React.Component { 
    constructor() { 
        super() 
        this.state = { 
            inputVal : '',
            list : []
        }
    }
    addItem = () => { 
        const newItem = { 
            id : Math.random() ,
            value : this.state.inputVal,
            iscompleted : false
        }
        let newList = this.state.list
        newList.push(newItem)
        console.log(newList)
        this.setState((prevState) => { 
               return { 
                   inputVal : '', 
                   list : newList
               }
        })
    }
    handleChange = (e) => { 
        this.setState((prevState) => { 
            console.log(e,e.target.value,prevState)
            return {
                inputVal : e.target.value,
                list : prevState.list
            }
        })
    }
    handleDelete = (e) => { 
        const removeItem = e.target.id
        console.log(removeItem)
        const filterList = this.state.list.filter((item) => { 
            console.log(item.id,removeItem,item.id ===removeItem)
            return item.id !== Number(removeItem) 
        })
        console.log(filterList)
        this.setState((prevState) => { 
            return ( { 
                inputVal : prevState.inputVal,
                list : filterList
            })
        })
    }
    completed = (e) => { 
        const newList = this.state.list
        for(var i = 0 ; i < newList.length ; i ++) { 
            if(newList[i].id === Number(e.target.id)) { 
                newList[i].iscompleted = newList[i].iscompleted ? false : true
            }
        }
        this.setState({ 
            inputVal : '',
            list : newList
        })
    }
    render() { 
        return (
            <div class = "theme">
                <div className="inputs">
                    <input type = "text" placeholder = "add Item..." value = {this.state.inputVal} onChange={this.handleChange}></input>
                    <button className="btn" onClick={this.addItem}>Add</button>
                </div>
                <ul>
                    {
                         this.state.list.map((item) => {
                            return (
                                <li className={item.iscompleted ? "completed" : "notcompleted"} onClick = {this.completed} key = {item.id} id = {item.id}>
                                        {item.value}
                                        <button id = {item.id} className="btn-del" onClick={this.handleDelete}>X</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Todo