type TeamMemberProps = {
    name: string;
    role: string;
    image: string;
  };
  
  const TeamMemberCard = ({ name, role, image }: TeamMemberProps): JSX.Element => (
    <div className="col-md-4 mb-4">
      <div className="card text-center h-100">
        <img src={image} alt={name} className="card-img-top" style={{ objectFit: 'cover', height: '250px' }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{role}</p>
        </div>
      </div>
    </div>
  );
  
  export default TeamMemberCard;
  