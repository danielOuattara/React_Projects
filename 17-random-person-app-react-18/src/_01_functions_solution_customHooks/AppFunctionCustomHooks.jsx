import iconsListData from "./components/Icons";
import useFetchUser from "./customHooks/useFetchUser";

export default function AppFunction() {
  const { isLoading, person, infoTitle, infoValue, setState, fetchPerson } =
    useFetchUser();

  const handleValue = (event) => {
    event.preventDefault();
    if (event.target.classList.contains("icon")) {
      setState((prevState) => ({
        ...prevState,
        infoTitle: event.target.dataset.label,
        infoValue: person[event.target.dataset.label],
      }));
    }
  };

  return (
    <>
      <main>
        <div className="block bcg-black">
          <br /> <hr /> <br />
          <p style={{ textAlign: "center", color: "white" }}>
            function solution custom hook
          </p>
        </div>
        <div className="block">
          <div className="container">
            {isLoading && (
              <>
                <img src="" alt="" className="user-img" />
                <p className="user-title">Loading...</p>
                <p className="user-value">Loading ...</p>
              </>
            )}

            {!isLoading && (
              <>
                <img src={person.image} alt="" className="user-img" />

                <p className="user-title">
                  {infoTitle === "name"
                    ? `Hi, My ${infoTitle} is`
                    : `My ${infoTitle} is`}
                </p>
                <p className="user-value">{infoValue}</p>
              </>
            )}
            <div className="values-list">
              {iconsListData.map((item) => (
                <button
                  key={item.id}
                  className="icon"
                  data-label={item["data-label"]}
                  onMouseOver={handleValue}
                >
                  {item.icon}
                </button>
              ))}
            </div>
            <button className="btn" type="button" onClick={fetchPerson}>
              {isLoading ? "isLoading..." : "random user"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
