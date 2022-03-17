import React, { useEffect, useState} from 'react';
import firebase from '../firebase/firebase.js';
function List() {
    const [todos, setTodos] = useState([])
    const [button_value, button_value_State] = useState("Enter")



    useEffect( () => {
        getData()
    }, [])
    const getData = () => {
        firebase.db.collection('reports').get()
          .then(querySnapshot => {
          querySnapshot.forEach( doc => {
  
            setTodos(prev => ([...prev, doc.data()]))
          })
        })
        .catch(err => {
          console.log(err.message)
        })
      }
      





    return( 
        <div>
            <center>

                



                <div class = "row card-group">
                    {
                        todos.map((items) => 
                            <div class = "col-6">
                                <div style = {{margin: 10}}>
                                    <div class="card text-center">
                                        <div class="card-header">
                                            {items.date}
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">{items.city}, {items.state}</h5>
                                            <h6>{items.gender}, {items.race}</h6>
                                            <p class="card-text">{items.description}</p>
                                        </div>
                                        <div class="card-footer text-muted">
                                            {items.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                 
                </div>
            </center>
        </div>
    );
}
export default List;