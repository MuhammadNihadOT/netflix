import axios from 'axios'
import {useState} from 'react'

function App() {
  const [state,setState] = useState([])
  return (
    <div className="App">
      <h1>halo</h1>
      <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          console.log(response.data)
          setState(response.data)
        })
      }
        
      }>click me</button>

      {
        state.map((obj,index)=>{
          return(
           <div>
              <h1>{index+1}</h1>
              <h4>{obj.title}</h4>
           </div>
          )
        })
      }

      {/* 09d7c0138a070919d164e33a5aa88d31 */}
    </div>
  );
}

export default App;
