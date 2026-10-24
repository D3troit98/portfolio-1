import { Reveal } from './Motion';

const chapters = [
  {
    id: 'application',
    number: '02',
    name: 'Application',
    title: 'What happens after the click.',
    intro:
      'The interface is the beginning. Behind it are requests, rules, and the everyday work of keeping an application useful.',
    detail:
      'At Conalle, I also worked on application stability and page functionality with Nuxt and Rust.',
    extra:
      'At D’Accubin, I also worked on a cross-platform authentication SDK for a client, integrating OAuth and PKCE across web, React Native, and Expo applications.',
    company: 'D’Accubin',
    role: 'Full Stack Developer',
    period: 'Jan 2024 – present',
    contribution:
      'Worked with Rust alongside the web stack, refactored legacy code, and improved API handling. On the frontend, I implemented React code-splitting and lazy loading.',
    tools: ['Rust', 'Go', 'Node.js', 'React', 'MongoDB'],
    diagram: ['User action', 'Application logic', 'API response'],
    projects: [],
  },
  {
    id: 'data',
    number: '03',
    name: 'Data',
    title: 'Give the application a memory.',
    intro:
      'My database experience spans Django and PostgreSQL backend applications, plus database integration and retrieval in desktop software.',
    detail: '',
    extra:
      'At BriskBlender, I also integrated databases and worked on improving data retrieval in desktop applications.',
    company: 'Sagebyte',
    role: 'Full Stack Developer',
    period: 'Jan – Mar 2023',
    contribution:
      'Developed backend applications with Django and PostgreSQL, collaborated with the team, and debugged code through quality review.',
    tools: ['Django', 'PostgreSQL', 'Python'],
    diagram: ['Backend', 'Query', 'PostgreSQL'],
    projects: [
      {
        title: 'Go feed API',
        type: 'Backend project / Public source',
        description:
          'A Go backend with user, feed, and feed-follow handlers. The repository includes PostgreSQL schema migrations, user-scoped feed-follow queries, and sqlc-generated database access code.',
        tools: 'Go / PostgreSQL / Chi / sqlc',
        links: [
          {
            label: 'Explore source',
            href: 'https://github.com/D3troit98/go-rrsagg',
          },
          {
            label: 'Read the SQL',
            href: 'https://github.com/D3troit98/go-rrsagg/tree/master/sql',
          },
        ],
      },
    ],
  },
  {
    id: 'connected',
    number: '04',
    name: 'Desktop & connected systems',
    title: 'The browser isn’t the boundary.',
    intro:
      'My desktop work includes multithreaded C++ applications, database integration, and connections to AWS IoT Core. Personal Qt projects give me another place to explore.',
    detail: '',
    extra:
      'Roshar brings two interests together: building desktop applications and exploring the worlds of the Cosmere.',
    company: 'BriskBlender',
    role: 'Qt Software Developer · Part-time',
    period: 'Jul 2022 – present',
    contribution:
      'Built multi-core, multithreaded C++ applications, improved database retrieval, and integrated AWS IoT Core for real-time tracking and analysis.',
    tools: ['C++', 'Qt / QML', 'SQL', 'AWS IoT Core'],
    diagram: ['Qt application', 'Worker threads', 'AWS IoT Core'],
    projects: [
      {
        title: 'ImageEditor',
        type: 'Desktop project / Public source',
        description:
          'A Qt desktop image editor with file opening and saving, zoom controls, and an OpenCV blur operation wired into the interface.',
        tools: 'C++ / Qt / OpenCV',
        links: [
          {
            label: 'Explore source',
            href: 'https://github.com/D3troit98/ImageEditor',
          },
        ],
      },
      {
        title: 'Roshar',
        type: 'Personal project / Public source',
        description:
          'A C++ and Qt application for quotes from The Stormlight Archive, with timed updates, system tray integration, and display settings. A connection between my software work and my interest in the Cosmere.',
        tools: 'C++ / Qt',
        links: [
          {
            label: 'Explore source',
            href: 'https://github.com/D3troit98/roshar',
          },
        ],
      },
    ],
  },
];

export default function SystemJourney() {
  return (
    <div id="experience">
      {chapters.map((chapter) => (
        <section
          key={chapter.id}
          id={chapter.id}
          className="journey-section relative scroll-mt-24 border-t border-[#c9c9bf] py-20 md:py-28"
        >
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[.9fr_1.1fr] md:gap-20">
              <div>
                <p className="folio-eyebrow">
                  Layer {chapter.number} / {chapter.name}
                </p>
                <h2 className="mt-5 max-w-md text-4xl leading-[1.1] tracking-[-.045em] md:text-5xl">
                  {chapter.title}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-[#62675f]">
                  {chapter.intro}
                </p>
                {chapter.detail && (
                  <p className="mt-5 max-w-md text-sm leading-7 text-[#62675f]">
                    {chapter.detail}
                  </p>
                )}
                <div className="mt-8 border-l-2 border-[#a65332] pl-5">
                  <p className="text-sm leading-7 text-[#62675f]">
                    {chapter.extra}
                  </p>
                </div>
              </div>
              <div>
                <div className="system-flow relative mb-7 overflow-hidden rounded-md border border-[#455249] bg-[#252e29] px-5 py-8 text-[#f6f5ef] sm:px-8">
                  <p className="mb-8 font-mono text-[9px] uppercase tracking-widest text-[#c0c7c0]">
                    Conceptual view / {chapter.name}
                  </p>
                  <div className="grid grid-cols-[1fr_16px_1fr_16px_1fr] items-center gap-1 text-center">
                    {chapter.diagram.map((node, index) => (
                      <div key={node} className="contents">
                        {index > 0 && (
                          <span aria-hidden="true" className="text-[#d9a27d]">
                            →
                          </span>
                        )}
                        <div
                          className={`rounded border px-1 py-5 font-mono text-[9px] sm:px-3 sm:text-[11px] ${index === 1 ? 'border-[#d9a27d] bg-[#a65332]/20 text-[#f1c7a6]' : 'border-[#6a776b]'}`}
                        >
                          {node}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div aria-hidden="true" className="mt-8 h-px bg-white/15">
                    <span className="flow-packet block h-px w-12 bg-[#d9a27d]" />
                  </div>
                  <p className="mt-5 font-mono text-[9px] leading-6 text-[#c0c7c0]">
                    {chapter.tools.join(' / ')}
                  </p>
                </div>
                <article className="border-y border-[#c9c9bf] py-7">
                  <p className="folio-eyebrow">
                    Professional work / {chapter.company}
                  </p>
                  <h3 className="mt-4 text-2xl tracking-tight">
                    {chapter.role}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-[#62675f]">
                    {chapter.period}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-[#62675f]">
                    {chapter.contribution}
                  </p>
                  <ul
                    aria-label={`${chapter.company} technologies`}
                    className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] text-[#62675f]"
                  >
                    {chapter.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </article>
                {chapter.projects.length > 0 && (
                  <div className="mt-9">
                    <p className="folio-eyebrow">
                      A closer look / Project source
                    </p>
                    <div className="mt-2 divide-y divide-[#c9c9bf]">
                      {chapter.projects.map((project) => (
                        <article key={project.title} className="py-6">
                          <p className="font-mono text-[9px] uppercase tracking-wider text-[#62675f]">
                            {project.type}
                          </p>
                          <h3 className="mt-3 text-xl tracking-tight">
                            {project.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-[#62675f]">
                            {project.description}
                          </p>
                          <p className="mt-4 font-mono text-[10px] text-[#62675f]">
                            {project.tools}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-6 text-sm">
                            {project.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="folio-text-link"
                              >
                                {link.label} <span aria-hidden="true">↗</span>
                              </a>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </section>
      ))}
    </div>
  );
}
