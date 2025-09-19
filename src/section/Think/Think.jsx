import styles from './ThinkStyles.module.css';

const HowIThink = () => {
  return (
    <section id='howithink' className={styles.container}>
      <h1 className='sectionTitle'>How I Think</h1>
      <ul className={styles.list}>
        <li>
          <p>
            I care about building <strong>end-to-end solutions</strong> where
            frontend and backend work seamlessly, ensuring a clean UI and a
            scalable backend.
          </p>
        </li>
        <li>
          <p>
            I usually build with the{' '}
            <strong>
              MERN stack (React, Redux, Node.js, Express, MongoDB)
            </strong>{' '}
            because it allows rapid prototyping, real-time features with
            Socket.IO, and flexibility to scale for production.
          </p>
        </li>
        <li>
          <p>
            I avoid <strong>bloated code and inconsistent practices</strong>,
            and I value <strong>clarity, speed, and maintainable code</strong>{' '}
            that teams can easily extend.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default HowIThink;
