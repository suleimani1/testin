const UserProfile = ({ name, job, avatar }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  return (
    <div style={cardStyle}>
      <img src={avatar} alt={`Avatar for ${name}`} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <h2 style={{ marginTop: '10px' }}>{name}</h2>
      <p style={{ color: '#555' }}>{job}</p>
    </div>
  );
};

export default UserProfile;