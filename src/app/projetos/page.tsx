import { Suspense } from "react";
import SkeletonCardProject from "../../Skeletons/SkeletonCardProject";
import ProjetosCards from "../../components/ProjetosCards";

type Project = {
  id: number;
  name: string;
  description: string;
  link?: string;
  image: string;
  functions: any;
};

async function projetos() {

  // let path = 'http://localhost:3000/curtas.json'
  let path = 'https://lucilua-film-portfolio.vercel.app/data/projects.json'

  const response = await fetch(path, { next: { revalidate: 180 } })
  const jsonResponse = await response.json()
  const projects: Project[] = await jsonResponse.projetos

  return (
    <div className="p-10 flex justify-center items-center flex-col max-w-max-w-content m-auto">
      <h1 className="text-[25px] mb-10 text-[#121212] dark:text-[#ddd]">Projetos</h1>
      <div className="flex flex-wrap gap-1 justify-center">
        <Suspense fallback={Array.from({ length: 4 }).map((v, i) => <SkeletonCardProject key={i} />)}>
          {projects && projects.map((p: Project) => <ProjetosCards projeto={p} key={p.id} />)}
        </Suspense>
      </div>
    </div>
  );
}

export default projetos;
