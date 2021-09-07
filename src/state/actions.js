export const REQUEST_ADD_USER = "REQUEST_ADD_USER"
export const ADD_USER = "ADD_USER"
export const DELETE_USER = "DELETE_USER"
export const REQUEST_FETCH_USERS = "REQUEST_FETCH_USERS"
export const SERVER_IS_DISCONNECT = "SERVER_IS_DISCONNECT"
export const DATABASE_IS_DISCONNECT = "DATABASE_IS_DISCONNECT"

export const addUser = (user) => ({
	type: ADD_USER,
	payload: user,
})
