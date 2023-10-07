import Image from 'next/image'
import ModelCard from "../components/model-card"

export default function Home() {

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Wellcome to Parallel</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Start contributing right now
      </p>
      <hr />
      <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js"></script>
      <div className='flex flex-row flex-wrap gap-4 mt-14'>
        <ModelCard modelName={"/covid_19.glb"} />
        <ModelCard modelName={"/shirt_baked.glb"} />
      </div>
    </>
  )
}
