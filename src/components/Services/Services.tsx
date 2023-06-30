import { DiPhotoshop } from "react-icons/di";
import { MdOutlineAnimation, MdOutlineVideoSettings } from "react-icons/md";
import Service from "./Service";

function Services() {
  return (
    <div className="my-10 flex w-full max-w-max-w-content flex-wrap justify-center gap-5">
      <Service
        title={"Imagens Estáticas"}
        routeTo="estaticas"
        description={
          "Criação de designs exclusivos para logos, banners, cartões de visita, ilustrações e muito mais"
        }
        icon={<DiPhotoshop />}
      />
      <Service
        title={"Animações"}
        routeTo="animacoes"
        description={
          "Animações de qualidade para explainer videos, apresentações e vinhetas."
        }
        icon={<MdOutlineAnimation />}
      />
      <Service
        title={"Montagem e Edição"}
        routeTo="montagem"
        description={
          "Faço edição de vídeo profissional para eventos, comerciais, redes sociais e filmes."
        }
        icon={<MdOutlineVideoSettings />}
      />
    </div>
  );
}

export default Services;
