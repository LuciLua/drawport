type Estaticas = {
    id: number;
    name: string;
    description: string;
    link?: string;
    image: string;
    functions: any;
};

async function estaticas() {
    return (
        <div className="p-10 flex justify-center items-center max-w-max-w-content m-auto flex-col">
            <h1 className="text-[22px] text-[#121212] dark:text-[#ddd] mb-10">Imagens Estáticas</h1>
            <div className="flex flex-wrap gap-5 justify-center">
                <img src="/estaticas/beco.jpg" alt="" className="rounded-[12px] h-[300px] object-contain hover:scale-105 transform-cpu transition-[0.6s] bg-[#ddd]" />
                <img src="/estaticas/morcego.png" alt="" className="rounded-[12px] h-[300px] object-contain hover:scale-105 transform-cpu transition-[0.6s] bg-[#ddd]" />
                <img src="/estaticas/perna 5.png" alt="" className="rounded-[12px] h-[300px] object-contain hover:scale-105 transform-cpu transition-[0.6s] bg-[#ddd]" />
                <img src="/estaticas/pernalonga2.png" alt="" className="rounded-[12px] h-[300px] object-contain hover:scale-105 transform-cpu transition-[0.6s] bg-[#ddd]" />
                <img src="/estaticas/US-395 Burns_Oregon.jpg" alt="" className="rounded-[12px] h-[300px] object-contain hover:scale-105 transform-cpu transition-[0.6s] bg-[#ddd]" />
                <img src="/estaticas/robo.jpg" alt="" className="rounded-[12px] h-[300px] object-contain hover:scale-105 transform-cpu transition-[0.6s] bg-[#ddd]" />
                <img src="/estaticas/modelo_storyboard.jpg" alt="" className="rounded-[12px] h-[300px] object-contain hover:scale-105 transform-cpu transition-[0.6s] bg-[#ddd]" />
                <img src="/estaticas/ps_cenario_bw.png" alt="" className="rounded-[12px] h-[300px] object-contain hover:scale-105 transform-cpu transition-[0.6s] bg-[#ddd]" />
            </div>
        </div>
    );
}

export default estaticas;
