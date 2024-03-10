import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Table from "./Table";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) throw Error("Did not receive expected data");
        const data = await response.json();

        setItems(data);
        setFetchError(null);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      }
    }

    fetchItems();

  }, [reqType])
  
  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType}></Form>
      {/* <List items={items}></List> */}
      <Table items={items}></Table>
    </div>
  );
}

export default App;
