import styles from './LetsTalkStyles.module.css';

const LetsTalk = () => {
  return (
    <section id='letstalk' className={styles.container}>
      <h1 className='sectionTitle'>Let’s Talk</h1>
      <p className={styles.text}>
        If my work caught your attention or you’re looking for a{' '}
        <strong>MERN Full-Stack Developer</strong> who can build scalable apps
        with clean UI and strong backend systems, I’d love to connect. Whether
        you’re hiring, curious about my projects, or just want to chat tech,
        feel free to reach out.
      </p>
      <div className={styles.links}>
        <a href='mailto:rakezt.k@gmail.com'>📧 Email</a>
        <a
          href='https://www.linkedin.com/in/lrakeshsingh/'
          target='_blank'
          rel='noopener noreferrer'
        >
          💼 LinkedIn
        </a>
        <a
          href='https://github.com/Rakezt'
          target='_blank'
          rel='noopener noreferrer'
        >
          💻 GitHub
        </a>
      </div>
    </section>
  );
};

export default LetsTalk;
