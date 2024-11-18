import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState();

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await fetch('https://63ecef2abe929df00cb58085.mockapi.io/todoapp');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const reverseData = () => {
    const reversedData = [...data].reverse();
    setData(reversedData);
  }


  return (
    <div className="App" >
      {data && (
        <table className='tableBlock'>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>city</th>
              <th>company</th>
              <th>email</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody id="tablebody">
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.company}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button className='reverseBtn' onClick={reverseData}>
        Reverse Data
      </button>
    </div>
  );
}

export default App;
