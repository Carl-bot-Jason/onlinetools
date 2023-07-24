import React from 'react'
import Image from 'next/image'
import Logo from '@/public/ds_img.jpg'
// import Logo from '@/public/logo.png'

export default function Header() {
	return (
		<nav className='flex justify-between items-center px-10 w-full h-20 border-black border-b-4'>
			<Image src={Logo} alt="logo" width="40" height="30" className=''/>
			<input type='text' className='w-80 h-8 border-slate-500 border-2 px-3'></input>
			<button type='button' className='text-black'>settings</button>
		</nav>
	)
}
