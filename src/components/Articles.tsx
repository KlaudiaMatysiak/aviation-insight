import { useMemo, useState } from "react";
import { Document } from "../aviation-types";
import Paginantion from "./Paginantion";

interface ArticlesProps {
  documents: Document[];
  activeAlerts: string[];
}

export default function Articles({ documents, activeAlerts }: ArticlesProps) {
  const pageSize = 5;
  const [page, setPage] = useState(1);

  const offset = useMemo(() => {
    return (page - 1) * pageSize;
  }, [page]);

  const articles = useMemo(() => {
    return documents.filter(
      (_, index) => index >= offset && index < page * pageSize
    );
  }, [documents, page, pageSize]);

  return (
    <>
      <Paginantion
        pageSize={pageSize}
        totalElements={documents.length}
        page={page}
        setPage={setPage}
        position="top"
      />
      {articles.map(
        ({ title, sentences, source, url, date, documentId }, index) => (
          <div className="card p-2 my-2" key={`${documentId}-${index}`}>
            <h2>{title}</h2>
            <p>
              {!!date && <span>{new Date(date).toDateString()}, </span>}
              <a href={url} className="text-muted">
                {source}
              </a>
            </p>
            {sentences.map(({ text, alertTypes }, j) => (
              <>
                <div key={`${text}-${j}`}>
                  {alertTypes.map((name, k) => (
                    <span
                      key={`${name}-${k}`}
                      className={`badge rounded-pill me-1${
                        activeAlerts.includes(name)
                          ? " bg-info"
                          : " bg-secondary"
                      }`}
                    >
                      {name}
                    </span>
                  ))}
                  <p>{text}</p>
                </div>
              </>
            ))}
          </div>
        )
      )}
      <Paginantion
        pageSize={pageSize}
        totalElements={documents.length}
        page={page}
        setPage={setPage}
        position="bottom"
      />
    </>
  );
}
