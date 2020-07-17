import React from 'react';
import './App.css';

const products=[{category:'Electronics',price:'100 €',name:'Mixer'},
                {category:'Electronics',price:'70 €',name:'Kitchen Weight'},
                {category:'Clothes',price:'45 €',name:'T-shirt'},
                {category:'Clothes',price:'120 €',name:'Dress'},
            
]
const ProductTable=(props)=>{
  console.log(props)
  return (
    <table>
      <tr>
        <td>name</td>
        <td>category</td>
        <td>price</td>
      </tr>
      <tr>
  <td>{props.products}</td>
      </tr>
    </table>
  )
};


  
  function App() {
    return (
      <div className="App">
    
      </div>
  
    );
  };
  
  export default App;

