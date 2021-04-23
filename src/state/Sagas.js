import { put, takeEvery } from "redux-saga/effects"

import { addUser, REQUEST_ADD_USER, REQUEST_FETCH_USERS } from "./actions"
import { sendRequestAdduser, requestToFetchUsers } from "./api"

export function* sendApiData(action) {
	try {
		const user = yield sendRequestAdduser(action.payload)
		yield put(addUser(user))
	} catch (e) {}
}

export function* receiveApiData() {
	try {
		const users = yield requestToFetchUsers()
		for (let i = 0; i < users.length; i++) {
			yield put(addUser(users[i]))
		}
		// users.forEach((user) => {
		// 	put(addUser(user))
		// })
	} catch (e) {}
}

export default function* UsersSaga() {
	yield takeEvery(REQUEST_ADD_USER, sendApiData)
	yield takeEvery(REQUEST_FETCH_USERS, receiveApiData)
}
