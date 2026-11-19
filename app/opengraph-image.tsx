import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Ebuka Duruaku — Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#0f1624', color: '#ffffff', padding: '64px 72px', borderTop: '8px solid #38bdf8' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#94a3b8' }}>
          <span>d3troit.dev</span>
          <span>Lagos, Nigeria</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: '-3px' }}>Ebuka Duruaku</div>
          <div style={{ fontSize: 40, marginTop: 16, color: '#38bdf8' }}>Software Engineer</div>
          <div style={{ fontSize: 26, marginTop: 28, color: '#cbd5e1' }}>Web, backend & desktop applications.</div>
        </div>
        <div style={{ fontSize: 22, color: '#94a3b8' }}>Rust / Systems engineering / Thoughtful software</div>
      </div>
    ),
    size,
  );
}
