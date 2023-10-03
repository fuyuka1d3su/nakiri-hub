interface ButtonProps {
  url: string;
  color: string;
}

function Button(props: ButtonProps) {
  return (
    <button
      onClick={() => {
        window.open(props.url);
      }}
      className="button flex-row items-center justify-center"
      style={{ display: "flex", color: props.color }}
    >
      <p className="px-1">Open</p>
    </button>
  );
}

export default Button;
