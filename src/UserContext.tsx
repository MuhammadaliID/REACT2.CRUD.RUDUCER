import { createContext, useReducer } from "react";


export let UserContext = createContext()

let initialState = [

    { id: 1, name: "Ali", age: 19 },
    { id: 2, name: "Muhammad", age: 20 },
    { id: 3, name: "Ahmad", age: 21 }
]


function reducer(state, action) {
    switch (action.type) {
        case "GET":
            return state;

        case "DELETE":
            return state.filter((user) => user.id !== action.payload)

        case "ADD":
            return [...state, action.payload]

        case "EDIT":
            return state.map((user) => {
                user.id === action.payload.id ? action.payload : user
            })

        default:  return state;
    }
}

export function UserProvider({ children }) {
    let [users, dispatch] = useReducer(reducer, initialState);

    function getUsers() {
        dispatch({ type: "GET" });
    }

    function deleteUser(id) {
        dispatch({ type: "DELETE", payload: id })
    }

    function addUser(user) {
        dispatch({ type: "ADD", payload: user })
    }

    function editUser(user) {
        dispatch({ type: "EDIT", payload: user });
    }

    return (
        <UserContext.Provider value={{ users, getUsers, deleteUser, addUser, editUser }}>
            {children}
        </UserContext.Provider>
    );
}
