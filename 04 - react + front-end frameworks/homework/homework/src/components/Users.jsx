import React from "react";
import { users } from "../data/sampleData";

export default function Users() {
  return (
    <div className="mt-20 p-4 w-200">
      <h2 className="text-center mb-4">Users</h2>
      <table className="table-auto w-full border-collapse">
        <tbody>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Company</th>
          </tr>
          {users.map((element) => (
            <tr key={element.id}>
              <td className="border px-4 py-2">{element.name}</td>
              <td className="border px-4 py-2">{element.username}</td>
              <td className="border px-4 py-2">{element.email}</td>
              <td className="border px-4 py-2">{element.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
