'use client'

import React from 'react'

export default function Sidebar() {
	const [open, setOpen] = React.useState(true);

	return (
		<div className='absolute left-0 h-full w-fit flex justify-self-start z-10'>
			{open && <div className="flex flex-col w-40">
				Pinned
			</div>}
			<div className="w-3 bg-blue-900 text-white cursor-pointer" onClick={() => setOpen(prev => !prev)}>{open ? '<' : '>'}</div>
		</div>
	)
}