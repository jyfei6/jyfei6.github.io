import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Theme = "light" | "dark";

const researchProjects = [
  {
    meta: "Neural generative modeling · 2026",
    title: "Image2MUA",
    description:
      "An image-conditioned generative model for multi-unit activity in visual cortex, using visual-expert routing and rectified flow matching.",
    result: "Achieved state-of-the-art performance on the macaque TVSD dataset.",
    status: "Manuscript under review",
  },
  {
    meta: "Computational immunology · 2023–2026",
    title: "Early prediction of type 1 diabetes",
    description:
      "A cross-batch transcriptomic pipeline using PLS-DA feature selection, support vector machines, and 1,000 bootstrap resamples for early identification of type 1 diabetes progressors.",
    result:
      "Achieved 89% prediction accuracy; the predictions were used in downstream analyses of early pancreatic immune dysregulation.",
    status: "Preprint · JCI minor revision",
    link: "https://doi.org/10.64898/2026.03.06.710219",
  },
  {
    meta: "Medical computer vision · 2024",
    title: "BWS-Net",
    description:
      "A CNN–Transformer architecture with attention and adaptive skip connections for anterior bladder wall segmentation in noisy ultrasound images.",
    result:
      "Achieved state-of-the-art performance for anterior bladder wall segmentation.",
    status: "IEEE JBHI · 2026",
    link: "https://doi.org/10.1109/JBHI.2026.3675965",
  },
  {
    meta: "AI for science · 2025",
    title: "Property-guided catalyst generation",
    description:
      "A GNN-based diffusion model fine-tuned with LoRA and GRPO for target-specific catalyst generation.",
    result:
      "Implemented property-conditioned fine-tuning by injecting target physical and chemical properties into the generation process.",
    status: "Undergraduate thesis",
  },
  {
    meta: "Computational genomics · 2022–2023",
    title: "Medulloblastoma multi-omics analysis",
    description:
      "Analysis of single-cell, bulk RNA-seq, and spatial transcriptomic data from medulloblastoma cohorts for biomarker and survival studies.",
    result:
      "Contributed to studies of tumor heterogeneity, cellular plasticity, and the immune microenvironment.",
    status: "Published research",
  },
];

const researchExperience = [
  {
    dates: "2026–present",
    organization: "SiClink",
    role: "Algorithm Engineer · Shanghai, China",
    description:
      "A brain–computer interface startup where I develop image-conditioned generative models of multi-unit activity using visual-expert routing and rectified flow matching.",
  },
  {
    dates: "2023–2026",
    organization: "University of Michigan",
    role: "Research Assistant · Ann Arbor, Michigan, United States",
    description:
      "Developed machine-learning and transcriptomic pipelines for early prediction of type 1 diabetes and downstream analysis of immune dysregulation.",
  },
  {
    dates: "Summer 2024",
    organization: "Mayo Clinic",
    role: "nuSURF Research Intern · Rochester, Minnesota, United States",
    description:
      "Developed and evaluated deep learning models for anterior bladder wall segmentation in noisy ultrasound images.",
  },
  {
    dates: "2022–2023",
    organization: "Beijing Genomics Institute (BGI)",
    role: "Research Assistant · Beijing, China",
    description:
      "Analyzed single-cell, bulk RNA-seq, and spatial transcriptomic data from medulloblastoma cohorts for biomarker and survival studies.",
  },
];

const publications = [
  {
    year: "2026",
    venue: "Manuscript",
    title:
      "Image2MUA: Image-Conditioned Generative Modeling of MUA with Visual-Expert Routing",
    authors: "Yifei Jiang, M. Xu, S. Ma, and F. He",
    note: "Under review",
  },
  {
    year: "2026",
    venue: "IEEE JBHI",
    title:
      "BWS-Net: An Optimal Deep Learning Architecture for the Anterior Bladder Wall Segmentation Using Ultrasound Imaging",
    authors: "M. Saini, Yifei Jiang, et al.",
    href: "https://doi.org/10.1109/JBHI.2026.3675965",
  },
  {
    year: "2026",
    venue: "bioRxiv",
    title:
      "Synthetic Immunological Niche Reveals Early Immune Dysregulation and Stratifies Therapeutic Response in Type 1 Diabetes",
    authors: "J. Roy, Yifei Jiang, et al.",
    note: "Preprint; JCI minor revision",
    href: "https://doi.org/10.64898/2026.03.06.710219",
  },
  {
    year: "2025",
    venue: "Neuro-Oncology",
    title:
      "Unveiling Spatial Heterogeneity in Medulloblastoma: A Multi-Omics Analysis of Cellular State and Geographical Organization",
    authors: "J. Li, H. Liu, Z. Wang, … Yifei Jiang, et al.",
    href: "https://doi.org/10.1093/neuonc/noaf020",
  },
  {
    year: "2025",
    venue: "Cell Reports Medicine",
    title:
      "High Cellular Plasticity State of Medulloblastoma Local Recurrence and Distant Dissemination",
    authors: "H. Liu, J. Zhang, Z. Wang, … Yifei Jiang, et al.",
    href: "https://doi.org/10.1016/j.xcrm.2024.101914",
  },
  {
    year: "2025",
    venue: "Animal Models and Experimental Medicine",
    title:
      "Single-Cell Transcriptomic Sequencing Identifies Subcutaneous Patient-Derived Xenograft Recapitulated Medulloblastoma",
    authors: "J. Gao, Y. Zhao, Z. Wang, … Yifei Jiang, et al.",
    href: "https://doi.org/10.1002/ame2.12399",
  },
  {
    year: "2024",
    venue: "Research Square",
    title:
      "An Immune Microenvironment-Associated Gene Signature Predicts Outcomes and Therapeutic Response in Pediatric Medulloblastoma",
    authors: "D. Han, Z. Jia, Z. Wang, … Yifei Jiang, et al.",
    note: "Preprint",
    href: "https://doi.org/10.21203/rs.3.rs-2723037/v3",
  },
];

const presentations = [
  {
    year: "2026",
    conference: "BMES Annual Meeting",
    format: "Oral presentation · Orlando, Florida, United States",
    title:
      "Immune Biomarkers of Islet Transplant Rejection Revealed by Synthetic Immunological Niche",
  },
  {
    year: "2026",
    conference: "BMES Annual Meeting",
    format: "Oral presentation · Orlando, Florida, United States",
    title:
      "Synthetic Immunological Niche Reveals Early Immune Dysregulation and Stratifies Therapeutic Response in Type 1 Diabetes",
  },
  {
    year: "2025",
    conference: "TERMIS-Americas Annual Conference and Exhibition",
    format: "Oral presentation · Detroit, Michigan, United States",
    title:
      "Machine Learning-Based Early Prediction of Type 1 Diabetes from Immunological Niche Gene Signatures",
  },
  {
    year: "2024",
    conference: "KUH Summer Undergraduate Research Symposium",
    format:
      "Poster presentation · Charlottesville, Virginia, United States",
    title:
      "Deep Learning for Anterior Bladder Wall Segmentation in Ultrasound Images",
  },
];

const teachingExperience = [
  {
    dates: "2022–2023",
    organization: "Shanghai Jiao Tong University",
    role: "Teaching Assistant · General Chemistry",
    description:
      "Led discussion and problem-solving sessions, designed weekly assignments, and assisted with assessment for a course of approximately 200 students.",
  },
];

function SectionHeader({
  title,
  note,
}: {
  title: string;
  note?: string;
}) {
  return (
    <header className="section-header">
      <h2>{title}</h2>
      {note ? <p>{note}</p> : null}
    </header>
  );
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme;
  onToggle: () => void;
}) {
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={"Switch to " + nextTheme + " theme"}
      aria-pressed={theme === "dark"}
      onClick={onToggle}
    >
      {nextTheme === "dark" ? "Dark" : "Light"}
    </button>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "dark" ? "#171a18" : "#fafaf8",
    );
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // The site remains usable when browser storage is unavailable.
    }
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="site-shell">
        <aside className="profile-rail" aria-label="Yifei Jiang profile">
          <div className="portrait-wrap">
            <img
              className="portrait"
              src="./yifei-jiang.png"
              alt="Portrait of Yifei Jiang"
            />
          </div>

          <div className="profile-copy">
            <p className="eyebrow">Algorithm Researcher</p>
            <h1>
              <a href="#top">Yifei Jiang</a>
            </h1>
            <p className="location">Shanghai, China</p>
            <p className="availability">
              Prospective PhD applicant in computer science
            </p>
            <a className="email-link" href="mailto:jyfei@umich.edu">
              jyfei@umich.edu
            </a>
          </div>
        </aside>

        <main id="main-content">
          <div id="top" />

          <nav className="top-nav" aria-label="Primary navigation">
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#presentations">Presentations</a>
            <a href="#teaching">Teaching</a>
            <a href="#contact">Contact</a>
            <a href="./Yifei_CV.pdf" target="_blank" rel="noreferrer">
              CV ↗
            </a>
            <ThemeToggle
              theme={theme}
              onToggle={() =>
                setTheme((current) => (current === "light" ? "dark" : "light"))
              }
            />
          </nav>

          <section className="hero" aria-label="About Yifei Jiang">
            <div className="intro-copy">
              <p>
                I am an algorithm engineer and researcher with a double major
                in Electrical and Computer Engineering and Biomedical
                Engineering. I hold a Bachelor of Engineering from Shanghai
                Jiao Tong University and a Bachelor of Science in Engineering
                from the University of Michigan.
              </p>
              <p>
                My work focuses on generative models, deep learning, and machine
                learning across a range of scientific domains. I am seeking
                opportunities to pursue a PhD in computer science.
              </p>
            </div>
            <p className="research-interests">
              <strong>Research interests:</strong> generative modeling, deep
              learning, neural computation, and machine learning for science.
            </p>
          </section>

          <section className="content-section" id="education">
            <SectionHeader title="Education" />

            <div className="education-list">
              <article className="education-row">
                <p className="education-date">2023–2026</p>
                <div>
                  <h3>University of Michigan</h3>
                  <p>
                    Bachelor of Science in Engineering in Biomedical
                    Engineering
                  </p>
                  <p className="education-awards">
                    James B. Angell Scholar, 2025 · University Honors,
                    2023–2025 · Dean’s List, 2023–2024
                  </p>
                </div>
                <p className="education-detail">
                  GPA 3.84 / 4.0
                  <br />
                  Ann Arbor, Michigan, United States
                </p>
              </article>
              <article className="education-row">
                <p className="education-date">2021–2026</p>
                <div>
                  <h3>Shanghai Jiao Tong University</h3>
                  <p>
                    Bachelor of Engineering in Electrical and Computer
                    Engineering
                  </p>
                </div>
                <p className="education-detail">
                  GPA 3.65 / 4.0 · GPA Rank 56 / 230
                  <br />
                  Shanghai, China
                </p>
              </article>
              <article className="education-row">
                <p className="education-date">2015–2021</p>
                <div>
                  <h3>
                    The High School Affiliated to Renmin University of China
                  </h3>
                  <p>High School · 2018–2021</p>
                  <p>Middle School · 2015–2018</p>
                </div>
                <p className="education-detail">Beijing, China</p>
              </article>
            </div>
          </section>

          <section className="content-section" id="experience">
            <SectionHeader
              title="Research experience"
              note="Research and engineering appointments, in reverse chronological order."
            />

            <div className="experience-list">
              {researchExperience.map((item) => (
                <article
                  className="experience-row"
                  key={item.organization + item.dates}
                >
                  <p className="experience-date">{item.dates}</p>
                  <div>
                    <h3>{item.organization}</h3>
                    <p className="experience-role">{item.role}</p>
                  </div>
                  <p className="experience-description">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" id="projects">
            <SectionHeader
              title="Selected research projects"
              note="Representative projects in neural modeling, computational biology, medical imaging, and machine learning for science."
            />

            <div className="research-list">
              {researchProjects.map((project) => (
                <article className="research-item" key={project.title}>
                  <div className="research-meta">
                    <span>{project.meta}</span>
                    <span>{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.result ? (
                    <p className="research-result">{project.result}</p>
                  ) : null}
                  {project.link ? (
                    <a
                      className="text-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Paper <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" id="publications">
            <SectionHeader
              title="Publications"
              note="Peer-reviewed articles, preprints, and manuscripts."
            />

            <div className="publication-list">
              {publications.map((publication) => {
                const content = (
                  <>
                    <div className="publication-meta">
                      <span>{publication.year}</span>
                      <span>{publication.venue}</span>
                    </div>
                    <div className="publication-copy">
                      <h3>{publication.title}</h3>
                      <p>{publication.authors}</p>
                      {publication.note ? <small>{publication.note}</small> : null}
                    </div>
                    <span className="publication-link">
                      {publication.href ? "DOI ↗" : "—"}
                    </span>
                  </>
                );

                return publication.href ? (
                  <a
                    className="publication"
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer"
                    key={publication.title}
                  >
                    {content}
                  </a>
                ) : (
                  <article className="publication" key={publication.title}>
                    {content}
                  </article>
                );
              })}
            </div>
          </section>

          <section className="content-section" id="presentations">
            <SectionHeader
              title="Conference Presentations"
              note="Oral and poster presentations at scientific meetings."
            />

            <div className="presentation-list">
              {presentations.map((presentation) => (
                <article
                  className="presentation-row"
                  key={
                    presentation.conference +
                    presentation.year +
                    presentation.title
                  }
                >
                  <p className="presentation-year">{presentation.year}</p>
                  <div className="presentation-copy">
                    <h3 className="presentation-title">
                      {presentation.title}
                    </h3>
                    <p className="presentation-details">
                      <span>{presentation.conference}</span>
                      <span>{presentation.format}</span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section" id="teaching">
            <SectionHeader title="Teaching experience" />

            <div className="timeline">
              {teachingExperience.map((item) => (
                <article
                  className="timeline-row"
                  key={item.organization + item.dates}
                >
                  <p className="timeline-date">{item.dates}</p>
                  <div>
                    <h3>{item.organization}</h3>
                    <p className="timeline-role">{item.role}</p>
                  </div>
                  <p className="timeline-description">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section contact-section" id="contact">
            <SectionHeader title="Contact" />
            <div className="contact-row">
              <p>
                I am seeking PhD opportunities in computer science and welcome
                correspondence about generative modeling, neural computation,
                and machine learning for science.
              </p>
              <a className="text-link" href="mailto:jyfei@umich.edu">
                Email <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>

          <footer>
            <span>© 2026 Yifei Jiang</span>
            <span>Updated August 2026</span>
            <a href="#top">Back to top</a>
          </footer>
        </main>
      </div>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
