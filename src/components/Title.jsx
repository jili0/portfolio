import '../stylesheets/title.css'

const Title = ({ id, title, subTitle}) => {
  return (
    <>
      <hr id={id} />
      <h2 className='title'>{title} <span className='subTitle'>{subTitle}</span></h2>
    </>
  );
};

export default Title;
