export default function Sor(props) {
  function torles() {
    props.torles(props.objektum.id)
  }



  return (
    <tr>
      <td>{props.objektum.id}</td>
      <td>{props.objektum.name}</td>
      <td>{props.objektum.email}</td>
      <td>{props.objektum.permission}</td>
      <td>
        <button className="btn btn-danger" onClick={torles}>
          Törlés
        </button>
      </td>
      <td>
        <button className="btn btn-primary" >
          Módosítás
        </button>
      </td>
    </tr>
  );
}
