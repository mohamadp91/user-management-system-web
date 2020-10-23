import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Tab from "@material-ui/core/Tab"
import TabContext from "@material-ui/lab/TabContext"
import TabList from "@material-ui/lab/TabList"
import styled from "styled-components"
import TabPanel from "@material-ui/lab/TabPanel"
import UsersTab from "./UsersTab"

const AppBarStyled = styled(AppBar)`
	background: #222;
`

const TabContextStyled = styled(TabContext)`
	flex-grow: 1;
`

export default function NavBar() {
	const [tabIndex, setTabIndex] = useState(String(1))

	const [users, setUsers] = useState(null)

	return (
		<TabContextStyled value={tabIndex}>
			<AppBarStyled position="static">
				<TabList onChange={(event, newValue) => setTabIndex(newValue)}>
					<Tab label="Users" value="1" />
					<Tab label="Products" value="2" />
					<Tab label="Manufacturers" value="3" />
				</TabList>
			</AppBarStyled>
			<TabPanel value="1">
				<UsersTab users={users} setUsers={setUsers} />
			</TabPanel>
		</TabContextStyled>
	)
}
