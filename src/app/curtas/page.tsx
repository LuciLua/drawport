'use client'

import { useEffect } from "react";

type Project = { id: number; name: string; description: string; link?: string; image: string; functions: any };


async function curtas() {

  async function fetchProjects() {
    const fetchData:any = await fetch('/data/projects.json',
      {
        next: {
          revalidate: 10
        }
      })
    const data = await fetchData.json()
    const proj = await data.projetos
    return proj
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const projects: Project[] = await fetchProjects()


  return (
    <div className="p-10">
      <div className="bg-slate-300 flex gap-10">
        {
          projects.map((p) => {
            return (
              <div key={p.id} className="m-2 bg-[#dcdcdc] p-5 w-[300px] flex flex-col">
                <h1 className="font-bold text-[25px]">
                  {p.name}
                </h1>
                <h3>{p.description}</h3>
                {p.link ? <a className="text-blue-500" href={p.link}>Link</a> : null}
                {p.functions}
                <img className="w-[300px] h-[250px] object-contain flex" src={p.image} alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default curtas;
