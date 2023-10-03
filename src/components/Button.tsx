interface ButtonProps {
  url: string
}

function Button(props: ButtonProps) {
  return (
    <button
      onClick={() => {
        window.open(props.url);
      }}
      className="button flex-row items-center justify-center"
      style={{ display: 'flex'}}
    >
      <p className="px-1">Open</p>
    </button>
  );
}

export default Button;
