"use client";

import { useEffect } from "react";

type Project = {
  id: number;
  name: string;
  description: string;
  link?: string;
  image: string;
  functions: any;
};

async function projetos() {
  async function fetchProjects() {
    // const fetchData = await fetch(
    // "http://localhost:3000/curtas.json",
    const fetchData: any = await fetch(`https://lucilua-film-portfolio.vercel.app/data/projects.json`,
      {
        next: {
          revalidate: 10,
        },
      }
    );

    const data = await fetchData.json();
    const proj = await data.projetos;
    return proj;
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const projects: Project[] = await fetchProjects();

  function setColorByFunction(func: string) {
    switch (func) {
      case "produção":
        return "bg-[#78A868]";
      case "roteiro":
        return "bg-[#32B9F9]";
      case "montagem":
        return "bg-[#EC6EFA]";
      case "câmera":
        return "bg-[#A9A638]";
      case "som":
        return "bg-[#f0a]";
      case "assistência de som":
        return "bg-[#f0a]";
      case "direção":
        return "bg-[#E32B20]";
      case "color grading":
        return "bg-[#D93B6A]";
      case "edição":
        return "bg-[#EC6EFA]";
      case "finalização":
        return "bg-[#A3E6D5]";
      case "sound effects":
        return "bg-[#F0DA35]";
      default:
        return "bg-[#888]";
    }
  }

  return (
    <div className="p-10 flex justify-center items-center flex-col max-w-max-w-content m-auto">
      <h1 className="text-[25px] mb-10 text-[#121212] dark:text-[#ddd]">Projetos</h1>
      <div className="flex flex-wrap gap-1 justify-center">
        {projects
          ? projects.map((p) => {
            return (
              <div
                key={p.id}
                className="
                h-[fit-content] m-2 flex w-[300px] min-w-[250px] flex-col rounded-[8px] border-[1px] border-[#e6e6ea] bg-[#fff] p-5 text-black dark:border-[#403f3f] dark:bg-[#1f2026] dark:text-[#a6a6a6]"
              >
                <h1 className="mb-2 text-[22px] font-bold dark:text-[#fff]">
                  {p.name}
                </h1>
                <h3 className="text-[13px] font-normal mb-2">
                  {p.description}
                </h3>
                <ul className="mb-5 mt-2 flex flex-row flex-wrap gap-[5px]">
                  {p.functions.map((func: string) => {
                    return (
                      <li
                        key={p.id}
                        className={`${setColorByFunction(
                          func
                        )} rounded-[4px] p-1 text-[12px] text-[#fff]`}
                      >
                        {func}
                      </li>
                    );
                  })}
                </ul>
                {p.link ? (
                  <a href={p.link}>
                    <img
                      className="flex h-[150px] max-h-[150px] w-[300px] object-cover"
                      src={p.image}
                      alt="thumbnail"
                    />
                    <p className="mt-2 text-[#111111a0] dark:text-[#ffffff51] text-center text-[12px]">(clique para acessar)</p>
                  </a>
                ) : <img
                  className="flex h-[150px] max-h-[150px] w-[300px] object-cover"
                  src={p.image}
                  alt="thumbnail"
                />}
              </div>
            );
          })
          : null}
      </div>
    </div>
  );
}

export default projetos;
