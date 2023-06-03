import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const router = useRouter();

  // Vérifier si un wallet ETH est installé
  useEffect(() => {
    // Vérifier si Web3 est disponible dans le navigateur
    const isWeb3Available = typeof window.ethereum !== 'undefined';
    setIsWalletInstalled(isWeb3Available);
  }, []);

  // Vérifier l'état de connexion
  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const checkConnection = async () => {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setIsConnected(accounts.length > 0);
      } catch (error) {
        console.error(error);
      }
    };

    if (isWalletInstalled) {
      checkConnection();
    }
  }, [isWalletInstalled]);

  // Gestion de la connexion du wallet
  const connectWallet = async () => {
    try {
      // Demander à l'utilisateur de se connecter
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      setIsConnected(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isConnected) {
      router.push('/team'); // Redirection vers la page 'team.js'
    }
  }, [isConnected, router]);

  return (
    <div>
      {!isWalletInstalled && (
        <p>
          Vous devez télécharger un wallet ETH pour jouer. Téléchargez-en un depuis le site officiel d'Ethereum.
        </p>
      )}

      {isWalletInstalled && !isConnected && (
        <button onClick={connectWallet}>Connectez votre wallet</button>
      )}
    </div>
  );
};

export default HomePage;
