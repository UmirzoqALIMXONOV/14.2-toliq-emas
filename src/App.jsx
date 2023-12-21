import { useState } from 'react'
import { Button } from 'reactstrap'
const App = () => {

  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      userName: "Johon",
      count: 0,
      active: false
    },
    {
      id: 2,
      firstName: "Bruce",
      lastName: "Lee",
      userName: "Bobur",
      count: 0,
      active: false
    },
  ])


  var CheckboxStyle = {
    transform: 'scale(2)'
  }
  return (
    <div className='container'>
      <div className="row my-4">
        <div className="col-3">
          <input type="search" placeholder='Search' className='form-control' />
        </div>
        <div className="col-3">
          <input id='par' type="checkbox" style={CheckboxStyle} />
          <label htmlFor="par" className='mx-3'>
            <h4>Active</h4>
          </label>
        </div>
        <div className="col-6">
          <Button color='dark float-end px-4'>Add</Button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>No</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>UserName</th>
                <th>Count</th>
                <th>Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((item, index) =>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.userName}</td>
                    <td>
                      <Button color='outline-light btn-sm mx-1'>+</Button>
                      {item.count}
                      <Button color='outline-light btn-sm mx-1'>-</Button>
                    </td>
                    <td>
                      <input type="checkbox" checked={item.active} style={CheckboxStyle} />
                    </td>
                    <td>
                      <Button color='warning btn-sm'>edit</Button>
                      <Button color='danger mx-2 btn-sm'>delete</Button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App