import Link from 'next/link'

export default function ToolPreview({title, desc}: {title: String, desc?: String}) {
	return (
		<Link href='/word-char-count' className='h-40 w-40 border-4 border-black'>
			<h3 className='text-xl'><b>{title}</b></h3>
			<p>{desc}</p>
		</Link>
	)
}
