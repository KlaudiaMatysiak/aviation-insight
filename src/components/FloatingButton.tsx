interface FloatingButtonProps {
  text: string;
  onClick: () => void;
  position: { top: number; left: number };
}

const FloatingButton = ({ text, onClick, position }: FloatingButtonProps) => {
  return (
    <button
      className="floating-button"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FloatingButton;
