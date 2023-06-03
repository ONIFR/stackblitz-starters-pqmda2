import { useEffect, useState } from 'react';

const HomePage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);

  useEffect(() => {
    const checkWeb3Availability = async () => {
      setIsWalletInstalled(!!window.ethereum);
    };

    checkWeb3Availability();
  }, []);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        if (window.ethereum && window.ethereum.selectedAddress) {
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      } catch (error) {
        console.error(error);
        setIsConnected(false);
      }
    };

    if (isWalletInstalled) {
      checkConnection();
    }
  }, [isWalletInstalled]);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
      } else {
        console.error('Metamask is not installed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!isConnected && (
        <>
          {!isWalletInstalled && (
            <p>
              Vous devez télécharger un wallet ETH pour jouer. Téléchargez-en un depuis le site officiel d'Ethereum.
            </p>
          )}

          {isWalletInstalled && (
            <button onClick={connectWallet}>Connectez votre wallet</button>
          )}
        </>
      )}

      {isConnected && (
        <p>Vous êtes connecté !</p>
      )}
    </div>
  );
};

export default HomePage;

