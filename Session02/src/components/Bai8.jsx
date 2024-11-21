import React from "react";

const users = [
  {
    id: 1,
    username: "Daniel Kristeen",
    job: "Visual Designer",
    past: "teacher",
    email: "daniel@website.com",
    dob: "15 Mar 1988",
  },
  {
    id: 2,
    username: "Daniel Kristeen",
    job: "Visual Designer",
    past: "teacher",
    email: "daniel@website.com",
    dob: "15 Mar 1988",
  },
  {
    id: 3,
    username: "Daniel Kristeen",
    job: "Visual Designer",
    past: "teacher",
    email: "daniel@website.com",
    dob: "15 Mar 1988",
  },
  {
    id: 4,
    username: "Daniel Kristeen",
    job: "Visual Designer",
    past: "teacher",
    email: "daniel@website.com",
    dob: "15 Mar 1988",
  },
  {
    id: 5,
    username: "Daniel Kristeen",
    job: "Visual Designer",
    past: "teacher",
    email: "daniel@website.com",
    dob: "15 Mar 1988",
  },
  {
    id: 6,
    username: "Daniel Kristeen",
    job: "Visual Designer",
    past: "teacher",
    email: "daniel@website.com",
    dob: "15 Mar 1988",
  },
];

export default function Bai8() {
  return (
    <>
      <p>
        ........................................................... Bài 8
        ..............................................................................
      </p>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-uppercase mb-0">MANAGER USER</h5>
              </div>
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium pl-4"
                      />
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Dateofbirth
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Manage
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="pl-4">{user.id}</td>
                        <td>
                          <h6 className="font-medium mb-0">{user.username}</h6>
                        </td>
                        <td>
                          <span className="text-muted">{user.job}</span>
                          <br />
                          <span className="text-muted">Past : {user.past}</span>
                        </td>
                        <td>
                          <span className="text-muted">{user.email}</span>
                          <br />
                        </td>
                        <td>
                          <span className="text-muted">{user.dob}</span>
                          <br />
                        </td>
                        <td>
                          <select
                            className="form-control category-select"
                            id="exampleFormControlSelect1"
                          >
                            <option>Modulator</option>
                            <option>Admin</option>
                            <option>User</option>
                            <option>Subscriber</option>
                          </select>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                          >
                            <i className="fa fa-trash" />{" "}
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                          >
                            <i className="fa fa-edit" />{" "}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
