'use client'

import { useEffect } from "react";
import axios from "axios"

type Project = { id: number; name: string; description: string; link?: string; image: string; functions: any };


async function curtas() {

  async function fetchProjects() {
    // const fetchData = await axios.get('/data/projects.json')
    const fetchData: any = await fetch(`https://lucilua-film-portfolio.vercel.app/data/projects.json`,
      {
        next: {
          revalidate: 10
        }
      })
    const data = await fetchData.json()
    // const data = await fetchData.data()
    const proj = await data.projetos
    return proj
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const projects: Project[] = await fetchProjects()


  function setColorByFunction(func: string) {
    switch (func) {
      case 'produção':
        return 'bg-[#78A868]'
      case 'roteiro':
        return 'bg-[#32B9F9]'
      case 'montagem':
        return 'bg-[#EC6EFA]'
      case 'câmera':
        return 'bg-[#A9A638]'
      case 'som':
        return 'bg-[#f0a]'
      case 'assitência de som':
        return 'bg-[#f0a]'
      case 'direção':
        return 'bg-[#FA8366]'
      default:
        return 'bg-[#FA8366]'
    }
  }

  return (
    <div className="p-10">
      <div className="flex gap-10">
        {
          projects ?
            projects.map((p) => {
              return (
                <div key={p.id} className="m-2 bg-[#fff] dark:bg-[#1f2026] p-5 w-[300px] flex flex-col rounded-[8px] text-black dark:text-[#a6a6a6] dark:border-[#403f3f] border-[#e6e6ea] border-[1px]">
                  <h1 className="font-bold text-[25px] dark:text-[#fff] mb-5">
                    {p.name}
                  </h1>
                  <h3 className="text-[14px] font-normal line-clamp-4">{p.description}</h3>
                  {p.link ? <a className="text-blue-500" href={p.link}>Link</a> : null}
                  {/* {p.functions} */}
                  <ul className="flex flex-row flex-wrap gap-[5px] mt-2 mb-2">
                    {p.functions.map((func: string) => {
                      return <li className={`${setColorByFunction(func)} text-[12px] p-1 rounded-[4px] text-[#fff]`}>{func}</li>
                    })}
                  </ul>
                  <img className="w-[300px] h-[250px] object-contain flex" src={p.image} alt="" />
                </div>
              )
            })
            :
            null
        }
      </div>
    </div>
  );
}

export default curtas;
