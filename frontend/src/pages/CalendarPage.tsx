import { useQuery } from "react-query";

import { ProjectProps, retrieveProjects } from "../services/calendar.tsx";

import projectImg from "../assets/img/projects.webp";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const CalendarPage = () => {
  const { isLoading, isError, data } = useQuery<ProjectProps[]>({
    queryKey: ["todos"],
    queryFn: retrieveProjects,
  });

  if (isLoading) {
    return <span>Carregando...</span>;
  }

  if (isError) {
    return <span>Ocorreu um erro</span>;
  }

  return (
    <>
      <figure className="image">
        <img src={projectImg} />
      </figure>
      <h1 className="is-size-1 has-text-centered is-uppercase is-overlay">
        <strong>Nossos Projetos</strong>
      </h1>
      <p className="is-size-4 has-text-centered m-6">
        Site para realizar o controle de grupos de danças tradicionais gauchas.
        Aqui você pode adicionar seu próprio texto. Basta clicar em "Editar
        texto" ou clicar duas vezes sobre mim para editar o conteúdo e alterar a
        fonte. Você também pode me arrastar e soltar em qualquer lugar da
        página. Este é um ótimo espaço para compartilhar informações sobre os
        grupos de danças tradicionais gauchas.
      </p>
      <div className="grid is-col-min-15">
        {data &&
          data?.map((value) => {
            return (
              <ProjectCard
                key={value.id}
                title={value.title}
                photo={value.photo}
                url="/project/${value.id}"
              >
                {value.content}
              </ProjectCard>
            );
          })}
      </div>
    </>
  );
};

type ProjectCardProps = {
  title: string;
  photo: string;
  url: string;
  children: ReactNode;
};

const ProjectCard = ({ title, photo, url, children }: ProjectCardProps) => {
  return (
    <div className="cell">
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={photo} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <strong>{title}</strong>
              </p>
            </div>
          </div>

          <div className="content">
            {children}
            <br />
            <Link to={url}>Saiba mais</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
