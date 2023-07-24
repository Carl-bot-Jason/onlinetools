'use client'

import React from 'react'
import { WordChar } from '@/types';

export default function WordCharCount() {
	const [input, setInput] = React.useState("");
	const [count, setCount] = React.useState<WordChar>({
		words: 0,
		chars: 0,
		lines: 0,
		spaces: 0
	});

	async function handleChange(event: any){
		setInput(event.target.value);
		let obj: WordChar = {words: 0, chars: 0, lines: 0, spaces: 0};
		if(event.target.value.length === 0){
			setCount(obj);
			return;
		}
		for(let ch of event.target.value){
			if(ch === ' '){
				obj.spaces++;
			}
			obj.chars++;
		}
		let lineMatch = event.target.value.match(/\n/g);
		if(!lineMatch)
			obj.lines = 1;
		else
			obj.lines = lineMatch.length + 1;
		let wordMatch = event.target.value.match(/\S+/g);
		if(wordMatch)
			obj.words = wordMatch.length;
		setCount(obj);
	}

	return (
		<div className='w-full flex flex-col items-center'>
				<h1 className='text-3xl'>Word and Character counter</h1>
				<textarea
					value={input}
					onChange={handleChange}
					placeholder="Paste text here"
					className="border border-gray-300 rounded-lg p-2 w-[60%] flex-grow my-8 resize-none"/>
			<div className="h-10 w-[60%] mb-4 border-red-500 border-2 rounded-xl flex justify-around items-center">
				<p>Words: {count.words}</p>
				<p>Characters: {count.chars}</p>
				<p>Lines: {count.lines}</p>
				<p>Spaces : {count.spaces}</p>
			</div>
		</div>
	)
}
