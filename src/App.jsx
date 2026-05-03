import { useState, useEffect, useRef } from "react";

const data = {
  roles: ["Security Automation Engineer", "Bug Bounty Hunter", "Offensive Security Researcher"],
  tagline: "Building autonomous vulnerability-validation pipelines at the intersection of AI and offensive security.",
  contact: {
    email: "ahireayush0@gmail.com",
    phone: "+91-74590 00919",
    github: "https://github.com/AyushAhire",
    linkedin: "https://linkedin.com/in/ayushahire",
    location: "Pune, India",
  },
  skills: [
    { category: "Automation",         items: ["Playwright", "Bash / CI-CD", "Kubernetes", "GitHub Actions"] },
    { category: "Offensive Security",  items: ["Burp Suite", "Nessus", "Zeek", "OSINT", "Kali Linux", "Web App Exploitation"] },
    { category: "Cloud & Infra",       items: ["AWS", "CNAPP", "Cloudflare", "Linux", "Virtualization"] },
    { category: "Languages",           items: ["Python", "JavaScript", "C++", "Java", "Solidity"] },
  ],
  experience: [
    {
      company: "AccuKnox",
      role: "Associate QA / Security Automation Engineer",
      period: "Nov 2024 – Present",
      location: "Pune, India",
      highlights: [
        "Authored 25+ Playwright E2E scripts automating 11% of platform UI — reduced manual QA by 35% and release cycles by 18%",
        "Built Kubernetes automation with CNAPP security workflows; cut deployment errors 30% across 100+ AWS assets",
        "Designed test scenarios targeting cloud attack surfaces — runtime policies, workload isolation, network controls",
        "CI/CD via Bash achieved 5× faster deployments with automated rollback",
      ],
    },
    {
      company: "HackerOne — Bug Bounty",
      role: "Independent Security Researcher",
      period: "Nov 2023 – Present",
      location: "Remote",
      highlights: [
        "P2 vulnerability in UK Government programme — auth logic flaw enabling unauthorised access",
        "Researched authentication bypass, IDOR, and session-management weaknesses in Web3auth.io",
        "Research loop: recon → hypothesis → exploit PoC → validated report",
      ],
    },
    {
      company: "Virtual Cyber Labs",
      role: "Cybersecurity Researcher & Trainer",
      period: "Jan 2024 – Mar 2024",
      location: "Remote",
      highlights: [
        "Analysed 50+ cyber fraud cases; authored 3 threat intel reports; flagged 200+ suspicious patterns via Zeek",
        "Mitigated 25% of simulated attack vectors via OSINT; raised participant security awareness by 35%",
      ],
    },
  ],
  projects: [
    {
      name: "Headless Vulnerability Scanner",
      stack: "Python · Playwright · Burp Suite API",
      year: "2024",
      description: "Headless browser crawler that auto-injects XSS/SQLi/SSRF payloads and logs confirmed findings — a small-scale autonomous vuln-validation pipeline.",
    },
    {
      name: "NFT CrowdFunding Platform",
      stack: "React.js · Solidity · Web3.js",
      year: "2024",
      description: "Deployed Ethereum smart contracts with secure wallet auth; audited for re-entrancy and access-control vulnerabilities pre-launch.",
    },
  ],
  education: {
    degree: "B.E. Computer Engineering",
    school: "DY Patil College of Engineering, Pune",
    period: "2021 – 2025",
    leadership: ["GDSC Cybersecurity Lead", "ACES Technical Secretary (2023–2024)"],
  },
};

/* ── AURORA BG ── */
function AuroraBg() {
  return (
    <div className="aurora-root" aria-hidden="true">
      <div className="a-blob a1" /><div className="a-blob a2" /><div className="a-blob a3" />
      <div className="a-blob a4" /><div className="a-blob a5" /><div className="a-blob a6" />
      <div className="a-grain" />
    </div>
  );
}

/* ── ICONS ── */
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.8 19.79 19.79 0 0 1 1.61 5.18 2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z"/>
  </svg>
);
const PinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

/* ── HOOKS ── */
function useInView(thresh = 0.07) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: thresh }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [thresh]);
  return [ref, vis];
}

function useScrollProgress() {
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProg(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return prog;
}

function useTypewriter(words, speed = 75, pause = 2300) {
  const [disp, setDisp] = useState("");
  const s = useRef({ wi: 0, ci: 0, del: false });
  useEffect(() => {
    const st = s.current, word = words[st.wi];
    let tm;
    if (!st.del && st.ci < word.length)       tm = setTimeout(() => { st.ci++; setDisp(word.slice(0, st.ci)); }, speed);
    else if (!st.del && st.ci === word.length) tm = setTimeout(() => { st.del = true; }, pause);
    else if (st.del && st.ci > 0)             tm = setTimeout(() => { st.ci--; setDisp(word.slice(0, st.ci)); }, speed / 2);
    else { st.del = false; st.wi = (st.wi + 1) % words.length; }
    return () => clearTimeout(tm);
  });
  return disp;
}

/* ── LIQUID BUTTON ── */
function LiquidButton({ children, onClick, ghost = false }) {
  const [hov, setHov] = useState(false);
  const id = `goo${ghost ? "g" : "p"}`;
  return (
    <button className={`lqb ${ghost ? "lqb-ghost" : "lqb-solid"}`} onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onTouchStart={() => setHov(true)} onTouchEnd={() => setTimeout(() => setHov(false), 400)}>
      <svg className="lqb-svg" viewBox="0 0 200 50" preserveAspectRatio="none">
        <defs>
          <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b" />
            <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 22 -9" result="g" />
            <feBlend in="SourceGraphic" in2="g" />
          </filter>
        </defs>
        <g filter={`url(#${id})`}>
          <rect className={`lf ${hov ? "lf-in" : ""}`} x="0" y="0" width="200" height="50" rx="25" />
          <circle className={`lb lb1 ${hov ? "lb-in" : ""}`} cx="26" cy="66" r="21" />
          <circle className={`lb lb2 ${hov ? "lb-in" : ""}`} cx="74" cy="70" r="18" />
          <circle className={`lb lb3 ${hov ? "lb-in" : ""}`} cx="126" cy="68" r="19" />
          <circle className={`lb lb4 ${hov ? "lb-in" : ""}`} cx="174" cy="66" r="21" />
        </g>
      </svg>
      <span className={`lqb-txt ${hov ? "lqb-txt-in" : ""} ${ghost ? "lqb-txt-ghost" : ""}`}>{children}</span>
    </button>
  );
}

/* ── REVEAL ── */
function Reveal({ children, id, delay = 0, className = "" }) {
  const [ref, vis] = useInView();
  return (
    <div id={id} ref={ref} className={`reveal ${vis ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── APP ── */
export default function Portfolio() {
  const [scrollY, setScrollY]   = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState("home");
  const typed = useTypewriter(data.roles);
  const progress = useScrollProgress();

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // close menu on scroll
  useEffect(() => {
    if (menuOpen && scrollY > 10) setMenuOpen(false);
  }, [scrollY, menuOpen]);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const ids = ["home","experience","skills","projects","contact"];
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting && e.target.id) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { id:"home",       label:"Home" },
    { id:"experience", label:"Experience" },
    { id:"skills",     label:"Skills" },
    { id:"projects",   label:"Projects" },
    { id:"contact",    label:"Contact" },
  ];

  const stats = [
    { v:"P2",   l:"HackerOne" },
    { v:"25+",  l:"E2E Scripts" },
    { v:"35%",  l:"QA Reduction" },
    { v:"5×",   l:"Faster Deploys" },
    { v:"100+", l:"AWS Assets" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:      #fafafa;
          --white:   #ffffff;
          --ink:     #111116;
          --ink2:    #3c3c48;
          --ink3:    #8a8a9a;
          --border:  rgba(0,0,0,0.07);
          --border2: rgba(0,0,0,0.13);
          --shadow:  0 1px 2px rgba(0,0,0,0.05),0 4px 12px rgba(0,0,0,0.04);
          --shadow2: 0 2px 6px rgba(0,0,0,0.07),0 10px 28px rgba(0,0,0,0.06);
          --p-blue:   #dbeafe; --p-blue-t:  #2563eb;
          --p-violet: #ede9fe; --p-violet-t:#7c3aed;
          --p-green:  #dcfce7; --p-green-t: #16a34a;
          --p-amber:  #fef3c7; --p-amber-t: #d97706;
          --p-pink:   #fce7f3; --p-pink-t:  #db2777;
          --p-teal:   #ccfbf1; --p-teal-t:  #0f766e;
          --nav-h: 56px;
        }

        html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
        body { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--ink); min-height: 100vh; overflow-x: hidden; }

        /* ── SCROLL PROGRESS BAR ── */
        .progress-bar {
          position: fixed; top: 0; left: 0; z-index: 300;
          height: 2px; background: linear-gradient(90deg, #a78bfa, #67e8f9, #86efac);
          transition: width .1s linear; pointer-events: none;
        }

        /* ── NAV ── */
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          height: var(--nav-h);
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2rem;
          transition: background .3s, box-shadow .3s, border-color .3s;
        }
        nav.sc {
          background: rgba(250,250,250,0.92);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 1px 0 rgba(0,0,0,.03);
        }
        /* logo */
        .nav-logo {
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: .92rem;
          letter-spacing: -.025em; color: var(--ink);
          display: flex; align-items: center; gap: 8px; cursor: pointer; flex-shrink: 0;
          user-select: none;
        }
        .nav-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 6px rgba(34,197,94,.5); animation: pulse 2.8s ease-in-out infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.6)} }

        /* desktop links */
        .nls { display: flex; gap: 1px; align-items: center; }
        .nlk {
          font-size: .78rem; font-weight: 400; padding: 6px 13px; border-radius: 999px;
          color: var(--ink3); cursor: pointer; transition: all .18s;
          border: none; background: transparent; font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }
        .nlk:hover { color: var(--ink); background: rgba(0,0,0,.05); }
        .nlk.act { color: var(--white); background: var(--ink); font-weight: 500; }

        /* nav right side social icons (desktop) */
        .nav-socials { display: flex; gap: 4px; align-items: center; margin-left: 12px; }
        .nav-icon-btn {
          width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--border);
          background: transparent; cursor: pointer; transition: all .18s;
          display: flex; align-items: center; justify-content: center; color: var(--ink3);
          text-decoration: none;
        }
        .nav-icon-btn:hover { background: var(--ink); color: white; border-color: var(--ink); }

        /* ── HAMBURGER ── */
        .hbg {
          display: none; flex-direction: column; justify-content: center;
          gap: 5px; cursor: pointer; padding: 8px; background: none; border: none;
          border-radius: 10px; transition: background .18s;
        }
        .hbg:hover { background: rgba(0,0,0,.05); }
        .hl { width: 20px; height: 1.5px; background: var(--ink); border-radius: 2px; transition: all .28s; transform-origin: center; }
        .hbg.op .hl:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hbg.op .hl:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hbg.op .hl:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── FULL-SCREEN MOBILE MENU ── */
        .mm-overlay {
          position: fixed; inset: 0; z-index: 190;
          background: rgba(250,250,250,0.97);
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          display: flex; flex-direction: column;
          padding: calc(var(--nav-h) + 1.5rem) 1.75rem 2rem;
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity .28s ease, visibility .28s ease;
        }
        .mm-overlay.op { opacity: 1; visibility: visible; pointer-events: all; }

        .mm-links { display: flex; flex-direction: column; gap: .25rem; flex: 1; }
        .mnl {
          font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 700;
          letter-spacing: -.03em; color: var(--ink); cursor: pointer;
          transition: color .18s, transform .18s; border: none; background: none;
          text-align: left; padding: .5rem 0; line-height: 1.1;
          opacity: 0; transform: translateY(12px);
          transition: opacity .3s ease, transform .3s ease, color .18s;
        }
        .mm-overlay.op .mnl { opacity: 1; transform: translateY(0); }
        .mm-overlay.op .mnl:nth-child(1) { transition-delay: .05s; }
        .mm-overlay.op .mnl:nth-child(2) { transition-delay: .09s; }
        .mm-overlay.op .mnl:nth-child(3) { transition-delay: .13s; }
        .mm-overlay.op .mnl:nth-child(4) { transition-delay: .17s; }
        .mm-overlay.op .mnl:nth-child(5) { transition-delay: .21s; }
        .mnl:hover { color: var(--ink3); }
        .mnl.act { color: var(--ink); }
        .mnl.act::after { content: ' ·'; color: #a78bfa; }

        /* bottom of mobile menu */
        .mm-footer {
          padding-top: 1.5rem; border-top: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
          opacity: 0; transform: translateY(8px);
          transition: opacity .3s ease .28s, transform .3s ease .28s;
        }
        .mm-overlay.op .mm-footer { opacity: 1; transform: translateY(0); }
        .mm-footer-note { font-size: .75rem; color: var(--ink3); }
        .mm-socials { display: flex; gap: 8px; }
        .mm-social-btn {
          width: 36px; height: 36px; border-radius: 10px; border: 1px solid var(--border);
          background: var(--white); display: flex; align-items: center; justify-content: center;
          color: var(--ink2); text-decoration: none; transition: all .18s;
        }
        .mm-social-btn:hover { background: var(--ink); color: white; border-color: var(--ink); }

        /* ── AURORA ── */
        .aurora-root { position: absolute; inset: 0; overflow: hidden; z-index: 0; }
        .a-blob { position: absolute; border-radius: 50%; filter: blur(72px); will-change: transform; }
        .a1 { width: 600px; height: 520px; background: radial-gradient(ellipse,rgba(196,181,253,.5) 0%,transparent 70%); top: -15%; left: -8%; animation: orb1 22s ease-in-out infinite alternate; }
        .a2 { width: 500px; height: 460px; background: radial-gradient(ellipse,rgba(167,243,208,.45) 0%,transparent 70%); top: 5%; right: -5%; animation: orb2 28s ease-in-out infinite alternate; }
        .a3 { width: 460px; height: 420px; background: radial-gradient(ellipse,rgba(253,186,116,.35) 0%,transparent 70%); bottom: 0; left: 15%; animation: orb3 24s ease-in-out infinite alternate; }
        .a4 { width: 380px; height: 360px; background: radial-gradient(ellipse,rgba(147,197,253,.42) 0%,transparent 70%); top: 35%; left: 30%; animation: orb4 32s ease-in-out infinite alternate; }
        .a5 { width: 420px; height: 380px; background: radial-gradient(ellipse,rgba(249,168,212,.35) 0%,transparent 70%); bottom: 5%; right: 10%; animation: orb5 26s ease-in-out infinite alternate; }
        .a6 { width: 340px; height: 320px; background: radial-gradient(ellipse,rgba(110,231,183,.38) 0%,transparent 70%); top: 55%; right: 35%; animation: orb6 20s ease-in-out infinite alternate; }
        @keyframes orb1 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(60px,40px) scale(1.1)} }
        @keyframes orb2 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(-50px,60px) scale(1.08)} }
        @keyframes orb3 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(40px,-50px) scale(1.12)} }
        @keyframes orb4 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(-60px,-40px) scale(.92)} }
        @keyframes orb5 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(-40px,50px) scale(1.06)} }
        @keyframes orb6 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(55px,-45px) scale(1.1)} }
        .a-grain { position:absolute;inset:0;opacity:.022;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:200px; }
        .hero-fade { position:absolute;inset:0;z-index:1;pointer-events:none;background:radial-gradient(ellipse 90% 80% at 50% 50%,transparent 25%,rgba(250,250,250,.55) 65%,rgba(250,250,250,.95) 100%); }

        /* ── HERO ── */
        .hero-wrap { position:relative;overflow:hidden;min-height:100svh;display:flex;flex-direction:column;background:var(--bg); }
        .hero { position:relative;z-index:2;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:calc(var(--nav-h) + 3rem) 1.25rem 5rem;text-align:center; }
        .hi { max-width:760px;width:100%; }

        .hero-badge { display:inline-flex;align-items:center;gap:7px;padding:4px 13px 4px 9px;border-radius:999px;font-size:.65rem;font-weight:500;letter-spacing:.07em;text-transform:uppercase;background:rgba(0,0,0,.04);border:1px solid var(--border2);color:var(--ink2);margin-bottom:1.5rem;animation:fadeUp .5s ease both; }
        .bdot { width:5px;height:5px;border-radius:50%;background:#22c55e;box-shadow:0 0 5px rgba(34,197,94,.6);animation:pulse 2s infinite; }

        .hero-name { font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(3rem,13vw,7rem);line-height:.88;letter-spacing:-.05em;margin-bottom:1rem;animation:fadeUp .5s ease .08s both;color:var(--ink); }
        .name-accent { display:block;background:linear-gradient(125deg,#a78bfa 0%,#67e8f9 60%,#86efac 100%);-webkit-background-clip:text;background-clip:text;color:transparent; }

        .hero-role { font-size:clamp(.8rem,3vw,.95rem);color:var(--ink3);font-weight:400;letter-spacing:.02em;height:1.6em;margin-bottom:.9rem;animation:fadeUp .5s ease .14s both; }
        .cursor { display:inline-block;width:1.5px;height:1em;background:var(--ink3);margin-left:1px;vertical-align:middle;animation:blink .85s step-end infinite; }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }

        .hero-sub { font-size:clamp(.82rem,2.5vw,.98rem);font-weight:300;color:var(--ink2);line-height:1.82;max-width:500px;margin:0 auto 2.5rem;animation:fadeUp .5s ease .2s both; }

        .hero-cta { display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap;margin-bottom:3.5rem;animation:fadeUp .5s ease .28s both; }

        /* stats — horizontal scroll on mobile */
        .hero-stats-wrap { width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;animation:fadeUp .5s ease .36s both; padding-bottom: 4px; }
        .hero-stats-wrap::-webkit-scrollbar { display:none; }
        .hero-stats { display:flex;gap:0;border:1px solid var(--border);border-radius:16px;overflow:hidden;background:rgba(255,255,255,.78);backdrop-filter:blur(16px);width:max-content;min-width:100%; }
        .stat { display:flex;flex-direction:column;align-items:center;gap:1px;padding:.875rem 1.4rem;flex:1;min-width:90px;border-right:1px solid var(--border);transition:background .18s; }
        .stat:last-child { border-right:none; }
        .stat:hover { background:rgba(0,0,0,.025); }
        .stat-v { font-family:'Syne',sans-serif;font-size:1.4rem;font-weight:700;color:var(--ink);line-height:1; }
        .stat-l { font-size:.58rem;color:var(--ink3);letter-spacing:.05em;text-transform:uppercase;text-align:center;margin-top:2px; }

        .scroll-hint { position:absolute;bottom:1.5rem;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:5px;color:var(--ink3);font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;animation:fadeIn 1s ease 1.2s both;cursor:pointer;z-index:2; }
        .scroll-line { width:1px;height:28px;background:linear-gradient(to bottom,var(--ink3),transparent);animation:sdrop 2s ease-in-out infinite; }
        @keyframes sdrop { 0%,100%{transform:scaleY(1);transform-origin:top}50%{transform:scaleY(.3);transform-origin:bottom} }
        @keyframes fadeIn { from{opacity:0}to{opacity:1} }

        /* ── LIQUID BUTTON ── */
        .lqb { position:relative;display:inline-flex;align-items:center;justify-content:center;height:48px;padding:0 28px;min-width:148px;border-radius:999px;cursor:pointer;overflow:hidden;font-family:'DM Sans',sans-serif;outline:none;-webkit-tap-highlight-color:transparent;transition:box-shadow .28s; }
        .lqb-solid { border:1.5px solid var(--ink);background:transparent; }
        .lqb-solid:hover { box-shadow:0 4px 18px rgba(0,0,0,.14); }
        .lqb-ghost { border:1px solid var(--border2);background:transparent; }
        .lqb-ghost:hover { border-color:rgba(0,0,0,.24); }
        .lqb-svg { position:absolute;inset:0;width:100%;height:100%;overflow:visible; }
        .lf { fill:var(--ink);transform:translateY(115%);transition:transform .55s cubic-bezier(.4,0,.2,1); }
        .lf-in { transform:translateY(0); }
        .lb { fill:var(--ink); }
        .lb1 { transition:transform .47s cubic-bezier(.4,0,.2,1) 0s; }
        .lb2 { transition:transform .47s cubic-bezier(.4,0,.2,1) .05s; }
        .lb3 { transition:transform .47s cubic-bezier(.4,0,.2,1) .03s; }
        .lb4 { transition:transform .47s cubic-bezier(.4,0,.2,1) .07s; }
        .lb-in { transform:translateY(-58px); }
        .lqb-txt { position:relative;z-index:2;font-size:.85rem;font-weight:500;letter-spacing:.01em;pointer-events:none;white-space:nowrap;transition:color .24s ease .1s;color:var(--ink); }
        .lqb-txt-ghost { color:var(--ink2); }
        .lqb-txt-in { color:#fafafa; }

        /* ── PAGE ── */
        .page-body { background:var(--bg); }
        .reveal { opacity:0;transform:translateY(16px);transition:opacity .55s ease,transform .55s ease; }
        .revealed { opacity:1;transform:translateY(0); }

        /* ── SECTION ── */
        .sec { padding:4.5rem 1.5rem;max-width:940px;margin:0 auto; }
        .sec-pill { display:inline-flex;align-items:center;gap:6px;padding:3px 11px;border-radius:999px;font-size:.6rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.4rem; }
        .pill-violet { background:var(--p-violet);color:var(--p-violet-t); }
        .pill-blue   { background:var(--p-blue);  color:var(--p-blue-t); }
        .pill-teal   { background:var(--p-teal);  color:var(--p-teal-t); }
        .pill-amber  { background:var(--p-amber); color:var(--p-amber-t); }
        .pill-pink   { background:var(--p-pink);  color:var(--p-pink-t); }
        .sec-title { font-family:'Syne',sans-serif;font-size:clamp(1.6rem,4.5vw,2.5rem);font-weight:700;letter-spacing:-.035em;color:var(--ink);margin-bottom:1.75rem;line-height:1.05; }
        hr.div { border:none;height:1px;background:var(--border);margin-bottom:2rem;margin-top:-1.25rem; }

        /* ── EXPERIENCE ── */
        .exp-list { display:flex;flex-direction:column;gap:.75rem; }
        .exp-card { border:1px solid var(--border);border-radius:16px;padding:1.4rem 1.5rem;background:var(--white);transition:box-shadow .22s,border-color .22s,transform .22s;position:relative;overflow:hidden; }
        .exp-card:hover { box-shadow:var(--shadow2);border-color:var(--border2);transform:translateY(-2px); }
        .exp-card::before { content:'';position:absolute;left:0;top:0;right:0;height:2px;border-radius:2px 2px 0 0;opacity:.65; }
        .ec-0::before { background:linear-gradient(90deg,#a78bfa,#67e8f9); }
        .ec-1::before { background:linear-gradient(90deg,#86efac,#34d399); }
        .ec-2::before { background:linear-gradient(90deg,#fcd34d,#fb923c); }
        .exp-head { display:flex;align-items:flex-start;justify-content:space-between;gap:.75rem;flex-wrap:wrap;margin-bottom:.2rem; }
        .exp-co { font-family:'Syne',sans-serif;font-size:.95rem;font-weight:600;color:var(--ink); }
        .exp-period { font-size:.67rem;color:var(--ink3);padding:3px 9px;border-radius:999px;background:var(--bg);border:1px solid var(--border);white-space:nowrap;flex-shrink:0; }
        .exp-role { font-size:.79rem;color:var(--ink3);margin-bottom:.85rem; }
        .exp-hl { list-style:none;display:flex;flex-direction:column;gap:.4rem; }
        .exp-hl li { font-size:.83rem;color:var(--ink2);line-height:1.65;padding-left:1rem;position:relative; }
        .exp-hl li::before { content:'–';position:absolute;left:0;color:var(--ink3); }

        /* ── SKILLS ── */
        .skills-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(195px,1fr));gap:.75rem; }
        .skill-card { border:1px solid var(--border);border-radius:16px;padding:1.3rem 1.4rem;background:var(--white);transition:box-shadow .2s,border-color .2s; }
        .skill-card:hover { box-shadow:var(--shadow);border-color:var(--border2); }
        .sk-0 { border-left:3px solid #c4b5fd; }
        .sk-1 { border-left:3px solid #f9a8d4; }
        .sk-2 { border-left:3px solid #93c5fd; }
        .sk-3 { border-left:3px solid #fcd34d; }
        .skill-cat { font-size:.61rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink3);margin-bottom:.85rem; }
        .tags { display:flex;flex-wrap:wrap;gap:.3rem; }
        .tag { font-size:.73rem;padding:4px 10px;border-radius:999px;background:rgba(0,0,0,.04);border:1px solid rgba(0,0,0,.08);color:var(--ink2);transition:all .18s;cursor:default; }
        .sk-0 .tag:hover { background:var(--p-violet);border-color:transparent;color:var(--p-violet-t); }
        .sk-1 .tag:hover { background:var(--p-pink);border-color:transparent;color:var(--p-pink-t); }
        .sk-2 .tag:hover { background:var(--p-blue);border-color:transparent;color:var(--p-blue-t); }
        .sk-3 .tag:hover { background:var(--p-amber);border-color:transparent;color:var(--p-amber-t); }

        /* ── PROJECTS ── */
        .proj-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:.75rem; }
        .proj-card { border:1px solid var(--border);border-radius:16px;padding:1.4rem 1.5rem;background:var(--white);transition:box-shadow .22s,border-color .22s,transform .22s; }
        .proj-card:hover { box-shadow:var(--shadow2);border-color:var(--border2);transform:translateY(-2px); }
        .proj-top { display:flex;align-items:center;justify-content:space-between;margin-bottom:.9rem; }
        .proj-icon { width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:.95rem; }
        .pj-0 .proj-icon { background:var(--p-violet);color:var(--p-violet-t); }
        .pj-1 .proj-icon { background:var(--p-teal);color:var(--p-teal-t); }
        .proj-yr { font-size:.67rem;color:var(--ink3);padding:3px 9px;border-radius:999px;background:var(--bg);border:1px solid var(--border); }
        .proj-name { font-family:'Syne',sans-serif;font-size:.95rem;font-weight:600;color:var(--ink);margin-bottom:.25rem; }
        .proj-stack { font-size:.72rem;color:var(--ink3);margin-bottom:.65rem; }
        .proj-desc { font-size:.83rem;color:var(--ink2);line-height:1.72; }

        /* ── EDUCATION ── */
        .edu-card { border:1px solid var(--border);border-radius:16px;padding:1.5rem 1.75rem;background:var(--white);display:flex;gap:1.25rem;align-items:flex-start; }
        .edu-icon { width:44px;height:44px;border-radius:12px;background:var(--p-amber);border:1px solid rgba(217,119,6,.15);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0; }
        .edu-deg { font-family:'Syne',sans-serif;font-size:.95rem;font-weight:600;color:var(--ink);margin-bottom:.2rem; }
        .edu-school { font-size:.83rem;color:var(--ink2);margin-bottom:.2rem; }
        .edu-period { font-size:.7rem;color:var(--ink3);margin-bottom:.75rem; }

        /* ── CONTACT ── */
        .contact-grid { display:grid;grid-template-columns:repeat(2,1fr);gap:.75rem; }
        .contact-card { border:1px solid var(--border);border-radius:14px;background:var(--white);transition:box-shadow .2s,border-color .2s,transform .2s; }
        .contact-card:hover { box-shadow:var(--shadow);border-color:var(--border2);transform:translateY(-1px); }
        .contact-link { display:flex;align-items:center;gap:.8rem;padding:.9rem 1.1rem;text-decoration:none;color:var(--ink);min-height:60px; }
        .ci-0 .contact-icon { background:var(--p-blue);  color:var(--p-blue-t); }
        .ci-1 .contact-icon { background:var(--p-green); color:var(--p-green-t); }
        .ci-2 .contact-icon { background:var(--p-violet);color:var(--p-violet-t); }
        .ci-3 .contact-icon { background:var(--p-pink);  color:var(--p-pink-t); }
        .ci-4 .contact-icon { background:var(--p-amber); color:var(--p-amber-t); }
        .contact-icon { width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0; }
        .contact-type { font-size:.6rem;color:var(--ink3);text-transform:uppercase;letter-spacing:.06em;margin-bottom:2px; }
        .contact-val { font-size:.8rem;color:var(--ink);line-height:1.3; }

        /* ── FOOTER ── */
        footer { text-align:center;padding:1.75rem 1.5rem;color:var(--ink3);font-size:.7rem;border-top:1px solid var(--border);background:var(--bg);letter-spacing:.02em; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)} }

        /* ── DESKTOP ── */
        @media(min-width:769px) {
          .hbg { display:none; }
          .mm-overlay { display:none; }
        }

        /* ── MOBILE ── */
        @media(max-width:768px) {
          nav { padding: 0 1.1rem; }
          .nls { display:none; }
          .nav-socials { display:none; }
          .hbg { display:flex; }

          .hero { padding: calc(var(--nav-h) + 2rem) 1rem 4.5rem; }
          .hero-sub { max-width:100%; }
          .hero-cta { gap:.6rem; }
          .lqb { height:46px;min-width:138px;padding:0 22px; }

          .hero-stats { min-width:unset;width:max-content; }
          .stat { padding:.75rem 1.1rem;min-width:82px; }
          .stat-v { font-size:1.2rem; }
          .stat-l { font-size:.55rem; }

          .sec { padding:3rem 1rem; }
          .sec-title { margin-bottom:1.5rem; }
          .skills-grid { grid-template-columns:1fr 1fr;gap:.6rem; }
          .proj-grid { grid-template-columns:1fr; }
          .contact-grid { grid-template-columns:1fr 1fr;gap:.6rem; }
          .contact-val { font-size:.75rem;word-break:break-all; }
          .edu-card { flex-direction:column;gap:.875rem;padding:1.25rem; }
          .scroll-hint { display:none; }
          .exp-head { gap:.4rem; }
        }

        @media(max-width:400px) {
          .hero-name { font-size:clamp(2.8rem,16vw,4rem); }
          .skills-grid { grid-template-columns:1fr; }
          .contact-grid { grid-template-columns:1fr; }
          .hero-cta { flex-direction:column;align-items:center; }
          .lqb { min-width:180px;width:100%;max-width:240px; }
        }
      `}</style>

      {/* SCROLL PROGRESS */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* NAV */}
      <nav className={scrollY > 40 ? "sc" : ""}>
        <div className="nav-logo" onClick={() => go("home")}>
          <span className="nav-dot" /> Ayush Ahire
        </div>
        <div className="nls">
          {navLinks.map(l => (
            <button key={l.id} className={`nlk${active === l.id ? " act" : ""}`} onClick={() => go(l.id)}>{l.label}</button>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
          <div className="nav-socials">
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="nav-icon-btn" title="GitHub"><GithubIcon /></a>
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="nav-icon-btn" title="LinkedIn"><LinkedinIcon /></a>
          </div>
          <button className={`hbg${menuOpen ? " op" : ""}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span className="hl" /><span className="hl" /><span className="hl" />
          </button>
        </div>
      </nav>

      {/* FULL-SCREEN MOBILE MENU */}
      <div className={`mm-overlay${menuOpen ? " op" : ""}`} onClick={e => { if (e.target === e.currentTarget) setMenuOpen(false); }}>
        <div className="mm-links">
          {navLinks.map(l => (
            <button key={l.id} className={`mnl${active === l.id ? " act" : ""}`} onClick={() => go(l.id)}>{l.label}</button>
          ))}
        </div>
        <div className="mm-footer">
          <span className="mm-footer-note">Pune, India · Available for work</span>
          <div className="mm-socials">
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="mm-social-btn"><GithubIcon /></a>
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="mm-social-btn"><LinkedinIcon /></a>
            <a href={`mailto:${data.contact.email}`} className="mm-social-btn"><EmailIcon /></a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div className="hero-wrap" id="home">
        <AuroraBg />
        <div className="hero-fade" />
        <div className="hero">
          <div className="hi">
            <div className="hero-badge"><span className="bdot" /> Open to Opportunities</div>
            <h1 className="hero-name">
              Ayush<span className="name-accent">Ahire</span>
            </h1>
            <div className="hero-role">{typed}<span className="cursor" /></div>
            <p className="hero-sub">{data.tagline}</p>
            <div className="hero-cta">
              <LiquidButton onClick={() => go("contact")}>Get in Touch</LiquidButton>
              <LiquidButton ghost onClick={() => go("experience")}>View Work</LiquidButton>
            </div>
            <div className="hero-stats-wrap">
              <div className="hero-stats">
                {stats.map((s, i) => (
                  <div key={i} className="stat">
                    <span className="stat-v">{s.v}</span>
                    <span className="stat-l">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint" onClick={() => go("experience")}>
          <div className="scroll-line" /><span>scroll</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="page-body">

        <Reveal id="experience">
          <div className="sec">
            <span className="sec-pill pill-violet">Career</span>
            <h2 className="sec-title">Experience</h2>
            <hr className="div" />
            <div className="exp-list">
              {data.experience.map((e, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className={`exp-card ec-${i}`}>
                    <div className="exp-head">
                      <span className="exp-co">{e.company}</span>
                      <span className="exp-period">{e.period}</span>
                    </div>
                    <div className="exp-role">{e.role} · {e.location}</div>
                    <ul className="exp-hl">
                      {e.highlights.map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal id="skills">
          <div className="sec">
            <span className="sec-pill pill-blue">Capabilities</span>
            <h2 className="sec-title">Skills</h2>
            <hr className="div" />
            <div className="skills-grid">
              {data.skills.map((s, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className={`skill-card sk-${i}`}>
                    <div className="skill-cat">{s.category}</div>
                    <div className="tags">{s.items.map((it, j) => <span key={j} className="tag">{it}</span>)}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal id="projects">
          <div className="sec">
            <span className="sec-pill pill-teal">Work</span>
            <h2 className="sec-title">Projects</h2>
            <hr className="div" />
            <div className="proj-grid">
              {data.projects.map((p, i) => (
                <Reveal key={i} delay={i * 65}>
                  <div className={`proj-card pj-${i}`}>
                    <div className="proj-top">
                      <div className="proj-icon">{i === 0 ? "⬡" : "◈"}</div>
                      <span className="proj-yr">{p.year}</span>
                    </div>
                    <div className="proj-name">{p.name}</div>
                    <div className="proj-stack">{p.stack}</div>
                    <p className="proj-desc">{p.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="sec" style={{ paddingTop:"1rem" }}>
            <span className="sec-pill pill-amber">Background</span>
            <h2 className="sec-title">Education</h2>
            <hr className="div" />
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <div>
                <div className="edu-deg">{data.education.degree}</div>
                <div className="edu-school">{data.education.school}</div>
                <div className="edu-period">{data.education.period}</div>
                <div className="tags">{data.education.leadership.map((r, i) => <span key={i} className="tag">{r}</span>)}</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal id="contact">
          <div className="sec">
            <span className="sec-pill pill-pink">Say hello</span>
            <h2 className="sec-title">Contact</h2>
            <hr className="div" />
            <div className="contact-grid">
              {[
                { icon:<EmailIcon />,    type:"Email",    val:data.contact.email,                href:`mailto:${data.contact.email}` },
                { icon:<PhoneIcon />,    type:"Phone",    val:data.contact.phone,                href:`tel:${data.contact.phone}` },
                { icon:<GithubIcon />,   type:"GitHub",   val:"github.com/AyushAhire",           href:data.contact.github },
                { icon:<LinkedinIcon />, type:"LinkedIn", val:"linkedin.com/in/ayushahire",      href:data.contact.linkedin },
                { icon:<PinIcon />,      type:"Location", val:data.contact.location,             href:null },
              ].map((c, i) => (
                <Reveal key={i} delay={i * 40}>
                  <div className={`contact-card ci-${i}`}>
                    {c.href ? (
                      <a href={c.href} className="contact-link" target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        <div className="contact-icon">{c.icon}</div>
                        <div><div className="contact-type">{c.type}</div><div className="contact-val">{c.val}</div></div>
                      </a>
                    ) : (
                      <div className="contact-link">
                        <div className="contact-icon">{c.icon}</div>
                        <div><div className="contact-type">{c.type}</div><div className="contact-val">{c.val}</div></div>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <footer>Crafted with precision · Ayush Ahire © 2025</footer>
      </div>
    </>
  );
}