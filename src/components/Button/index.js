export const Button = ({ handleClick, disabled }) => {
  return (
    <div>
      <button disabled={disabled} onClick={() => handleClick()}>
        Submit
      </button>
    </div>
  );
};
