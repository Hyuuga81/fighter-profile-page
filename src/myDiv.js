const renderDiv = (fighter) => (
  <div key="{fighter.id}" className="main">
    <div className="profile">
      <img src={fighter.img} className="dims" alt="Photos" />
      <div className="stats">
        <h2 className="name">Name: {fighter.name}</h2>
        <p className="age">Age: {fighter.age}</p>
        <p className="national">Nationality: {fighter.nationality}</p>
      </div>
    </div>
  </div>
);

const Fighter = (props) => {
  const fighterDetails = props.fighters.map(renderDiv);
  return <div>{fighterDetails}</div>;
};

export default Fighter;
