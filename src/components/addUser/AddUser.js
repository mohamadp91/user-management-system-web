import React, { useState } from "react"
import styled from "styled-components"
import {
	FormControl,
	FormGroup,
	InputLabel,
	Button,
	TextField,
	Container,
} from "@material-ui/core"
import { useDispatch } from "react-redux"
import uuid from "react-uuid"
import { useForm } from "react-hook-form"

import { REQUEST_ADD_USER } from "../../state"

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
const ErrorParagraph = styled.p`
	margin-top: 10px;
	color: red;
	font-size: 12px;
`
const nullToEmpty = (value) => value || String()

export const AddUser = ({ handleCancel }) => {
	const [firstName, setFirstName] = useState(null)
	const [lastName, setLastName] = useState(null)
	const [emailAddress, setEmailAddress] = useState(null)
	// eslint-disable-next-line no-unused-vars
	const [creationTime, setCreationTime] = useState(null)
	// eslint-disable-next-line no-unused-vars
	const [id, setId] = useState(nullToEmpty(uuid()))
	const dispatch = useDispatch()

	const requiredFieldError = "This field is required"

	const { handleSubmit, register, errors } = useForm()

	const clearUserInputs = () => {
		setFirstName(null)
		setLastName(null)
		setEmailAddress(null)
		setCreationTime(null)
	}

	const cancel = () => {
		clearUserInputs()
		handleCancel()
	}

	const onSubmit = () => {
		const user = {
			firstName: nullToEmpty(firstName),
			lastName: nullToEmpty(lastName),
			emailAddress: nullToEmpty(emailAddress),
			creationTime: nullToEmpty(new Date().toLocaleString()),
			id,
		}
		dispatch({ type: REQUEST_ADD_USER, payload: user })
		cancel()
	}
	return (
		<ContainerStyled>
			<FormGroupStyled>
				<input
					name="id"
					data-test-id="id"
					type="hidden"
					data-id={id}
					value={id}
				/>
				<FormControlStyled data-test-id="firstName-formControl">
					<InputLabelStyled>First name</InputLabelStyled>
					<TextFieldStyled
						value={nullToEmpty(firstName)}
						variant="outlined"
						name="firstName"
						onChange={({ target: { value } }) => setFirstName(value)}
						data-test-id="firstName-textField"
						inputRef={register({ required: true })}
					/>
					{errors.firstName && (
						<ErrorParagraph>{requiredFieldError}</ErrorParagraph>
					)}
				</FormControlStyled>
				<FormControlStyled data-test-id="lastName-formControl">
					<InputLabelStyled>Last name</InputLabelStyled>
					<TextFieldStyled
						value={nullToEmpty(lastName)}
						variant="outlined"
						name="lastName"
						onChange={({ target: { value } }) => setLastName(value)}
						data-test-id="lastName-textField"
						inputRef={register({ required: true })}
					/>
					{errors.lastName && (
						<ErrorParagraph>{requiredFieldError}</ErrorParagraph>
					)}
				</FormControlStyled>
				<FormControlStyled data-test-id="emailAddress-formControl">
					<InputLabelStyled>Email</InputLabelStyled>
					<TextFieldStyled
						value={nullToEmpty(emailAddress)}
						variant="outlined"
						name="emailAddress"
						onChange={({ target: { value } }) => setEmailAddress(value)}
						data-test-id="email-textField"
						inputRef={register({ required: true })}
					/>
					{errors.emailAddress && (
						<ErrorParagraph>{requiredFieldError}</ErrorParagraph>
					)}
				</FormControlStyled>
				<FormControlButtonStyled>
					<Button onClick={cancel} variant="contained" color="secondary">
						Close
					</Button>
					<Button
						onClick={handleSubmit(onSubmit)}
						variant="contained"
						color="primary"
						type="submit"
						data-test-id="add"
					>
						Add
					</Button>
				</FormControlButtonStyled>
			</FormGroupStyled>
		</ContainerStyled>
	)
}

export default AddUser
