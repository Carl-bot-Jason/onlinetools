'use client'

import React from 'react';
import { Bases } from '@/types';

export default function BaseConversion() {
	const [inputs, setInputs] = React.useState<Bases>({
		binary: "",
		octal: "",
		decimal: "",
		hexadecimal: ""
	});

	function handleChange(event: any){
		if(event.target.value === ""){
			setInputs({
				binary: "",
				octal: "",
				decimal: "",
				hexadecimal: ""
			});
			return;
		}

		switch(event.target.id){
			case "binary":
				if(/^[01]+$/.test(event.target.value)){

				}
				break;

			case "octal":
				if(/^[0-7]+$/.test(event.target.value)){

				}
				break;

			case "decimal": 
				if(/^[0-9]+$/.test(event.target.value)){
					
				}
				break;

			case "hexadecimal":
				if(/^[0-9a-fA-F]+$/.test(event.target.value)){

				}
				else{
					event.target.classList.add('animate-invalid-input', 'border-red-500');
				}
				break;
		}
		setInputs(convertBase(event.target.id, event.target.value));		
	}

	function convertBase(id: string, value: string){
		let x = {...inputs, [id]: value};
		return x;
	}

	function handleAnimationRemove(event: any){
		event.target.classList.remove('animate-invalid-input', 'border-red-500');
	}

	return (
		<div className='w-full flex flex-col items-center'>
			<h1 className='text-3xl'>Base Converter</h1>
			<div className="w-[40%] flex justify-between my-10">
				<label htmlFor="binary" className='text-xl'>Binary</label>
				<input
					type="text"
					value={inputs.binary}
					id="binary"
					name="base"
					className="border border-grey rounded-lg w-[50%] h-8 p-2"
					onChange={handleChange}
					onAnimationEnd={handleAnimationRemove}
					placeholder="Enter a value"/>
			</div>
			<div className="w-[40%] flex justify-between my-10">
				<label htmlFor="octal" className='text-xl'>Octal</label>
				<input
					type="text"
					value={inputs.octal}
					id="octal"
					name="base"
					className="border border-grey rounded-lg w-[50%] h-8 p-2"
					onChange={handleChange}
					onAnimationEnd={handleAnimationRemove}
					placeholder="Enter a value"/>
			</div>
			<div className="w-[40%] flex justify-between my-10">
				<label htmlFor="decimal" className='text-xl'>Decimal</label>
				<input
					type="text"
					value={inputs.decimal}
					id="decimal"
					name="base"
					className="border border-grey rounded-lg w-[50%] h-8 p-2"
					onChange={handleChange}
					onAnimationEnd={handleAnimationRemove}
					placeholder="Enter a value"/>
			</div>
			<div className="w-[40%] flex justify-between my-10">
				<label htmlFor="hexadecimal" className='text-xl'>Hexadecimal</label>
				<input
					type="text"
					value={inputs.hexadecimal}
					id="hexadecimal"
					name="base"
					className="border border-grey rounded-lg w-[50%] h-8 p-2"
					onChange={handleChange}
					onAnimationEnd={handleAnimationRemove}
					placeholder="Enter a value"/>
			</div>
		</div>
	)
}
