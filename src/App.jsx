import { useState, useEffect } from "react";

const PROJECTS = [
  {
    title: "AIESEC Ruhuna Web Application",
    desc: "A complete member management, event management & task management system with role-based dashboards, merchandise module, and registration analytics.",
    tech: ["React", "Spring Boot", "MySQL"],
    link: "https://github.com/hewageumesha/AIESEC_Ruhuna",
  },
  {
    title: "Medicine Stock Management System",
    desc: "A modern full-stack inventory system to computerize PHI medicine distribution with batch tracking, stock alerts, and a clean UI.",
    tech: ["React", "Node.js", "JavaScript", "MySQL"],
    link: "https://github.com/ishara425/medicine-stock-management",
  },
  {
    title: "FOT-Tecmis",
    desc: "A collaborative Java-based technical management information system for the Faculty of Technology.",
    tech: ["Java"],
    link: "https://github.com/ishara425",
  },
  {
    title: "ChatApp System",
    desc: "A fully functional real-time chat application supporting Admin and User roles with room management, threaded chats, chat history saved as .txt files, and profile display during conversations.",
    tech: ["Java Swing", "Java RMI", "Hibernate", "MySQL"],
    link: "https://github.com/ishara425",
  },
  {
    title: "HRGSMS – Hotel Reservation & Guest Services",
    desc: "A comprehensive web-based hotel management system for Morena Hotels, replacing a legacy desktop system with real-time room availability, automated billing, guest services tracking, and multi-branch support.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    link: "https://github.com/Nepul1234/HRGSMS-ADBMS-Project",
  },
  {
    title: "Soft Clothes – Online Clothing Store",
    desc: "A web-based clothing store management application automating customer registration, order management, product cataloging, and payment tracking with business insight reports.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    link: "https://github.com/ishara425",
  },
];

const FRONTEND_SKILLS = ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"];
const BACKEND_SKILLS  = ["Node.js", "Spring Boot", "Java", "MySQL", "AWS", "Terraform"];

const NAV = ["Home", "About", "Projects", "Contact"];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [typed, setTyped]       = useState("");
  const [cursor, setCursor]     = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const roles = ["Full Stack Developer", "ICT Undergraduate", "Cloud Enthusiast", "AI Explorer"];
  const [rIdx, setRIdx]         = useState(0);
  const [cIdx, setCIdx]         = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = roles[rIdx];
    const t = setTimeout(() => {
      if (!deleting && cIdx < cur.length)      { setTyped(cur.slice(0, cIdx+1)); setCIdx(c=>c+1); }
      else if (!deleting && cIdx===cur.length) { setTimeout(()=>setDeleting(true), 1600); }
      else if (deleting && cIdx > 0)           { setTyped(cur.slice(0, cIdx-1)); setCIdx(c=>c-1); }
      else                                     { setDeleting(false); setRIdx(i=>(i+1)%roles.length); }
    }, deleting ? 45 : 90);
    return () => clearTimeout(t);
  }, [cIdx, deleting, rIdx]);

  useEffect(() => {
    const b = setInterval(() => setCursor(v=>!v), 530);
    return () => clearInterval(b);
  }, []);

  useEffect(() => {
    const fn = () => {
      for (const id of ["home","about","projects","contact"]) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 80 && r.bottom >= 80) { setActiveSection(id); break; }
        }
      }
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleCV = () => {
    const link = document.createElement("a");
    link.href = "Ishara Palangasinghe.pdf";
    link.download = "Ishara_Palangasinghe_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", background:"#0a0a0a", color:"#e0e0e0", minHeight:"100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-thumb{background:#f97316;border-radius:4px}

        @keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}

        .fade{animation:fadeIn .6s ease both}
        .d1{animation-delay:.1s}.d2{animation-delay:.25s}.d3{animation-delay:.4s}.d4{animation-delay:.55s}

        .nav-link{font-size:15px;font-weight:500;color:#aaa;cursor:pointer;
          transition:color .2s;padding:4px 0;text-decoration:none}
        .nav-link:hover,.nav-link.active{color:#f97316}

        .btn-solid{background:#f97316;color:#fff;border:none;cursor:pointer;
          font-family:inherit;font-weight:700;font-size:15px;
          padding:12px 28px;border-radius:8px;transition:all .2s}
        .btn-solid:hover{background:#ea580c;transform:translateY(-2px)}

        .btn-border{background:transparent;color:#e0e0e0;
          border:2px solid #333;cursor:pointer;font-family:inherit;
          font-weight:700;font-size:15px;padding:12px 28px;border-radius:8px;
          transition:all .2s}
        .btn-border:hover{border-color:#f97316;color:#f97316;transform:translateY(-2px)}

        .icon-btn{width:46px;height:46px;border-radius:50%;
          background:#1a1a1a;border:1px solid #2a2a2a;
          display:flex;align-items:center;justify-content:center;
          cursor:pointer;transition:all .2s;text-decoration:none;color:#ccc;font-size:20px}
        .icon-btn:hover{border-color:#f97316;color:#f97316;background:#1f1a14}

        .card{background:#111;border:1px solid #222;border-radius:12px;
          padding:24px;transition:all .25s}
        .card:hover{border-color:#f97316;transform:translateY(-3px)}

        .tag{display:inline-block;font-size:12px;font-weight:600;
          color:#f97316;border:1px solid rgba(249,115,22,.35);
          background:rgba(249,115,22,.07);
          padding:4px 12px;border-radius:20px;margin:3px}

        .view-link{font-size:14px;font-weight:600;color:#f97316;
          text-decoration:none;transition:gap .2s;display:inline-flex;align-items:center;gap:5px}
        .view-link:hover{gap:9px}

        .sec-title{font-size:clamp(28px,4vw,38px);font-weight:800;
          color:#f97316;text-align:center;margin-bottom:36px;letter-spacing:-.02em}

        @media(max-width:768px){
          .desktop-nav{display:none!important}
          .hero-inner{flex-direction:column!important;text-align:center!important;gap:40px!important}
          .hero-photo{order:-1}
          .hero-icons{justify-content:center!important}
          .projects-grid{grid-template-columns:1fr!important}
          .about-bottom{grid-template-columns:1fr!important}
          .mobile-menu{display:flex!important}
        }
        @media(min-width:769px){.mobile-menu{display:none!important}}
      `}</style>

      {/* ═══════════════ NAVBAR ═══════════════ */}
      <nav style={{
        position:"fixed",top:0,left:0,right:0,zIndex:999,
        background:"rgba(10,10,10,.95)",backdropFilter:"blur(12px)",
        borderBottom:"1px solid #1a1a1a",padding:"0 6%"
      }}>
        <div style={{maxWidth:"1100px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:"64px"}}>
          <span onClick={()=>scrollTo("home")} style={{cursor:"pointer",fontWeight:800,fontSize:"17px",letterSpacing:"-.03em"}}>
            <span style={{color:"#e0e0e0"}}>ishara</span>
            <span style={{color:"#f97316"}}>.</span>
            <span style={{color:"#f97316"}}>dev</span>
          </span>

          <div className="desktop-nav" style={{display:"flex",gap:"32px",alignItems:"center"}}>
            {NAV.map(n=>(
              <span key={n} className={`nav-link${activeSection===n.toLowerCase()?" active":""}`}
                onClick={()=>scrollTo(n.toLowerCase())}>{n}</span>
            ))}
          </div>

          <button onClick={()=>setMenuOpen(o=>!o)} className="mobile-menu"
            style={{background:"none",border:"none",cursor:"pointer",flexDirection:"column",gap:"5px",padding:"4px"}}>
            {[0,1,2].map(i=>(
              <div key={i} style={{width:22,height:2,background:"#f97316",borderRadius:2,transition:"all .25s",
                transform:menuOpen&&i===0?"rotate(45deg) translate(5px,5px)":menuOpen&&i===2?"rotate(-45deg) translate(5px,-5px)":"none",
                opacity:menuOpen&&i===1?0:1}}/>
            ))}
          </button>
        </div>

        {menuOpen&&(
          <div style={{background:"#0a0a0a",padding:"12px 6% 20px",borderBottom:"1px solid #1a1a1a"}}>
            {NAV.map(n=>(
              <div key={n} onClick={()=>scrollTo(n.toLowerCase())}
                style={{padding:"12px 0",fontSize:"15px",fontWeight:600,
                  color:activeSection===n.toLowerCase()?"#f97316":"#888",
                  cursor:"pointer",borderBottom:"1px solid #1a1a1a"}}>{n}</div>
            ))}
          </div>
        )}
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section id="home" style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"80px 6%"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto",width:"100%",display:"flex",
          alignItems:"center",justifyContent:"space-between",gap:"60px"}} className="hero-inner">

          {/* Photo + Icons */}
          <div className="hero-photo" style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",gap:"24px"}}>
            <div style={{
              width:260,height:260,borderRadius:"50%",overflow:"hidden",
              border:"3px solid #f97316",
              boxShadow:"0 0 0 6px rgba(249,115,22,.12)",
              animation:"float 5s ease-in-out infinite",
              background:"#1a1a1a",flexShrink:0
            }}>
              <img src="/ishara.jpeg" alt="Ishara"
                style={{width:"100%",height:"100%",objectFit:"cover"}}
                onError={e=>{e.target.style.display="none";}}/>
            </div>

            {/* icon row */}
            <div className="hero-icons" style={{display:"flex",gap:"12px"}}>
              <a href="https://github.com/ishara425" target="_blank" rel="noreferrer" className="icon-btn" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/ishara-palangasinghe" target="_blank" rel="noreferrer" className="icon-btn" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* CV download icon button */}
              <button className="icon-btn" onClick={handleCV} title="Download CV">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Text */}
          <div style={{flex:1}}>
            <h1 className="fade d1" style={{fontSize:"clamp(36px,5.5vw,64px)",fontWeight:800,lineHeight:1.1,letterSpacing:"-.03em",marginBottom:"12px",color:"#f0f0f0"}}>
              Hi, I'm{" "}
              <span style={{color:"#f97316"}}>Ishara<br/>Palangasinghe</span>
            </h1>

            <div className="fade d2" style={{fontSize:"16px",color:"#666",marginBottom:"20px",minHeight:"24px",fontFamily:"monospace"}}>
              <span style={{color:"#f97316"}}>$ </span>
              <span style={{color:"#ccc"}}>{typed}</span>
              <span style={{opacity:cursor?1:0,color:"#f97316"}}>|</span>
            </div>

            <p className="fade d3" style={{fontSize:"15.5px",color:"#666",lineHeight:1.85,maxWidth:"520px",marginBottom:"32px"}}>
              Final-year ICT undergraduate at the University of Ruhuna with hands-on experience
              building full-stack web applications using React, Spring Boot, and Node.js.
              Expanding expertise into cloud infrastructure with AWS and DevOps practices.
              Driven by a passion for clean architecture, scalable systems, and delivering
              real-world impact through technology.
            </p>

            <div className="fade d4" style={{display:"flex",gap:"14px",flexWrap:"wrap"}}>
              <button className="btn-solid" onClick={()=>scrollTo("projects")}>View Projects</button>
              <button className="btn-border" onClick={()=>scrollTo("contact")}>Contact Me</button>
              {/* CV download text button in hero */}
              <button className="btn-border" onClick={handleCV} style={{display:"inline-flex",alignItems:"center",gap:"8px"}}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/>
                </svg>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about" style={{padding:"80px 6%",borderTop:"1px solid #1a1a1a"}}>
        <div style={{maxWidth:"860px",margin:"0 auto"}}>
          <h2 className="sec-title">About Me</h2>

          {/* bio + skills card */}
          <div className="card" style={{marginBottom:"20px"}}>
            <p style={{fontSize:"15px",color:"#888",lineHeight:1.85,marginBottom:"28px"}}>
              I’m a final-year BICT (Hons) undergraduate with hands-on experience in full-stack development
               and a strong passion for building modern, scalable web applications. I have worked with technologies such as React, Spring Boot, Node.js, MySQL, and RESTful APIs through academic and personal projects.
I’m also interested in cloud computing and have gained practical exposure to AWS and Azure through workshops and hands-on learning. I enjoy learning new technologies,
 solving real-world problems, and working in collaborative environments using Agile development practices.
Currently, I’m looking for opportunities to contribute as a Software Engineering or Full-Stack Development 
Intern while growing as a developer in a professional environment.
</p>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"}}>
              <div>
                <h3 style={{fontWeight:700,fontSize:"15px",color:"#e0e0e0",marginBottom:"12px"}}>Frontend</h3>
                <div>{FRONTEND_SKILLS.map(s=><span key={s} className="tag">{s}</span>)}</div>
              </div>
              <div>
                <h3 style={{fontWeight:700,fontSize:"15px",color:"#e0e0e0",marginBottom:"12px"}}>Backend & Cloud</h3>
                <div>{BACKEND_SKILLS.map(s=><span key={s} className="tag">{s}</span>)}</div>
              </div>
            </div>
          </div>

          {/* Education + Achievements */}
          <div className="about-bottom" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
            <div className="card">
              <h3 style={{fontWeight:700,fontSize:"15px",color:"#e0e0e0",marginBottom:"14px"}}>🎓&nbsp; Education</h3>
              <ul style={{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:"10px"}}>
                <li style={{display:"flex",gap:"8px",alignItems:"flex-start"}}>
                  <span style={{color:"#f97316",marginTop:"4px",flexShrink:0}}>•</span>
                  <span style={{fontSize:"14px",color:"#888",lineHeight:1.7}}>
                    <strong style={{color:"#d0d0d0"}}>BICT (Hons)</strong> – University of Ruhuna, Matara, Sri Lanka (2022 – Present)
                  </span>
                </li>
                <li style={{display:"flex",gap:"8px",alignItems:"flex-start"}}>
                  <span style={{color:"#f97316",marginTop:"4px",flexShrink:0}}>•</span>
                  <span style={{fontSize:"14px",color:"#888",lineHeight:1.7}}>
                    Relevant Coursework: Data Structures, Web Development, Cloud Computing
                  </span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{fontWeight:700,fontSize:"15px",color:"#e0e0e0",marginBottom:"14px"}}>🏆&nbsp; Achievements</h3>
              <div style={{display:"flex",gap:"12px",alignItems:"flex-start"}}>
                <div style={{
                  flexShrink:0,width:"42px",height:"42px",borderRadius:"10px",
                  background:"rgba(249,115,22,.1)",border:"1px solid rgba(249,115,22,.25)",
                  display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"
                }}>🥇</div>
                <div>
                  <p style={{fontSize:"14px",color:"#d0d0d0",fontWeight:700,lineHeight:1.5,marginBottom:"6px"}}>
                    1st Place — Hacktrail 1.0
                  </p>
                  <p style={{fontSize:"13px",color:"#666",lineHeight:1.4,marginBottom:"8px"}}>
                    ICT Students' Circle · University of Ruhuna
                  </p>
                  <p style={{fontSize:"13.5px",color:"#888",lineHeight:1.7}}>
                    Champions of an intense problem-solving hackathon on HackerRank, competing across multiple programming languages with team <strong style={{color:"#c0c0c0"}}>'Ones &amp; Zeros'</strong> 
                  </p>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </section>

      {/* ═══════════════ PROJECTS ═══════════════ */}
      <section id="projects" style={{padding:"80px 6%",borderTop:"1px solid #1a1a1a",background:"#080808"}}>
        <div style={{maxWidth:"1000px",margin:"0 auto"}}>
          <h2 className="sec-title">Featured Projects</h2>

          <div className="projects-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
            {PROJECTS.map(proj=>(
              <div key={proj.title} className="card">
                <h3 style={{fontSize:"16px",fontWeight:700,color:"#e8e8e8",marginBottom:"12px",lineHeight:1.4}}>
                  {proj.title}
                </h3>
                <p style={{fontSize:"14px",color:"#777",lineHeight:1.75,marginBottom:"16px"}}>
                  {proj.desc}
                </p>
                <div style={{marginBottom:"16px"}}>
                  {proj.tech.map(t=><span key={t} className="tag">{t}</span>)}
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer" className="view-link">
                  View Project →
                </a>
              </div>
            ))}
          </div>

          <div style={{textAlign:"center",marginTop:"32px"}}>
            <a href="https://github.com/ishara425" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
              <button className="btn-border">View All on GitHub →</button>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section id="contact" style={{padding:"80px 6%",borderTop:"1px solid #1a1a1a"}}>
        <div style={{maxWidth:"600px",margin:"0 auto",textAlign:"center"}}>
          <h2 className="sec-title">Contact Me</h2>
          <p style={{fontSize:"15px",color:"#666",lineHeight:1.85,marginBottom:"36px"}}>
            Open to collaborations, internships, or just a chat about tech. Reach out anytime!
          </p>

          <div style={{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"28px"}}>
            {[
              {icon:"📧",label:"Email",   val:"isharapalangasingha@gmail.com",href:"mailto:isharapalangasingha@gmail.com"},
              {icon:"💼",label:"LinkedIn",val:"linkedin.com/in/ishara-palangasinghe",href:"https://linkedin.com/in/ishara-palangasinghe"},
              {icon:"🐙",label:"GitHub",  val:"github.com/ishara425",href:"https://github.com/ishara425"},
            ].map(item=>(
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                style={{display:"flex",alignItems:"center",gap:"14px",padding:"16px 20px",
                  background:"#111",border:"1px solid #222",borderRadius:"10px",
                  textDecoration:"none",color:"#ccc",fontWeight:600,fontSize:"14px",transition:"all .2s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#f97316";e.currentTarget.style.color="#f97316";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#222";e.currentTarget.style.color="#ccc";}}>
                <span style={{fontSize:"22px"}}>{item.icon}</span>
                <div style={{textAlign:"left"}}>
                  <div style={{fontWeight:700}}>{item.label}</div>
                  <div style={{fontSize:"12px",color:"#555",marginTop:"2px"}}>{item.val}</div>
                </div>
                <span style={{marginLeft:"auto",opacity:.3}}>→</span>
              </a>
            ))}
          </div>

         
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer style={{borderTop:"1px solid #1a1a1a",padding:"24px 6%"}}>
        <div style={{maxWidth:"1100px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
          <span style={{fontWeight:800,fontSize:"15px"}}>
            <span style={{color:"#e0e0e0"}}>ishara</span><span style={{color:"#f97316"}}>.dev</span>
          </span>
          <span style={{fontSize:"12px",color:"#333"}}>© 2025 Ishara Palangasinghe</span>
          <div style={{display:"flex",gap:"20px"}}>
            {[{l:"GitHub",h:"https://github.com/ishara425"},{l:"LinkedIn",h:"https://linkedin.com/in/ishara-palangasinghe"},{l:"Email",h:"mailto:isharapalangasingha@gmail.com"}].map(s=>(
              <a key={s.l} href={s.h} target="_blank" rel="noreferrer"
                style={{fontSize:"12px",color:"#444",textDecoration:"none",fontWeight:600,transition:"color .2s"}}
                onMouseEnter={e=>e.target.style.color="#f97316"}
                onMouseLeave={e=>e.target.style.color="#444"}>{s.l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}