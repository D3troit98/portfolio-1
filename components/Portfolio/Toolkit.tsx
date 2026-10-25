const groups = [
  { title: 'Languages', tools: ['C', 'C++', 'BASIC', 'Python', 'JavaScript', 'TypeScript', 'Go', 'Rust', 'Java', 'C#'] },
  { title: 'Interfaces & applications', tools: ['HTML', 'CSS', 'React', 'Next.js', 'Nuxt', 'React Native', 'Expo', 'Qt / QML', 'Tailwind CSS', 'Sass', 'shadcn/ui', 'Framer Motion'] },
  { title: 'Backend & data', tools: ['Django', 'Node.js', 'Express', 'Gin', 'PostgreSQL', 'SQL', 'MongoDB', 'sqlx', 'sqlc', 'GraphQL', 'HyGraph', 'Sanity'] },
  { title: 'Tools & connected systems', tools: ['Git', 'Vite', 'Webpack', 'ESLint', 'OpenCV', 'AWS IoT Core', 'Google Cloud', 'OAuth / PKCE'] },
];

export default function Toolkit() {
  return (
    <section id="toolkit" aria-labelledby="toolkit-heading" className="border-t border-[#d7d6cf] py-16 md:py-20">
      <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:gap-16">
        <div>
          <p className="folio-eyebrow">Collected along the way / Languages & tools</p>
          <h2 id="toolkit-heading" className="mt-4 text-3xl tracking-tight md:text-4xl">
            A growing<br />
            <span className="font-serif font-normal italic text-[#a65332]">working vocabulary.</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#62675f]">
            From my first C++ programs to the systems I build today, these are
            languages, frameworks, and tools I’ve worked with or explored.
            Some are everyday companions; others belong to earlier experiments.
          </p>
        </div>
        <div className="divide-y divide-[#d7d6cf]">
          {groups.map((group, index) => (
            <div key={group.title} className="py-5 first:pt-0 last:pb-0">
              <h3 className="mb-3 flex items-center gap-3 text-xs font-medium">
                <span aria-hidden="true" className="font-mono text-[10px] text-[#a65332]">0{index + 1}</span>
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label={group.title}>
                {group.tools.map(tool => (
                  <li key={tool} className="text-sm leading-7 text-[#62675f]">{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
