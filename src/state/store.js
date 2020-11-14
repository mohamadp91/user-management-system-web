import { createStore, applyMiddleware } from "redux"

export const ADD_USER = "ADD_USER"

export const store = createStore(
	(state, { type, payload }) => {
		switch (type) {
			case ADD_USER:
				if (!state) return (state = [payload])
				return (state = [...state, payload])
			default:
				return state
		}
	},
	null,
	applyMiddleware(() => {
		return (next) => (action) => {
			return next(action)
		}
	})
)

export default store
