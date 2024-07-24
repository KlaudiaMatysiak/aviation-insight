interface TitleProps {
  titleText: string;
}

export default function Title({ titleText }: TitleProps) {
  return <p className="av-title fs-4">{titleText}</p>;
}
