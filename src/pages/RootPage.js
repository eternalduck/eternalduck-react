import React from "react"
import {Outlet} from "react-router-dom"
import Header from "@components/header-footer/Header"
import Footer from "@components/header-footer/Footer"

export default function RootPage(){
	return(
		<div className="root">
			<Header/>
			<Outlet/>
			<Footer/>
		</div>
	)
}
