import { skills } from "../data/skills";
import { SectionTitle } from "../components/SectionTitle";
import { SkillCard } from "../components/SkillCard";
export function Skills() {
    return (<section id="skills" className="section section-soft" style={{
        background: "rgba(235, 240, 249, 0.72)",
        borderBlock: "1px solid rgba(195, 198, 230, 0.045)"
    }}>
      <div className="wrap" style={{
        marginInline: "auto"
    }}>
        <SectionTitle index="02" kicker="MY TOOLKIT">
          Tools of the
          <br />
          <span className="gradient-text" style={{
        color: "transparent",
        background: "linear-gradient(100deg, #c1b6ff 2%, #9a8cff 42%, #6bded6 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundImage: "linear-gradient(105deg, #426dd6 0%, #7958d3 46%, #348ec3 82%, #426dd6 100%)",
        backgroundSize: "220% auto",
        animation: "gradientFlow 9s ease-in-out infinite"
    }}>trade.</span>
        </SectionTitle>
        <div className="skills-grid" style={{
        display: "grid",
        gap: "13px"
    }}>
          {skills.map((group) => (<SkillCard key={group.group} group={group.group} items={group.items}/>))}
        </div>
      </div>
    </section>);
}

