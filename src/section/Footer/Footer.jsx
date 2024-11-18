import styles from './FooterStyles.module.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section id='footer' className={styles.container}>
      <h1 className='sectionTitle'> </h1>
      <p>
        &copy; {currentYear} L Rakesh Singh <br /> All right reserved{' '}
      </p>
    </section>
  );
};

export default Footer;
