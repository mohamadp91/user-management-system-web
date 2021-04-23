import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

import UsersSaga from "./Sagas"
import { DELETE_USER, ADD_USER } from "./actions"

const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(
	(state, { type, payload }) => {
		switch (type) {
			case ADD_USER:
				if (!state) return (state = [payload])
				return (state = [...state, payload])
			case DELETE_USER:
				const stateAfterUserRemoval = state.filter(
					(user) => user.id !== payload
				)
				if (stateAfterUserRemoval.length === 0) return (state = null)
				return stateAfterUserRemoval
			default:
				return state
		}
	},
	null,
	applyMiddleware(sagaMiddleWare)
)

sagaMiddleWare.run(UsersSaga)

export default store
