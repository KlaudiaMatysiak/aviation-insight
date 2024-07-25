interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <div className="btn btn-outline-light m-1" onClick={onClick}>
      {text}
    </div>
  );
}
