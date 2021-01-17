import React from "react"
import {Icon, InlineIcon} from "@iconify/react"
import openFileFolder from "@iconify/icons-noto/open-file-folder"
// some extra pack
// import crescentMoon from '@iconify/icons-openmoji/crescent-moon';

export const menuItems =
[
	{
		// "txt": "home",
		"txt": <Icon icon={openFileFolder} className={'icon_big'}/>,
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
		"txt": "cv",
		"url": "/cv",
		// "url": "/work/cv",
		"id": "cv"
	},
	{
		"txt": "test",
		"url": "/test",
		"id": "test"
	},
	// {
	// 	"txt": "ux",
	// 	"url": "/work/ux",
	// 	"id": "ux"
	// },
	// {
	// 	"txt": "art",
	// 	"url": "/work/art",
	// 	"id": "art"
	// },
	// {
	// 	"txt": "timeline",
	// 	"url": "/work/timeline",
	// 	"id": "timeline"
	// },
]
