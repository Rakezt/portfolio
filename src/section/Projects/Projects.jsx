import styles from './ProjectsStyles.module.css';

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.featured}>
          <div className={styles.featureCard}>
            <h3>Lets-Track-Expense-AI</h3>
            <p className={styles.meta}>
              Next.js • Node.js • Socket.IO • MongoDB • AI summaries • 3D data
              viz
            </p>
            <p className={styles.desc}>
              Full-stack expense manager with AI-driven summarization and
              interactive 3D visualisations for quick money insights.
            </p>
            <a
              href='https://lets-track-expenses-ai.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>

          <div className={styles.featureCard}>
            <h3>Rakezt-Bot</h3>
            <p className={styles.meta}>
              React • JWT • Gemini/OpenAI integration • Real-time chat
            </p>
            <p className={styles.desc}>
              AI chat assistant with persistent user history and markdown/code
              rendering — used for quick prototype testing and demos.
            </p>
            <a
              href='https://rakezt-chatbot.netlify.app/login'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className={styles.featured}>
          <div className={styles.featureCard}>
            <h3>Live Poller</h3>
            <p className={styles.meta}>React • WebSockets • Node.js</p>
            <p className={styles.desc}>
              Real-time polling app where users can create or join polls, vote,
              and see live chart updates instantly.
            </p>
            <a
              href='https://live-poller.netlify.app'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
          <div className={styles.featureCard}>
            <h3>Bang Bang</h3>
            <p className={styles.meta}>React • Redux • E-Commerce</p>
            <p className={styles.desc}>
              A gadget store web app with product listings, cart functionality,
              and responsive design for a seamless shopping experience.
            </p>
            <a
              href='https://rakeztecommerce.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
