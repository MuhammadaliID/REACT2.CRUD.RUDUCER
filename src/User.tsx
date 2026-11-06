
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import { useForm } from 'react-hook-form'
import EditDialog from './Components/EditDialog';

function User() {
    let { users, deleteUser, addUser, editUser } = useContext(UserContext)

   

    let [editingUser, setEditingUser] = useState(null);

    // ADD
    let { register, handleSubmit, reset } = useForm();


    function onSubmit(data) {
        addUser({
            id: Date.now(),
            name: data.name,
            age: Number(data.age)
        });

        reset();
    }

    return (
        <div>
            <h1>Users</h1>

            {/* ADD */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Name"
                    {...register("name", { required: true })}
                />

                <input
                    type="number"
                    placeholder="Age"
                    {...register("age", { required: true })}
                />

                <button type="submit">Add</button>
            </form>



            {/* TABLE */}
            <table border="1" cellPadding="15" style={{ marginTop: "50px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                                <button onClick={() => setEditingUser(user)} style={{marginLeft:"20px"}}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <EditDialog user={editingUser}
                onClose={() => setEditingUser(null)}
                editUser={editUser}></EditDialog>
        </div>
    )
}

export default User
