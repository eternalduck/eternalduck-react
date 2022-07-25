import React from "react"
import {Outlet} from "react-router-dom"
import Header from "@components/header-footer/Header"

export default function RootPage(){
	return(
		// TODO make theme switcher for data-theme
		<div className="root" data-theme="light">
			<Header/>
			<Outlet/>
		</div>
	)
}
