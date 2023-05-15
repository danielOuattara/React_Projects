import { useToursContext } from "./../context/ToursContext";

export default function Error() {
  const { errorMessage } = useToursContext();

  return (
    <main>
      <div className="title">
        <h2>{errorMessage}</h2>
      </div>
    </main>
  );
}
