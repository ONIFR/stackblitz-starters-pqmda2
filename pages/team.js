import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const TeamPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkConnection = async () => {
      try {
        if (window.ethereum && window.ethereum.selectedAddress) {
          setIsConnected(true);
        } else {
          setIsConnected(false);
          router.push('/'); // Redirection vers la page index.js si l'utilisateur n'est pas connecté
        }
      } catch (error) {
        console.error(error);
        setIsConnected(false);
      }
    };

    if (window.ethereum) {
      setIsWalletInstalled(true);
      checkConnection();
    } else {
      setIsWalletInstalled(false);
    }
  }, []);

  const confirmTeamSelection = (teamName) => {
    const userAddress = window.ethereum.selectedAddress; // Adresse ETH de l'utilisateur

    // Enregistrer le choix de l'utilisateur dans la base de données Firebase
    firebase
      .database()
      .ref('users/' + userAddress)
      .set({
        team: teamName,
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <div className="team-container">
            <div className="team-title">The Frogz Team</div>
            <img
              src="https://cdn.discordapp.com/attachments/1090010869343195188/1114087970090266654/SamPlayer20_a_3D_cube_with_Pepee_the_frog_on_each_surface_of_th_9467581d-d481-4852-9375-3edabb870eab.png"
              alt="Frogz"
              className="team-image"
              style={{ width: '50%', height: 'auto' }}
            />
            <br />
            <button className="team-button" onClick={() => confirmTeamSelection('Frogz')}>
              Choose this team
            </button>
          </div>
          <div className="team-container">
            <div className="team-title">The Monkz Team</div>
            <img
              src="https://cdn.discordapp.com/attachments/1090010869343195188/1113799982785499377/SamPlayer20_a_3D_cube_with_a_Bored_Ape_on_eatch_surface_of_the__76f515cf-6fc6-47e2-9a19-0b6e33bc8f16.png"
              alt="Monkz"
              className="team-image"
              style={{ width: '50%', height: 'auto' }}
            />
            <br />
            <button className="team-button" onClick={() => confirmTeamSelection('Monkz')}>
              Choose this team
            </button>
          </div>
          <div className="team-container">
            <div className="team-title">The Shibz Team</div>
            <img
              src="https://cdn.discordapp.com/attachments/1090010869343195188/1114087621426151434/SamPlayer20_a_3D_cube_with_a_cartoon_Shiba_on_each_surface_of_t_bda40775-fb8c-40fd-b5f1-e7b808a3b6b8.png"
              alt="Shibz"
              className="team-image"
              style={{ width: '50%', height: 'auto' }}
            />
            <br />
            <button className="team-button" onClick={() => confirmTeamSelection('Shibz')}>
              Choose this team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
