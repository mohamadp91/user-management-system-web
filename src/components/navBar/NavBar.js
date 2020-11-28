import React, { useState } from "react"
import { Tab, AppBar } from "@material-ui/core"
import { TabPanel, TabList, TabContext } from "@material-ui/lab"
import styled from "styled-components"

import { UsersTab } from "../usersTab"

const AppBarStyled = styled(AppBar)`
	background: #222;
`

const TabContextStyled = styled(TabContext)`
	flex-grow: 1;
`

export const NavBar = () => {
	const [tabIndex, setTabIndex] = useState(String(1))

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
				<UsersTab />
			</TabPanel>
		</TabContextStyled>
	)
}

export default NavBar
