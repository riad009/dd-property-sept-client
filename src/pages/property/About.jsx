const About = ({ p }) => {
  return (
    <div>
      <h1 className='text-2xl'>About {p.propertyName}</h1>
      <p className='pt-4 text-sm'>{p.referenceNote}</p>
      <p className='pt-4 text-sm'>{p.descriptionEnglish}</p>
    </div>
  );
};

export default About;
