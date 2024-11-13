import Link from "next/link";

const mockUrls:Array<string>= [
  
]
const mockImages = mockUrls.map((url: string,index: number)=> ({
  id: index+1,
  url
}))
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4" >
        {[...mockImages].map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
      Hello (gallery in process)
    </main>
  );
}
