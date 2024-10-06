function QuantityItemSelected() {
  return (
    <div className="flex flex-col gap-2">
      <p>Quantidade:</p>
      <select name="" id="" className="p-2">
        {[...Array(10)].map((_, index) => (
          <option key={index + 1} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

export default QuantityItemSelected;
