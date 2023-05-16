import { useSelector } from "react-redux";

export default function Error() {
  const { errorMessage } = useSelector((state) => state.tours);
  return (
    <main>
      <div className="title">
        <h2>{errorMessage}</h2>
      </div>
    </main>
  );
}
