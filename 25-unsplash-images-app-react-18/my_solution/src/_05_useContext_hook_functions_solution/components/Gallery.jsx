import { useQuery } from "@tanstack/react-query";
import { customFetch } from "./../axios";

export default function Gallery() {
  const { data, isLoading } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });

  if (isLoading) {
    return <p style={{ marginTop: "2rem" }}>Loading...</p>;
  }
  return (
    <div className="mage-container">
      {data.results.map((item) => (
        <p key={item.id}>{item.id}</p>
      ))}
    </div>
  );
}
