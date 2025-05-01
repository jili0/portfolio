interface TitleProps {
  id: string;
  title: string;
  subTitle: string;
}

export default function Title({ id, title, subTitle }: TitleProps) {
  return (
    <>
      <hr id={id} />
      <h2 className="title">
        {title} <span className="subTitle">{subTitle}</span>
      </h2>
    </>
  );
}