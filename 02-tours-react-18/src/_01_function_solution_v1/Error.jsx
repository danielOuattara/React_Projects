function Error({ errorMessage }) {
  return (
    <main>
      <div className="title">
        <h2>{errorMessage}</h2>
      </div>
    </main>
  );
}

export default Error;
