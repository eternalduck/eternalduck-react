import React from "react"
import {Outlet} from "react-router-dom"
import Header from "@components/header-footer/Header"

export default function RootPage(){
	return(
		<>
			<Header/>
			<Outlet/>
		</>
	)
}
