import React, { useState } from "react"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import styled from "styled-components"
import { InputLabel } from "@material-ui/core"
import FormGroup from "@material-ui/core/FormGroup"
import FormControl from "@material-ui/core/FormControl"
import { useDispatch } from "react-redux"
import uuid from "react-uuid"

import { ADD_USER } from "../state/UsersReducer"

const ContainerStyled = styled(Container)`
	flex-grow: 1;
	background: #f5f5f5;
`

const FormGroupStyled = styled(FormGroup)`
	padding: 30px;
`

const FormControlStyled = styled(FormControl)`
	margin-top: 30px;
`

const InputLabelStyled = styled(InputLabel)`
	position: relative;
	transform: none;
`

const TextFieldStyled = styled(TextField)`
	background: #fefefe;
	margin-top: 5px;
`

const FormControlButtonStyled = styled(FormControl)`
	margin-top: 30px;
	flex-direction: row;
	justify-content: space-between;
`

function AddUser({ handleCancel }) {
	const [firstName, setFirstName] = useState(null)
	const [lastName, setLastName] = useState(null)
	const [emailAddress, setEmailAddress] = useState(null)
	const [dateCreated, setDateCreated] = useState(null)
	const [id, setId] = useState(null)
	const dispatch = useDispatch()

	const clearUserInputs = () => {
		setFirstName(null)
		setLastName(null)
		setEmailAddress(null)
		setDateCreated(null)
		setId(null)
	}

	const cancel = () => {
		clearUserInputs()
		handleCancel()
	}

	const nullToEmpty = (value) => value || String()

	const handleSubmit = () => {
		const user = {
			id: nullToEmpty(uuid()),
			firstName: nullToEmpty(firstName),
			lastName: nullToEmpty(lastName),
			emailAddress: nullToEmpty(emailAddress),
			dateCreated: nullToEmpty(new Date().toLocaleString()),
		}
		dispatch({ type: ADD_USER, payload: user })
		clearUserInputs()
		handleCancel()
	}

	return (
		<ContainerStyled>
			<FormGroupStyled>
				<FormControlStyled>
					<InputLabelStyled>First name</InputLabelStyled>
					<TextFieldStyled
						value={nullToEmpty(firstName)}
						variant="outlined"
						name="firstName"
						onChange={({ target: { value } }) => setFirstName(value)}
					/>
				</FormControlStyled>
				<FormControlStyled>
					<InputLabelStyled>Last name</InputLabelStyled>
					<TextFieldStyled
						value={nullToEmpty(lastName)}
						variant="outlined"
						name="lastName"
						onChange={({ target: { value } }) => setLastName(value)}
					/>
				</FormControlStyled>
				<FormControlStyled>
					<InputLabelStyled>Email</InputLabelStyled>
					<TextFieldStyled
						value={nullToEmpty(emailAddress)}
						variant="outlined"
						name="emailAddress"
						onChange={({ target: { value } }) => setEmailAddress(value)}
					/>
				</FormControlStyled>
				<FormControlButtonStyled>
					<Button
						onClick={handleSubmit}
						variant="contained"
						color="primary"
						type="submit"
					>
						Add
					</Button>
					<Button onClick={cancel} variant="contained" color="secondary">
						Close
					</Button>
				</FormControlButtonStyled>
			</FormGroupStyled>
		</ContainerStyled>
	)
}

export default AddUser
