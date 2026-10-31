import Link from 'next/link';
import RealmExperience from './RealmExperience';
import LayerExplorer from './LayerExplorer';
import LayerNav from './LayerNav';
import SystemJourney from './SystemJourney';
import { MotionRoot, Reveal } from './Motion';
import SelectedWork from './SelectedWork';
import Toolkit from './Toolkit';

const external = { target: '_blank', rel: 'noopener noreferrer' };
const cv = '/documents/Ebuka_Micheal_Duruaku_Resume.pdf';

export default function Portfolio() {
  return (
    <MotionRoot>
      <RealmExperience>
      <div className="folio min-h-[100dvh] bg-[#f6f5ef] text-[#242b26]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-[#242b26] focus:p-4 focus:text-white"
        >
          Skip to content
        </a>
        <div className="mx-auto max-w-[1320px] px-5 sm:px-10 lg:px-16">
          <header className="folio-header flex flex-wrap items-center justify-between gap-5 border-b border-[#d7d6cf] py-6 md:py-8">
            <Link
              href="/"
              aria-label="Ebuka Duruaku home"
              className="flex items-center gap-3 text-sm font-semibold tracking-tight"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-[#242b26] font-mono text-xs text-[#f6f5ef]">
                ed.
              </span>
              Ebuka Duruaku
            </Link>
            <nav
              aria-label="Main navigation"
              className="flex items-center gap-5 text-xs sm:gap-8 sm:text-sm"
            >
              <a href="#projects" className="folio-text-link">
                Work
              </a>
              <a href="#about" className="folio-text-link">
                About
              </a>
              <a href="#contact" className="folio-text-link">
                Let’s talk <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </header>
          <main id="main-content">
            <section className="folio-hero grid gap-12 py-16 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-12 md:py-20 lg:gap-20">
              <div>
                <p className="folio-eyebrow flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#a65332]" />
                  Software engineer / Lagos, Nigeria
                </p>
                <h1 className="mt-7 text-[clamp(3.3rem,6.2vw,5.7rem)] leading-[1.07] tracking-[-0.055em]">
                  From the
                  <br />
                  interface to
                  <br />
                  the{' '}
                  <span className="font-serif font-normal italic text-[#a65332]">
                    internals.
                  </span>
                </h1>
                <p className="mt-7 max-w-md text-base leading-8 text-[#62675f]">
                  I’m Ebuka Duruaku, a software engineer who likes to understand
                  the whole thing. Thoughtful interfaces, the logic underneath,
                  and the systems beyond the browser.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <a
                    href="#projects"
                    className="folio-button inline-flex items-center gap-8 rounded-full bg-[#242b26] px-6 py-3.5 text-sm text-[#f6f5ef]"
                  >
                    Explore my work <span aria-hidden="true">↘</span>
                  </a>
                  <a
                    href={cv}
                    {...external}
                    className="folio-text-link text-sm"
                  >
                    View résumé <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
              <LayerExplorer />
            </section>
            <LayerNav />
            <Reveal>
              <SelectedWork />
            </Reveal>
            <SystemJourney />
            <Reveal>
              <section
                id="about"
                className="grid scroll-mt-8 gap-10 border-t border-[#d7d6cf] py-16 md:grid-cols-[1.2fr_0.8fr] md:gap-24 md:py-24"
              >
                <div>
                  <p className="folio-eyebrow">
                    The person / Beyond the layers
                  </p>
                  <h2 className="mt-4 text-3xl tracking-tight md:text-4xl">
                    Still curious.
                    <br />
                    Still building.
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-[#62675f]">
                    I first got into programming through C++ around 2013, and
                    loved it. In 2018, I began learning HTML and CSS, drawn
                    to the visual side of programming and the possibilities of
                    building graphical interfaces for the web. That path has since taken me across web applications,
                    desktop software, cloud integrations, and backend development.
                  </p>
                  <p className="mt-4 max-w-xl text-base leading-8 text-[#62675f]">
                    I enjoy understanding how the pieces fit together: what a
                    person sees, what an application does, and how data moves
                    between systems. My current focus is going deeper with Rust
                    and backend engineering.
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#62675f]">
                    There’s a playful side to this site, too: a creative coding
                    lab, a corner for the Cosmere, and an illustrated character
                    gallery.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-6 text-sm">
                    <Link href="/lab" className="folio-text-link">
                      Visit my creative coding lab{' '}
                      <span aria-hidden="true">↗</span>
                    </Link>
                    <Link href="/cosmere" className="folio-text-link">
                      Beyond the code <span aria-hidden="true">↗</span>
                    </Link>
                    <Link href="/characters" className="folio-text-link">
                      The character gallery <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
                <aside className="self-start border-l-2 border-[#a65332] bg-[#eeeee5] p-7 md:mt-10">
                  <p className="folio-eyebrow">Next chapter / Learning plans</p>
                  <h3 className="mt-4 text-xl tracking-tight">
                    Build it. Deploy it.
                    <br />
                    Understand how it runs.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#62675f]">
                    I’m planning a self-hosted backend project to deepen my
                    understanding of Linux, deployment, databases, monitoring,
                    and recovery.
                  </p>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-[#a65332]">
                    Planned exploration · Not yet launched
                  </p>
                </aside>
              </section>
            </Reveal>
            <Reveal>
              <Toolkit />
            </Reveal>
          </main>
          <footer
            id="contact"
            className="scroll-mt-8 border-t border-[#d7d6cf] pt-16 md:pt-24"
          >
            <p className="folio-eyebrow">
              End of the tour / Start a conversation
            </p>
            <div className="mt-5 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <h2 className="text-4xl tracking-[-0.04em] md:text-6xl">
                  Let’s build something
                  <br />
                  <span className="font-serif font-normal italic text-[#a65332]">
                    worth using.
                  </span>
                </h2>
                <a
                  href="mailto:Duruakuebuka@gmail.com"
                  className="folio-text-link mt-7 inline-block break-all text-base sm:text-xl"
                >
                  Duruakuebuka@gmail.com <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="md:pl-10">
                <p className="max-w-sm text-sm leading-7 text-[#62675f]">
                  Have a software engineering opportunity or a project in mind?
                  I’d love to hear about it.
                </p>
                <div className="mt-6 flex gap-6 text-sm">
                  <a
                    href="https://github.com/D3troit98"
                    {...external}
                    className="folio-text-link"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/duruaku-ebuka-6b6540137/"
                    {...external}
                    className="folio-text-link"
                  >
                    LinkedIn ↗
                  </a>
                  <a href={cv} {...external} className="folio-text-link">
                    Résumé ↗
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-[#d7d6cf] py-6 font-mono text-[10px] uppercase tracking-wider text-[#62675f]">
              <p>© {new Date().getFullYear()} Ebuka Micheal Duruaku</p>
              <a href="#main-content" className="folio-text-link">
                Made with curiosity. Back to top ↑
              </a>
            </div>
          </footer>
        </div>
      </div>
      </RealmExperience>
    </MotionRoot>
  );
}
