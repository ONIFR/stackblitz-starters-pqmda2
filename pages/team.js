import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const TeamPage = () => {
  const [firebaseLoaded, setFirebaseLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Charger le SDK Firebase via une CDN
    const firebaseScript = document.createElement('script');
    firebaseScript.src = 'https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js';
    firebaseScript.onload = () => {
      const databaseScript = document.createElement('script');
      databaseScript.src = 'https://www.gstatic.com/firebasejs/8.6.8/firebase-database.js';
      databaseScript.onload = () => {
        // Initialiser Firebase avec vos informations de configuration
        const firebaseConfig = {
          // Vos informations de configuration Firebase
        };

        firebase.initializeApp(firebaseConfig);
        setFirebaseLoaded(true);
      };
      document.head.appendChild(databaseScript);
    };
    document.head.appendChild(firebaseScript);
  }, []);

  const confirmTeamSelection = (teamName) => {
    const confirmation = window.confirm('Voulez-vous rejoindre cette équipe ?');

    if (confirmation) {
      // Enregistrer le choix de l'utilisateur dans la base de données Firebase
      const userAddress = window.ethereum.selectedAddress; // Adresse ETH de l'utilisateur

      if (firebaseLoaded) {
        const database = firebase.database();
        database.ref('users/' + userAddress).set({
          team: teamName
        })
          .then(() => {
            console.log('Choix de l\'équipe enregistré dans la base de données Firebase');
          })
          .catch((error) => {
            console.error('Erreur lors de l\'enregistrement du choix de l\'équipe dans la base de données Firebase', error);
          });
      }
    }
  };

  useEffect(() => {
    if (!window.ethereum || !window.ethereum.selectedAddress) {
      router.push('/index');
    }
  }, [router]);

  return (
    <div>
      <h1>Team Selection Page</h1>
      <div id="team-selection-container">
        <div className="team-container" id="frogz-container">
          <div className="team-title">The Frogz Team</div>
          <img src="https://cdn.discordapp.com/attachments/1090010869343195188/1114087970090266654/SamPlayer20_a_3D_cube_with_Pepee_the_frog_on_each_surface_of_th_9467581d-d481-4852-9375-3edabb870eab.png" alt="Frogz" className="team-image" id="frogz-image" />
          <br />
          <button className="team-button" onClick={() => confirmTeamSelection('Frogz')}>
            Join the team
          </button>
        </div>
        <div className="team-container" id="monkz-container">
          <div className="team-title">The Monkz Team</div>
          <img src="https://cdn.discordapp.com/attachments/1090010869343195188/1113799982785499377/SamPlayer20_a_3D_cube_with_a_Bored_Ape_on_eatch_surface_of_the__76f515cf-6fc6-47e2-9a19-0b6e33bc8f16.png" alt="Monkz" className="team-image" id="monkz-image" />
          <br />
          <button className="team-button" onClick={() => confirmTeamSelection('Monkz')}>
            Join the team
          </button>
        </div>
        <div className="team-container" id="shibz-container">
          <div className="team-title">The Shibz Team</div>
          <img src="https://cdn.discordapp.com/attachments/1090010869343195188/1114087621426151434/SamPlayer20_a_3D_cube_with_a_cartoon_Shiba_on_each_surface_of_t_bda40775-fb8c-40fd-b5f1-e7b808a3b6b8.png" alt="Shibz" className="team-image" id="shibz-image" />
          <br />
          <button className="team-button" onClick={() => confirmTeamSelection('Shibz')}>
            Join the team
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
