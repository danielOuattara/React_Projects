import useFetchProjects from "../useFetchProjects";

export default function Project() {
  const { isLoading, projects } = useFetchProjects();

  console.log(projects);

  if (isLoading) {
    return (
      <section className="projects">
        <p className="loading">...loading </p>;
      </section>
    );
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.items.map((item) => (
          <a
            href={item.fields.url}
            className="project"
            key={item.sys.id}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="img"
              src={item.fields.image.fields.file.url}
              alt={item.fields.title}
            />
            <h5 className="title">{item.fields.title}</h5>
          </a>
        ))}
      </div>
    </section>
  );
}
