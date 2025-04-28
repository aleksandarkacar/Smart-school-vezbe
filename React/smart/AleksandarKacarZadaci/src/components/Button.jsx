export default function Button({
  className,
  value,
  disabled = false,
  handleClick,
}) {
  return (
    <>
      <input
        type="button"
        className={className}
        value={value}
        disabled={disabled}
        onClick={handleClick}
      />
    </>
  );
}
