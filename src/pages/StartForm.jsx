const StartForm = () => {
  return (
    <div>
      <h1>Start Form</h1>
      <button
        onClick={() => {
          window.location.href = "/form";
        }}
      >
        Start
      </button>
    </div>
  );
};

export default StartForm;
