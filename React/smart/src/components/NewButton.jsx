export default function NewButton({ data, updateState }) {
  const handleClick = () => {
    console.log("handleClick");
    updateState("Update State from NewButton");
  };

  return (
    <div>
      <input type="button" value="Update State" onClick={handleClick} />
      <h3>State value: {data}</h3>
    </div>
  );
}
