import Link from 'next/link';

const footerLink = 'text-sm text-slate-400 transition-colors hover:text-[#78c8c1]';

const Footer = () => (
  <footer id="contact" className="border-t border-white/10 text-white">
    <div className="container px-6 sm:px-8">
      <div className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:py-16">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#78c8c1]">Let’s connect</p>
          <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Have something<br />in mind? Let’s build it.</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">Open to software engineering opportunities and collaborations across web, backend, and desktop applications.</p>
          <a href="mailto:Duruakuebuka@gmail.com" className="mt-6 inline-flex max-w-full items-center gap-3 rounded-lg border border-[#78c8c1]/30 bg-[#78c8c1]/5 px-4 py-3 text-sm text-[#78c8c1] transition-colors hover:border-[#78c8c1] hover:bg-[#78c8c1]/10 sm:text-base">
            <span className="break-all">Duruakuebuka@gmail.com</span><span aria-hidden="true">↗</span>
          </a>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="text-slate-500">Lagos, Nigeria</span>
            <a href="tel:+2347040755486" className={footerLink}>+234 704 075 5486</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:pt-2">
          <nav aria-label="Footer portfolio navigation" className="flex flex-col items-start gap-3">
            <h3 className="mb-1 text-xs uppercase tracking-[0.15em] text-slate-500">Explore</h3>
            <Link href="/#projects" className={footerLink}>Projects</Link>
            <Link href="/#tech" className={footerLink}>Technologies</Link>
            <Link href="/#about" className={footerLink}>About me</Link>
            <Link href="/#experience" className={footerLink}>Work experience</Link>
            <a href="/documents/Ebuka_Micheal_Duruaku_Resume.pdf" target="_blank" rel="noopener noreferrer" className={footerLink}>View my CV <span aria-hidden="true">↗</span></a>
          </nav>
          <div className="flex flex-col items-start gap-3">
            <h3 className="mb-1 text-xs uppercase tracking-[0.15em] text-slate-500">Elsewhere</h3>
            <a href="https://github.com/D3troit98" target="_blank" rel="noopener noreferrer" className={footerLink}>GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/duruaku-ebuka-6b6540137/" target="_blank" rel="noopener noreferrer" className={footerLink}>LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="https://www.instagram.com/arti.ficesoul/" target="_blank" rel="noopener noreferrer" className={footerLink}>Instagram <span aria-hidden="true">↗</span></a>
            <Link href="/cosmere" className={footerLink}>Cosmere</Link>
            <Link href="/lab" className={footerLink}>Lab</Link>
            <Link href="/secret" className="text-xs text-slate-500 transition-colors hover:text-[#78c8c1]">A little secret</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-200">Ebuka Micheal Duruaku<span className="text-[#78c8c1]">.</span></p>
          <p className="mt-1 text-xs text-slate-500">© {new Date().getFullYear()} · Software Engineer</p>
        </div>
        <Link href="#main-content" className={`${footerLink} inline-flex items-center gap-2 self-start sm:self-auto`}>Back to top <span aria-hidden="true">↑</span></Link>
      </div>
    </div>
  </footer>
);

export default Footer;
