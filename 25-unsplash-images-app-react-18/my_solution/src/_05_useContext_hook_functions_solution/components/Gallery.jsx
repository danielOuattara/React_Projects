import { useQuery } from "@tanstack/react-query";
import { customFetch } from "./../axios";
import { useGlobalContext } from "./../context";

export default function Gallery() {
  const { searchTerm } = useGlobalContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `search/photos?client_id=${
          import.meta.env.VITE_API_CLIENT_ID
        }&query=${searchTerm}`,
      );
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return <section className="image-container">Error...</section>;
  }

  if (data.results.length === 0) {
    return (
      <section className="image-container">
        Nothing Found With tHis search term
      </section>
    );
  }
  return (
    <section className="image-container">
      {data.results.map((item) => (
        <img
          key={item.id}
          src={item.urls.regular}
          className="img"
          alt={item.alt_description}
        />
      ))}
    </section>
  );
}
