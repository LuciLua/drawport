import { Suspense } from "react";
import SkeletonCardProject from "../../Skeletons/SkeletonCardProject";
import ProjetosCards from "../../components/ProjetosCards";
import { TProjetos } from "../../types/TProjetos";

async function projetos() {

  var path = 'http://lucilua-film-portfolio.vercel.app/api/projects'
  // const path = `http://localhost:3000/api/projects`

  const response = await fetch(path, { next: { revalidate: 180 } })
  const jsonResponse = await response.json()
  const projects: TProjetos[] = await jsonResponse.projetos

  return (
    <div className="p-10 flex justify-center items-center flex-col max-w-max-w-content m-auto">
      <h1 className="text-[25px] mb-10 text-[#121212] dark:text-[#ddd]">Projetos</h1>
      <div className="flex flex-wrap gap-1 justify-center">
        <Suspense fallback={Array.from({ length: 4 }).map((v, i) => <SkeletonCardProject key={i} />)}>
          {/* @ts-ignore comment above the line of code that is causing the error */}
          {projects && projects.map((p: TProjetos) => <ProjetosCards projeto={p} key={p._id} />)}
        </Suspense>
      </div>
    </div>
  );
}

export default projetos;
