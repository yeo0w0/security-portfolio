"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Github,
  ShieldCheck,
  Terminal,
  Globe,
  Menu,
  X,
  Layers3,
  Mail,
  Sparkles,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  demoUrl: string;
  category: "web" | "lab";
};

const projects: Project[] = [
  {
    title: "my-app1",
    description: "수업시간에 실습한 프로젝트 입니다.",
    techStack: ["Next.js", "MongoDB", "Tailwind"],
    repoUrl: "https://github.com/yeo0w0/my-app1.git",
    demoUrl: "https://my-app1-chi.vercel.app",
    category: "lab",
  },
  {
    title: "security-portfolio",
    description:
      "학습 과정과 프로젝트를 한곳에 정리하고, 결과물을 꾸준히 업데이트하기 위한 개인 포트폴리오입니다.",
    techStack: ["Next.js", "TypeScript", "CSS"],
    repoUrl: "",
    demoUrl: "",
    category: "web",
  },
];

const filters = [
  { label: "전체", value: "all" },
  { label: "웹 개발", value: "web" },
  { label: "실습", value: "lab" },
] as const;

type ProjectFilter = (typeof filters)[number]["value"];

const categoryNames: Record<Project["category"], string> = {
  web: "WEB DEVELOPMENT",
  lab: "LAB / STUDY",
};

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="nav-wrap">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">
            <ShieldCheck size={19} strokeWidth={2.2} />
          </span>
          <span>
            DEV<span className="brand-dot">.</span>LOG
          </span>
        </a>
        <button
          className="mobile-menu"
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
        >
          <a href="#about" onClick={closeMenu}>
            about
          </a>
          <a href="#stack" onClick={closeMenu}>
            stack
          </a>
          <a href="#projects" onClick={closeMenu}>
            project
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            contact <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> OPEN TO LEARNING & BUILDING
          </div>
          <h1>
            보안과 개발의
            <br />
            <span>경계를 탐구합니다.</span>
          </h1>
          <p className="hero-desc">
            배우고, 직접 만들고, 기록합니다.
            <br className="desktop-break" />
            작은 실습부터 의미 있는 프로젝트까지 성장 과정을 쌓아가는
            공간입니다.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              프로젝트 보기 <ArrowDownRight size={17} />
            </a>
            <a className="button button-ghost" href="#about">
              더 알아보기
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <span className="meta-number">01</span> LEARN
            </span>
            <span>
              <span className="meta-number">02</span> BUILD
            </span>
            <span>
              <span className="meta-number">03</span> SHARE
            </span>
          </div>
        </div>
        <div className="hero-art" aria-label="개발과 보안을 상징하는 그래픽">
          <div className="art-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-window">
            <div className="window-top">
              <span />
              <span />
              <span />
              <small>security-lab.ts</small>
            </div>
            <div className="code-lines">
              <div>
                <span className="line-num">01</span>
                <span className="syntax-purple">const</span>{" "}
                <span className="syntax-blue">mission</span> = {"{"}
              </div>
              <div>
                <span className="line-num">02</span>&nbsp;&nbsp;learn:{" "}
                <span className="syntax-green">&quot;everyday&quot;</span>,
              </div>
              <div>
                <span className="line-num">03</span>&nbsp;&nbsp;build:{" "}
                <span className="syntax-green">&quot;with care&quot;</span>,
              </div>
              <div>
                <span className="line-num">04</span>&nbsp;&nbsp;secure:{" "}
                <span className="syntax-orange">true</span>
              </div>
              <div>
                <span className="line-num">05</span>
                {"}"};
              </div>
              <div className="code-spacer" />
              <div>
                <span className="line-num">06</span>
                <span className="syntax-comment">
                  {"// progress, not perfection"}
                </span>
              </div>
              <div>
                <span className="line-num">07</span>
                <span className="syntax-purple">while</span> (curious) {"{"}
              </div>
              <div>
                <span className="line-num">08</span>&nbsp;&nbsp;keepBuilding();
              </div>
              <div>
                <span className="line-num">09</span>
                {"}"}
              </div>
            </div>
          </div>
          <div className="floating-chip chip-top">
            <ShieldCheck size={16} /> SECURITY FIRST
          </div>
          <div className="floating-chip chip-bottom">
            <Terminal size={16} /> $ keep-learning
          </div>
          <div className="art-caption">FIG. 001 — A WORK IN PROGRESS</div>
        </div>
        <a href="#about" className="scroll-cue">
          <span /> SCROLL TO EXPLORE
        </a>
      </section>

      <section className="intro-section" id="about">
        <div className="section-shell intro-grid">
          <div>
            <p className="section-kicker">01 / ABOUT</p>
            <h2>
              호기심을 실력으로
              <br />
              바꾸는 과정.
            </h2>
          </div>
          <div className="intro-body">
            <p className="intro-lead">
              아직 배우는 중이기에, 직접 해본 것과 배운 것을 정확하게
              기록합니다.
            </p>
            <p>
              정보보호와 소프트웨어 개발을 중심으로 기초를 다지고 있습니다.
              작더라도 동작하는 결과물을 만들고, 시행착오를 정리하며, 다음
              단계로 나아가는 것이 목표입니다.
            </p>
            <div className="principles">
              <div>
                <span className="principle-icon">
                  <Code2 size={18} />
                </span>
                <div>
                  <b>Build in public</b>
                  <small>과정과 결과를 기록하기</small>
                </div>
              </div>
              <div>
                <span className="principle-icon">
                  <ShieldCheck size={18} />
                </span>
                <div>
                  <b>Security mindset</b>
                  <small>처음부터 안전을 고려하기</small>
                </div>
              </div>
              <div>
                <span className="principle-icon">
                  <Sparkles size={18} />
                </span>
                <div>
                  <b>Stay curious</b>
                  <small>꾸준히 배우고 개선하기</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stack-section section-shell" id="stack">
        <div className="section-heading">
          <div>
            <p className="section-kicker">02 / TOOLKIT</p>
            <h2>현재의 기술 스택</h2>
          </div>
          <p>
            기초부터 하나씩 익히며
            <br />
            실습을 통해 이해를 넓히고 있습니다.
          </p>
        </div>
        <div className="stack-grid">
          <article className="stack-card">
            <div className="stack-icon">
              <Terminal size={21} />
            </div>
            <span className="stack-index">01</span>
            <h3>Systems & Network</h3>
            <p>운영체제와 네트워크의 동작 원리를 실습으로 익힙니다.</p>
            <div className="tag-row">
              <span>Linux</span>
              <span>TCP/IP</span>
              <span>CLI</span>
            </div>
          </article>
          <article className="stack-card">
            <div className="stack-icon">
              <Code2 size={21} />
            </div>
            <span className="stack-index">02</span>
            <h3>Programming</h3>
            <p>기초 문법과 자료구조를 이해하고 작은 프로그램을 만듭니다.</p>
            <div className="tag-row">
              <span>C</span>
              <span>Python</span>
              <span>JavaScript</span>
            </div>
          </article>
          <article className="stack-card">
            <div className="stack-icon">
              <Globe size={21} />
            </div>
            <span className="stack-index">03</span>
            <h3>Web Development</h3>
            <p>웹의 구조를 이해하고 반응형 인터페이스를 구현합니다.</p>
            <div className="tag-row">
              <span>HTML/CSS</span>
              <span>React</span>
              <span>Next.js</span>
            </div>
          </article>
          <article className="stack-card">
            <div className="stack-icon">
              <Layers3 size={21} />
            </div>
            <span className="stack-index">04</span>
            <h3>Security</h3>
            <p>보안 기초와 안전한 개발 습관을 학습하고 적용합니다.</p>
            <div className="tag-row">
              <span>Web Security</span>
              <span>Crypto Basics</span>
            </div>
          </article>
        </div>
        <p className="stack-note">
          <span className="note-mark">↳</span> 기술 스택은 학습 현황에 맞춰
          업데이트됩니다. 모든 항목이 숙련 기술을 의미하지는 않습니다.
        </p>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-shell">
          <div className="section-heading project-heading">
            <div>
              <p className="section-kicker">03 / SELECTED WORK</p>
              <h2>
                프로젝트 아카이브<span className="brand-dot">.</span>
              </h2>
            </div>
            <p>
              실습과 탐구의 기록.
              <br />
              완성도보다 배움의 과정을 중요하게 생각합니다.
            </p>
          </div>
          <div className="project-toolbar">
            <span className="project-count">
              PROJECTS <b>{String(visibleProjects.length).padStart(2, "0")}</b>
            </span>
            <div
              className="filter-list"
              role="group"
              aria-label="프로젝트 분류"
            >
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  className={
                    activeFilter === filter.value ? "filter active" : "filter"
                  }
                  type="button"
                  aria-pressed={activeFilter === filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual visual-${project.category}`}>
                  <span className="visual-label">
                    {categoryNames[project.category]}
                  </span>
                  <span className="visual-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="visual-symbol">
                    {project.category === "web" ? (
                      <Globe size={52} strokeWidth={1.15} />
                    ) : (
                      <Terminal size={52} strokeWidth={1.15} />
                    )}
                  </div>
                  <div className="visual-lines" />
                </div>
                <div className="project-info">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <span className="project-type">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-row project-tags">
                    {project.techStack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="link-muted">
                        <Github size={14} /> 링크 등록 예정
                      </span>
                    )}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo <ArrowUpRight size={14} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-panel">
          <div className="contact-glow" />
          <p className="section-kicker">04 / WHAT&apos;S NEXT</p>
          <h2>
            작은 한 걸음이
            <br />
            <span>다음 프로젝트가 됩니다.</span>
          </h2>
          <p className="contact-copy">
            배운 내용을 실제 결과물로 연결하고, 꾸준히 개선해 나가겠습니다.
          </p>
          <a href="mailto:yeo0w0o3010@gmail.com">
            yeo0w0o3010@gmail.com <Mail size={16} />
          </a>
        </div>
      </section>

      <footer className="footer section-shell">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">
            <ShieldCheck size={17} />
          </span>
          <span>
            DEV<span className="brand-dot">.</span>LOG
          </span>
        </a>
        <span>LEARN · BUILD · SHARE</span>
        <span>© {new Date().getFullYear()} Personal Portfolio</span>
      </footer>
    </main>
  );
}
