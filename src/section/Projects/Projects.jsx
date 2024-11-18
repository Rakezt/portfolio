import styles from './ProjectsStyles.module.css';
import lms from '../../assets/easekode.jpg';
import school from '../../assets/school.jpg';
import gadgets from '../../assets/gadgets.jpg';
import social from '../../assets/social.jpg';
import todo from '../../assets/todo.jpg';
import ProjectsCard from '../../common/ProjectsCard';

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectsCard
          src={lms}
          link='https://fe.easekode.com/login'
          h3='Easekode'
          p='A Learning Management System App'
        />
        <ProjectsCard
          src={gadgets}
          link='https://rakeztecommerce.netlify.app/'
          h3='Bang Bang'
          p='A Gadget Store App'
        />
        <ProjectsCard
          src={school}
          link='https://school-student-manager.netlify.app/'
          h3='School File Manager'
          p='A CRUD App to manage teacher and student'
        />
        <ProjectsCard
          src={social}
          link='https://kammanahallipost.netlify.app/'
          h3='Kammanahalli Post'
          p='A Social Media App to connect friends'
        />
        <ProjectsCard
          src={todo}
          link='https://rakezttodoapp.netlify.app/'
          h3='Todo List'
          p='A Todo List App with Authentication that save user to do list'
        />
      </div>
    </section>
  );
};

export default Projects;
