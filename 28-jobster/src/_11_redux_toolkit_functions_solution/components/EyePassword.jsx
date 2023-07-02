export default function EyePassword({ toggleViewPassword, viewPassword }) {
  return (
    <button
      onClick={toggleViewPassword}
      style={{
        border: "1px solid #bcccdc",
        backgroundColor: "#f0f4f8",
        borderRadius: "50%",
        padding: "3px 4.5px",
        cursor: "pointer",
        marginLeft: "60%",
        // fontSize: "12px",
      }}
    >
      {!viewPassword ? <>&#x1F441;</> : <>&#x1F512;</>}
    </button>
  );
}
