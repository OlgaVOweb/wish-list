import { useState } from 'react';
import { data } from './data';
import './App.css';


function App() {
  const [wish, setWish] = useState(data);
  
  const buyWish = (id) => {
    let newWish = wish.filter(wish => wish.id !== id);
    setWish(newWish)
  }

  return (
    <div >
      <div className='container'>
      <h1>List of {wish.length} wishes</h1>
      </div>
      {wish.map((element => {
        const {id, wish, image} = element;

        return (
          <div key={id}>
            <div className='container'>
              <h2>{id} - {wish}</h2>
            </div>
            <div className='container'>
              <img src={image} width="250px" height="350px" alt="bag"/>
            </div>
            <div className='container'>
              <button onClick={() => buyWish(id)}>buy</button>
            </div>
          </div>
        )
      }))}
      <div className='container'>
        <button onClick={() => setWish([])}>delete all</button>
      </div>
    </div>
  );
}

export default App;
