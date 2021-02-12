import React from "react"
import { Button, Container, FormControl, FormGroup } from "@material-ui/core"
import styled from "styled-components"
import { useDispatch } from "react-redux"

import { DELETE_USER } from "../../state"

const ContainerStyled = styled(Container)`
	flex-grow: 1;
	background: #f5f5f5;
`

const FormGroupStyled = styled(FormGroup)`
	padding: 30px;
`

const FormControlButtonStyled = styled(FormControl)`
	margin-top: 30px;
	flex-direction: row;
	justify-content: space-between;
`

export const DeleteUser = ({ cancel, userId }) => {
	const CONFIRMATION_MESSAGE = "Are you sure you want to delete this user ?"
	const dispatch = useDispatch()

	const deleteUser = () => {
		dispatch({ type: DELETE_USER, payload: userId })
		cancel()
	}
	return (
		<ContainerStyled>
			<FormGroupStyled>
				{CONFIRMATION_MESSAGE}
				<FormControlButtonStyled>
					<Button onClick={cancel} variant="contained" color="secondary">
						Cancel
					</Button>
					<Button
						onClick={() => deleteUser()}
						variant="contained"
						color="primary"
						data-test-id="delete"
					>
						Ok
					</Button>
				</FormControlButtonStyled>
			</FormGroupStyled>
		</ContainerStyled>
	)
}

export default DeleteUser
