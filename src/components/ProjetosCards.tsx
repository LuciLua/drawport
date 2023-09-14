import { TProjetos } from "../types/TProjetos";

// function ProjetosCards({ projeto }: { projeto: TProjetos }) {
async function ProjetosCards({ projeto }: { projeto: TProjetos }) {

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

    await new Promise((resolve) => { setTimeout(resolve, 2000) })

    return (
        <div
            key={projeto._id}
            className="
                h-[fit-content] m-2 flex w-[300px] min-w-[250px] flex-col rounded-[8px] border-[1px] border-[#e6e6ea] bg-[#fff] p-5 text-black dark:border-[#403f3f] dark:bg-[#1f2026] dark:text-[#a6a6a6]">
            <h1 className="mb-2 text-[22px] font-bold dark:text-[#fff]">
                {projeto.name}
            </h1>
            <h3 className="text-[13px] font-normal mb-2">
                {projeto.description}
            </h3>
            <ul className="mb-5 mt-2 flex flex-row flex-wrap gap-[5px]">
                {projeto.functions.map((func: string) => {
                    return (
                        <li
                            key={`${projeto._id}_${func}`}
                            className={`${setColorByFunction(func)} rounded-[4px] p-1 text-[12px] text-[#fff]`}>
                            {func}
                        </li>
                    );
                })}
            </ul>
            {projeto.link ? (
                <a href={projeto.link}>
                    <img
                        className="flex h-[150px] max-h-[150px] w-[300px] object-cover"
                        src={projeto.image}
                        alt="thumbnail"
                    />
                    <p className="mt-2 text-[#111111a0] dark:text-[#ffffff51] text-center text-[12px]">(clique para acessar)</p>
                </a>
            ) : <img
                className="flex h-[150px] max-h-[150px] w-[300px] object-cover"
                src={projeto.image}
                alt="thumbnail"
            />}
        </div>
    )
}

export default ProjetosCards