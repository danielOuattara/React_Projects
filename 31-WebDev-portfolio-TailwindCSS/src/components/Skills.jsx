import { SkillsCard, SectionTitle } from "./index";
import { skills } from "../data";

export default function Skills() {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="tech stack " />

      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
}
