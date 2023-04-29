// Roadmap.jsx
import React from 'react';
import styles from './Roadmap.module.css';

const Roadmap = () => {
  const milestones = [
    {
      title: 'Q1 2023',
      items: [
        { icon: '🚀', description: 'Butane Chain Launch' },
        { icon: '🔗', description: 'Mainnet Release' },
        { icon: '💡', description: 'Smart Contract Support' },
        { icon: '🔐', description: 'Security Audits'
        }
      ],
    },
    {
      title: 'Q2 2023',
      items: [
        { icon: '💰', description: 'Staking Implementation' },
        { icon: '🌉', description: 'Cross-Chain Bridge' },
        { icon: '🔐', description: 'CertiK Audit' },
        { icon: '🔐', description: 'Hacken Audit' },
        { icon: '🔐', description: 'TechRate Audit' }
      ],
    },
    {
      title: 'Q3 2023',
      items: [
        { icon: '🎮', description: 'Decentralized Gaming Platform' },
        { icon: '🌐', description: 'Decentralized Marketplace' },
        { icon: '🚀', description: 'NFT Platform Launch' },
        { icon: '🔐', description: 'PeckShield Audit' }
        
      ],
    },
    {
      title: 'Q4 2023',
      items: [
        { icon: '🌟', description: 'Ecosystem Expansion' },
        { icon: '🔧', description: 'Developer Tools and SDKs' },
        { icon: '🤝', description: 'Strategic Partnerships' },
        { icon: '🔐', description: 'Certora Audit' }
      ],
    },
  ];

  return (
    <section id="roadmap" className={styles.roadmap}>
      <h2>Roadmap</h2>
      <div className={styles.timeline}>
        {milestones.map((milestone, index) => (
          <div key={index} className={styles.milestone}>
            <h3>{milestone.title}</h3>
            <ul>
              {milestone.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <span className={styles.icon}>{item.icon}</span>
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
