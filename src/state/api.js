import axios from "axios"
import env from "@beam-australia/react-env"

export const sendRequestAdduser = async (user) => {
	try {
		const request = {
			/* eslint-disable */
			method:"post",
			url:`${env("API_HOST")}/users`,
			data: {
				"firstName":user.firstName,
				"lastName":user.lastName,
				"emailAddress":user.emailAddress
			},
			headers: {
				"content-type": "application/json",
				/* eslint-enable */
			},
		}
		const response = await axios(request)
		return response.data
	} catch (e) {}
}

export const requestToFetchUsers = async () => {
	try {
		const request = {
			/* eslint-disable */
			method:"get",
			url:`${env("API_HOST")}/users`,
			headers: {
				"content-type": "application/json",
				/* eslint-enable */
			},
		}
		const response = await axios(request)
		return response.data
	} catch (e) {}
}
