type AboutSectionProps = {
    title: string;
    text: string;
  };
  
  const AboutSection = ({ title, text }: AboutSectionProps): JSX.Element => (
    <div className="mb-4">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
  
  export default AboutSection;
  