import { ToursContext } from "./../context/ToursContext";

export default function Error() {
  return (
    <ToursContext.Consumer>
      {(context) => {
        const { errorMessage } = context;

        return (
          <main>
            <div className="title">
              <h2>{errorMessage}</h2>
            </div>
          </main>
        );
      }}
    </ToursContext.Consumer>
  );
}
