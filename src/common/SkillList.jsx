const SkillList = ({ src, skill }) => {
  return (
    <span>
      <img src={src} alt={`${src} logo`} />
      <p>{skill}</p>
    </span>
  );
};

export default SkillList;
