'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, type ReactNode } from 'react';

const RealmJourney = dynamic(() => import('./Realm/RealmJourney'), {
  loading: () => <div className="world-loading-screen" role="status">Gathering the light…</div>,
  ssr: false,
});

export default function RealmExperience({ children }: { children: ReactNode }) {
  const [immersive, setImmersive] = useState(false);
  useEffect(() => {
    try {
      if (localStorage.getItem('portfolio-realm') === 'immersive') setImmersive(true);
    } catch { /* Browsing without storage still supports switching views. */ }
  }, []);

  function toggle() {
    const next = !immersive;
    try { localStorage.setItem('portfolio-realm', next ? 'immersive' : 'classic'); } catch { /* Preserve the choice for this visit. */ }
    // Each mode has its own destinations. Start at arrival instead of retaining a stale anchor.
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setImmersive(next);
  }

  return <div className={immersive ? 'realm-experience is-immersive' : 'realm-experience'}>
    <button className="realm-toggle" type="button" role="switch" aria-checked={immersive} aria-label="Immersive 3D portfolio" onClick={toggle}>
      <span className="realm-toggle-symbol" aria-hidden="true">◇</span>
      <span>{immersive ? 'Return to classic' : 'Enter the realm'}<small>{immersive ? 'Leave the realm' : 'Immersive 3D journey'}</small></span>
      <span className="realm-switch" aria-hidden="true"><i /></span>
    </button>
    {immersive ? <RealmJourney /> : children}
  </div>;
}
