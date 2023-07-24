import { ToolPreview } from "@/components"

export default function Home() {
  return (
    <div className='flex flex-col w-[70%] items-center'>
      <h1 className="text-4xl">Welcome to toolstant!</h1>
      <p>Your one stop shop for all the online tools you seek (hopefully)</p>
      <p>Check out our latest tools!</p>
      <div className="grid">
        <ToolPreview
          title="Word and character count"
          desc="Check no of words and characters"/>
      </div>
    </div>
  )
}
