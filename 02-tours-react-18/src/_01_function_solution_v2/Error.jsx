function Error(props) {
  return (
    <main>
      <div className="title">
        <h2>{props.errorMessage}</h2>
      </div>
    </main>
  );
}

export default Error;
