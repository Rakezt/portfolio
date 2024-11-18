import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedLight from '../../assets/linkedin-light.svg';
import linkedDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedLight : linkedDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile Picture' />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color Mode Icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          L Rakesh
          <br /> Singh
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href='https://twitter.com/LRakeshSingh' target='_blank'>
            <img src={twitterIcon} alt='Twitter Icon' />
          </a>
          <a href='https://github.com/Rakezt' target='_blank'>
            <img src={githubIcon} alt='Github Icon' />
          </a>
          <a href='https://www.linkedin.com/in/lrakeshsingh/' target='_blank'>
            <img src={linkedinIcon} alt='Linkedin Icon' />
          </a>
        </span>
        <p className={styles.description}>
          Transforming minimal idea into seamless user experience
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
