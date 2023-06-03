import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const TeamPage = () => {
  // Utilisez les classes CSS définies dans le module
  return (
    <div>
      <h1>Team Selection Page</h1>
      <div id="team-selection-container" className={styles.teamSelectionContainer}>
        <div className={styles.teamRow}>
          <div className={`${styles.teamContainer} ${styles.hidden}`}>
            <div className={styles.teamTitle}>The Frogz Team</div>
            <img src="images/Frogz.png" alt="Frogz" className={styles.teamImage} />
            <br />
            <button className={styles.teamButton} onClick={() => confirmTeamSelection('Frogz')}>
              Join the team
            </button>
          </div>
          <div className={`${styles.teamContainer} ${styles.hidden}`}>
            <div className={styles.teamTitle}>The Monkz Team</div>
            <img src="images/Monkz.png" alt="Monkz" className={styles.teamImage} />
            <br />
            <button className={styles.teamButton} onClick={() => confirmTeamSelection('Monkz')}>
              Join the team
            </button>
          </div>
          <div className={`${styles.teamContainer} ${styles.hidden}`}>
            <div className={styles.teamTitle}>The Shibz Team</div>
            <img src="images/Shibz.png" alt="Shibz" className={styles.teamImage} />
            <br />
            <button className={styles.teamButton} onClick={() => confirmTeamSelection('Shibz')}>
              Join the team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;