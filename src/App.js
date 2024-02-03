import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DataService from "./model/DataService";
import Sor from "./components/Sor";
import Fejlec from "./components/Fejlec";

const DS = new DataService();

function App() {
  let vegpont = "/users";
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [permission, setPermission] = useState("")
  const [inputObj, setInputObj] = useState({name: "", email: "", password: "", permission: ""});

  const [objLista, setObjLista] = useState([]);
  useEffect(() => {
    DS.getData(vegpont, setObjLista);
  }, []);

  function sorTorles(id) {
    DS.deleteData(vegpont, id);
  }

  function sorFelvitel(event) {
    event.preventDefault()
    console.log(inputObj)
    DS.postData(vegpont, inputObj)
  }

  function adatvalt(event){
    let obj = inputObj
    obj[event.target.id] = event.target.value
    setName(obj.name)
    setEmail(obj.email)
    setPassword(obj.password)
    setPermission(obj.permission)
    setInputObj(obj)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin</h1>
      </header>

      <form onSubmit={sorFelvitel}>
        <div className="input-group">
          <label htmlFor="name">Felhasználó</label>
          <input type="text" name="name" id="name" onChange={adatvalt}/>
        </div>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" onChange={adatvalt}/>
        </div>
        <div className="input-group">
        <label htmlFor="password">Jelszó</label>
        <input type="password" name="password" id="password" onChange={adatvalt}/>
      </div>
        <div className="input-group">
          <label htmlFor="permission">Csoport</label>
          <input type="text" name="permission" id="permission" onChange={adatvalt}/>
        </div>
        <input type="submit" value="küld"/>
      </form>

      <table className="table table-striped">
        <thead>
          <Fejlec />
        </thead>
        <tbody>
          {objLista.map((obj, index) => {
            return (
              <Sor
                key={index}
                objektum={obj}
                torles={sorTorles}
                
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
