// FAQ.jsx
import React, { useState } from 'react';
import styles from './FAQ.module.css';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What is Butane Chain?',
      answer:
        'Butane Chain is a blockchain platform designed for novices and experts alike. It provides a wide range of features and tools for projects, from crowdfunding to decentralized marketplaces. The platform uses a proof-of-stake consensus algorithm for energy efficiency and lower hardware requirements.',
    },
    {
      question: 'What is proof-of-stake?',
      answer:
        'Proof-of-stake (PoS) is a consensus algorithm used by some blockchains to validate new transactions and create new blocks. In PoS, validators are chosen to create new blocks and validate transactions based on their stake, or the number of tokens they hold. This approach encourages long-term investment in the network and reduces energy consumption compared to proof-of-work algorithms.',
    },
    {
      question: 'How does staking work on Butane Chain?',
      answer:
        'Staking on Butane Chain involves holding the native $GAS token in your wallet and participating in the network as a validator. Validators are responsible for validating transactions and securing the network. In return, they receive a portion of the transaction fees (15%) as a reward for their work. An audit by CertiK is currently in progress.',
    },
    {
      question: 'What are the benefits of using Butane Chain?',
      answer:
        'Butane Chain offers several advantages, such as energy efficiency, low hardware requirements, and a wide range of features and tools for projects. The platform is designed for both novices and experts, making it accessible to users with varying levels of experience. Additionally, the proof-of-stake consensus algorithm encourages long-term investment and helps secure the network.',
    },
    {
      question: 'How can I become a validator on Butane Chain?',
      answer:
        'To become a validator on Butane Chain, you need to hold a certain amount of $GAS tokens in your wallet. Validators are chosen based on their stake, and they participate in the network by validating transactions and securing the blockchain. As a validator, you will have the opportunity to earn rewards in the form of transaction fees.',
    },
    {
      question: 'How do I get started with Butane Chain?',
      answer:
        'To get started with Butane Chain, you can explore the platform, purchase $GAS tokens, and participate in staking as a validator. Additionally, you can familiarize yourself with the platforms features and tools, such as decentralized marketplaces and crowdfunding. Stay updated with the projects roadmap and follow its social media channels for the latest news and developments.',
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <h2>FAQ</h2>
      <div className={styles.questions}>
        {questions.map((item, index) => (
          <div key={index} className={styles.questionContainer}>
            <button
              className={`${styles.question} ${
                activeIndex === index ? styles.active : ''
              }`}
              onClick={() => handleClick(index)}
            >
              {item.question}
              <span className={styles.icon}>
                {activeIndex === index ? '-' : '+'}
              </span>
            </button >
            <div
                className={`${styles.answer} ${
                    activeIndex === index ? styles.active : ''
                }`}
            >
                {item.answer}
            </div>
            </div>
        ))}
        </div>
    </section>
    );
};

export default FAQ;
