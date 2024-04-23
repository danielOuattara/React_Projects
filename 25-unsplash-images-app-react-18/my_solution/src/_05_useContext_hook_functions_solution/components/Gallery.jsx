import { useQuery } from "@tanstack/react-query";
import { customFetch } from "./../axios";
import { useSearchContext } from "./../context";

export default function Gallery() {
  const { searchTerm } = useSearchContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const res = await customFetch.get(
        `search/photos?client_id=${
          import.meta.env.VITE_API_CLIENT_ID
        }&query=${searchTerm}`,
      );
      return res.data;
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
        Nothing found for term {searchTerm}
      </section>
    );
  }
  return (
    <section className="image-container">
      {data.results.map((item) => (
        <img
          key={item.id}
          src={item?.urls?.regular}
          className="img"
          alt={item.alt_description}
        />
      ))}
    </section>
  );
}
