import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { HeaderTitle } from "./header";
import {
  PresentationProps,
  retrievePresentations,
} from "../services/presentation";

export const PresentationListPage = () => {
  const { isLoading, isError, data, error } = useQuery<
    PresentationProps[],
    AxiosError
  >("presentations", retrievePresentations);

  return (
    <>
      <HeaderTitle>Apresentações</HeaderTitle>
      <main className="box">
        {isLoading && (
          <div className="is-text-centered">
            <span className="loader is-128x128"></span>
          </div>
        )}
        {isError && <span>Error: ${error.message}</span>}
        {!isError && data && (
          <div className="grid is-col-min-13">
            {data.map((item) => {
              return (
                <PresentationCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  place={item.place}
                  photo={item.photo}
                  content={item.content}
                />
              );
            })}
          </div>
        )}
      </main>
    </>
  );
};

const PresentationCard = ({
  id,
  title,
  place,
  photo,
  content,
}: PresentationProps) => {
  return (
    <div className="cell">
      <div className="card">
        <a className="card-image" href={`/presentations/${id}`}>
          <figure className="image is-4by3">
            <img src={photo} alt="Placeholder image" />
          </figure>
        </a>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{place}</p>
            </div>
          </div>

          <div className="content">
            {content}
            <br />
            <time dateTime="2016-01-01T23:09:00">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  );
};
