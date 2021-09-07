import axios from "axios"
import env from "@beam-australia/react-env"
import store from "./store"

export const sendRequestAdduser = async (user) => {
	try {
		const request = {
			/* eslint-disable */
            method: "post",
            url: `${env("API_HOST")}/users`,
            data: {
                "firstName": user.firstName,
                "lastName": user.lastName,
                "emailAddress": user.emailAddress
            },
            headers: {
                "content-type": "application/json",
                /* eslint-enable */
			},
		}
		const response = await axios(request)
		if (response.data.id && response.data.id >= 0) {
			return response.data
		}
	} catch (e) {}
}

export const requestToFetchUsers = async () => {
	try {
		const request = {
			/* eslint-disable */
            method: "get",
            url: `${env("API_HOST")}/users`,
            headers: {
                "content-type": "application/json",
                /* eslint-enable */
			},
		}
		const response = await axios(request).catch((e) => console.log(e))
		if (!store.getState()) {
			return response.data
		}
	} catch (e) {}
}
