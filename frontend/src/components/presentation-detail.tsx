import { useParams } from "react-router-dom";
import { HeaderTitle } from "./header";
import {
  PresentationProps,
  retrievePresentationById,
} from "../services/presentation";
import { AxiosError } from "axios";
import { useQuery } from "react-query";

export const PresentationDetailPage = () => {
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery<
    PresentationProps,
    AxiosError
  >("presentationById", () => retrievePresentationById(Number(id)));

  return (
    <>
      <HeaderTitle>Apresentação {id}</HeaderTitle>
      <main className="box">
        {isLoading && <p>Carregando...</p>}
        {isError && <p>{error.message}</p>}
        {data && <p>{data.title}</p>}
        <a className="button is-primary" href="/">
          Voltar
        </a>
      </main>
    </>
  );
};
