import React from "react"
import {Icon, InlineIcon} from "@iconify/react"
import openFileFolder from "@iconify/icons-noto/open-file-folder"

export const menuItems =
[
	{
		"txt": <div className={"logo"}/>,
		// "txt": <Icon icon={openFileFolder} className={'icon_big'}/>,
		"url": "/",
		"id": "index"
	},
	{
		"txt": "sites",
		"url": "/sites",
		// "url": "/work/sites",
		"id": "sites"
	},
	{
		"txt": "ux",
		"url": "/ux",
		"id": "ux"
	},
	{
		"txt": "cv",
		"url": "/cv",
		// "url": "/work/cvTxt",
		"id": "cv"
	},
	// {
	// 	"txt": "test",
	// 	"url": "/test",
	// 	"id": "test"
	// },
	// {
	// 	"txt": "art",
	// 	"url": "/work/art",
	// 	"id": "art"
	// },
]
