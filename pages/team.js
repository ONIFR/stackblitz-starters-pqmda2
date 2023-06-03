

const TeamPage = () => {
  // ...

  const confirmTeamSelection = (teamName) => {
    // Enregistrer le choix de l'utilisateur dans la base de données Firebase
    const userAddress = window.ethereum.selectedAddress; // Adresse ETH de l'utilisateur
    firebase.database().ref('users/' + userAddress).set({
      team: teamName
    })
      .then(() => {
        console.log('Choix de l\'équipe enregistré dans la base de données Firebase');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'enregistrement du choix de l\'équipe dans la base de données Firebase', error);
      });
  };

  return (
    <div>
      <h1>Team Selection Page</h1>
      <div id="team-selection-container">
        <div className="team-container" id="frogz-container">
          <div className="team-title">The Frogz Team</div>
          <img src="images/Frogz.png" alt="Frogz" className="team-image" id="frogz-image" />
          <br />
          <button className="team-button" onClick={() => confirmTeamSelection('Frogz')}>Choose this team</button>
        </div>
        <div className="team-container" id="monkz-container">
          <div className="team-title">The Monkz Team</div>
          <img src="images/Monkz.png" alt="Monkz" className="team-image" id="monkz-image" />
          <br />
          <button className="team-button" onClick={() => confirmTeamSelection('Monkz')}>Choose this team</button>
        </div>
        <div className="team-container" id="shibz-container">
          <div className="team-title">The Shibz Team</div>
          <img src="images/Shibz.png" alt="Shibz" className="team-image" id="shibz-image" />
          <br />
          <button className="team-button" onClick={() => confirmTeamSelection('Shibz')}>Choose this team</button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;