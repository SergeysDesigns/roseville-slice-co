import { useState, useEffect, useRef } from "react";
import content from "./content.js";

/* ═══════════════════════════════════════════
   HOOKS & HELPERS
   ═══════════════════════════════════════════ */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Fade({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

const section = (extra = {}) => ({
  padding: "clamp(60px, 10vw, 120px) clamp(24px, 5vw, 80px)",
  ...extra,
});

const label = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "11px",
  letterSpacing: "4px",
  textTransform: "uppercase",
  color: "var(--tomato)",
  marginBottom: "16px",
  fontWeight: 600,
};

const heading = (extra = {}) => ({
  fontFamily: "'Playfair Display', serif",
  fontSize: "clamp(30px, 5vw, 48px)",
  fontWeight: 400,
  lineHeight: 1.2,
  ...extra,
});

/* ═══════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,249,242,0.95)" : "rgba(0,0,0,0.15)",
      backdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
      borderBottom: scrolled ? "1px solid var(--light-border)" : "1px solid transparent",
      transition: "all 0.35s ease",
      padding: "0 clamp(24px, 5vw, 80px)",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "64px",
      }}>
        <a href="#" style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "18px", fontWeight: 700, textDecoration: "none",
          color: scrolled ? "var(--charcoal)" : "white",
          letterSpacing: "-0.5px",
          transition: "color 0.3s",
        }}>
          Roseville <span style={{ color: "var(--tomato)" }}>Slice</span> Co.
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 32px)" }}>
          {["Pies", "Menu", "Catering"].map((t) => (
            <a key={t} href={`#${t.toLowerCase()}`} style={{
              fontSize: "13px", fontWeight: 500,
              color: scrolled ? "var(--charcoal)" : "rgba(255,255,255,0.85)",
              textDecoration: "none", letterSpacing: "0.5px",
              transition: "color 0.2s",
            }}
              onMouseEnter={(e) => e.target.style.color = "var(--tomato)"}
              onMouseLeave={(e) => e.target.style.color = scrolled ? "var(--charcoal)" : "rgba(255,255,255,0.85)"}
            >{t}</a>
          ))}
          <a href="#order" style={{
            fontSize: "12px", fontWeight: 600, letterSpacing: "1px",
            textTransform: "uppercase", textDecoration: "none",
            background: "var(--tomato)", color: "white",
            padding: "10px 20px", borderRadius: "4px",
            transition: "background 0.2s",
          }}
            onMouseEnter={(e) => e.target.style.background = "var(--tomato-light)"}
            onMouseLeave={(e) => e.target.style.background = "var(--tomato)"}
          >Order</a>
        </div>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════
   HERO — Full viewport
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <div style={{
      height: "100vh", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${content.images.hero})`,
        backgroundSize: "cover", backgroundPosition: "center",
        animation: "slowZoom 20s ease forwards",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)",
      }} />
      <div style={{
        position: "relative", height: "100%",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        textAlign: "center",
        padding: "0 clamp(24px, 5vw, 80px)",
      }}>
        <div style={{ animation: "fadeUp 0.9s ease 0.3s both", maxWidth: "700px" }}>
          <div style={{
            fontSize: "11px", letterSpacing: "6px",
            textTransform: "uppercase", color: "var(--tomato-light)",
            marginBottom: "20px", fontWeight: 600,
          }}>
            {content.cuisine} &middot; {content.location}
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px, 9vw, 96px)",
            fontWeight: 400, lineHeight: 1.05,
            color: "white", marginBottom: "16px",
          }}>
            Roseville<br />
            <span style={{ fontStyle: "italic", color: "var(--tomato-light)" }}>Slice</span> Co.
          </h1>
          <div style={{
            width: "60px", height: "2px", background: "var(--tomato)",
            margin: "24px auto",
          }} />
          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 300, color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 36px",
          }}>
            {content.subtitle}
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#menu" style={{
              display: "inline-block", padding: "14px 36px",
              background: "var(--tomato)", color: "white",
              textDecoration: "none", fontSize: "13px",
              fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase",
              borderRadius: "4px", transition: "background 0.2s",
            }}
              onMouseEnter={(e) => e.target.style.background = "var(--tomato-light)"}
              onMouseLeave={(e) => e.target.style.background = "var(--tomato)"}
            >See the Menu</a>
            <a href="#order" style={{
              display: "inline-block", padding: "14px 36px",
              background: "transparent", color: "white",
              textDecoration: "none", fontSize: "13px",
              fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase",
              borderRadius: "4px", border: "1.5px solid rgba(255,255,255,0.4)",
              transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,0.1)"; e.target.style.borderColor = "rgba(255,255,255,0.7)"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(255,255,255,0.4)"; }}
            >Order Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   SIGNATURE PIES — Card grid
   ═══════════════════════════════════════════ */
function SignaturePies() {
  return (
    <div id="pies" style={section()}>
      <Fade>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={label}>Our Pies</div>
          <h2 style={heading()}>
            Straight From the <span style={{ fontStyle: "italic", color: "var(--tomato)" }}>Oven</span>
          </h2>
        </div>
      </Fade>

      <div className="pies-grid" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {content.signaturePies.map((pie, i) => (
          <Fade key={i} delay={i * 0.08}>
            <div style={{
              background: "var(--card-bg)", borderRadius: "8px",
              overflow: "hidden", border: "1px solid var(--light-border)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ height: "220px", overflow: "hidden" }}>
                <img src={pie.image} alt={pie.name} loading="lazy" style={{
                  width: "100%", height: "100%", objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px", fontWeight: 400, marginBottom: "8px",
                }}>{pie.name}</h3>
                <p style={{
                  fontSize: "14px", color: "var(--warm-gray)",
                  fontWeight: 300, lineHeight: 1.5,
                }}>{pie.desc}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MENU — Tabbed with multi-tier pricing
   ═══════════════════════════════════════════ */
function FullMenu() {
  const [activeTab, setActiveTab] = useState(content.menuCategories[0].id);
  const isPizza = activeTab === "pizzas";

  return (
    <div id="menu" style={{
      ...section({ background: "white" }),
      maxWidth: "900px",
      margin: "0 auto",
    }}>
      <Fade>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={label}>Full Menu</div>
          <h2 style={heading()}>
            Every Slice <span style={{ fontStyle: "italic", color: "var(--basil)" }}>Counts</span>
          </h2>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: "clamp(14px, 3vw, 36px)", marginBottom: "48px", flexWrap: "wrap",
        }}>
          {content.menuCategories.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase",
              fontWeight: 600,
              color: activeTab === tab.id ? "var(--tomato)" : "var(--warm-gray)",
              paddingBottom: "8px",
              borderBottom: activeTab === tab.id ? "2px solid var(--tomato)" : "2px solid transparent",
              transition: "all 0.3s ease",
            }}>{tab.label}</button>
          ))}
        </div>

        {/* Pizza size header */}
        {isPizza && (
          <div style={{
            display: "flex", justifyContent: "flex-end",
            gap: "0", marginBottom: "16px",
            paddingRight: "4px",
          }}>
            {["Slice", "Med 12\"", "Lg 16\""].map((s) => (
              <span key={s} style={{
                fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase",
                color: "var(--warm-gray)", fontWeight: 600,
                width: "64px", textAlign: "center",
              }}>{s}</span>
            ))}
          </div>
        )}

        {/* Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {(content.menuItems[activeTab] || []).map((item, i) => (
            <div key={`${activeTab}-${i}`} style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "center", gap: "16px",
              animation: `fadeUp 0.5s ease ${i * 0.06}s both`,
              padding: "18px 0",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                  <h4 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px", fontWeight: 400,
                  }}>{item.name}</h4>
                  {item.popular && (
                    <span style={{
                      fontSize: "9px", letterSpacing: "1.5px", textTransform: "uppercase",
                      background: "var(--basil)", color: "white", fontWeight: 600,
                      padding: "3px 8px", borderRadius: "2px",
                    }}>Popular</span>
                  )}
                </div>
                <p style={{
                  color: "var(--warm-gray)", fontSize: "14px",
                  fontWeight: 300, lineHeight: 1.5,
                }}>{item.desc}</p>
              </div>
              {isPizza ? (
                <div style={{ display: "flex", gap: "0", flexShrink: 0 }}>
                  {[item.slice, item.med, item.lg].map((p, j) => (
                    <span key={j} style={{
                      fontFamily: "'Playfair Display', serif",
                      color: j === 0 ? "var(--warm-gray)" : "var(--tomato)",
                      fontSize: j === 0 ? "15px" : "16px",
                      fontWeight: 400,
                      width: "64px", textAlign: "center",
                    }}>${p}</span>
                  ))}
                </div>
              ) : (
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--tomato)", fontSize: "17px",
                  flexShrink: 0, fontWeight: 400,
                }}>${item.price}</span>
              )}
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}

/* ═══════════════════════════════════════════
   CATERING CTA
   ═══════════════════════════════════════════ */
function Catering() {
  return (
    <div id="catering" style={{
      position: "relative", overflow: "hidden",
      padding: "clamp(60px, 10vw, 100px) clamp(24px, 5vw, 80px)",
      background: "var(--charcoal)", color: "var(--cream)",
      textAlign: "center",
    }}>
      <Fade>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ ...label, color: "var(--tomato-light)" }}>Catering</div>
          <h2 style={{
            ...heading({ color: "var(--cream)", marginBottom: "20px" }),
          }}>
            {content.cateringHeading}
          </h2>
          <p style={{
            fontSize: "16px", color: "rgba(255,255,255,0.55)",
            fontWeight: 300, lineHeight: 1.8, marginBottom: "32px",
          }}>
            {content.cateringText}
          </p>
          <a href={`mailto:${content.cateringEmail}`} style={{
            display: "inline-block", padding: "14px 36px",
            background: "var(--tomato)", color: "white",
            textDecoration: "none", fontSize: "13px",
            fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase",
            borderRadius: "4px", transition: "background 0.2s",
          }}
            onMouseEnter={(e) => e.target.style.background = "var(--tomato-light)"}
            onMouseLeave={(e) => e.target.style.background = "var(--tomato)"}
          >Get a Quote</a>
        </div>
      </Fade>
    </div>
  );
}

/* ═══════════════════════════════════════════
   VISIT / FOOTER
   ═══════════════════════════════════════════ */
function Visit() {
  return (
    <>
      <div id="order" style={{
        background: "var(--cream)",
        padding: "clamp(60px, 10vw, 100px) clamp(24px, 5vw, 80px)",
      }}>
        <Fade>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(40px, 5vw, 64px)",
            maxWidth: "950px", margin: "0 auto", textAlign: "center",
          }}>
            <div>
              <div style={label}>Hours</div>
              <div style={{ color: "var(--warm-gray)", fontSize: "15px", lineHeight: 2.1, fontWeight: 300 }}>
                {content.hours.map((h, i) => <div key={i}>{h}</div>)}
              </div>
            </div>
            <div>
              <div style={label}>Location</div>
              <div style={{ color: "var(--warm-gray)", fontSize: "15px", lineHeight: 2.1, fontWeight: 300 }}>
                <div>{content.address.street}</div>
                <div>{content.address.suite}</div>
                <div>{content.address.city}</div>
                <div style={{ marginTop: "8px" }}>{content.phone}</div>
              </div>
            </div>
            <div>
              <div style={label}>Order</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", marginTop: "8px" }}>
                {content.orderPickupUrl && (
                  <a href={content.orderPickupUrl} style={{
                    background: "var(--tomato)", color: "white", border: "none",
                    fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase",
                    padding: "13px 32px", fontWeight: 600,
                    textDecoration: "none", textAlign: "center",
                    width: "100%", maxWidth: "200px", borderRadius: "4px",
                    transition: "background 0.2s",
                  }}
                    onMouseEnter={(e) => e.target.style.background = "var(--tomato-light)"}
                    onMouseLeave={(e) => e.target.style.background = "var(--tomato)"}
                  >Order Pickup</a>
                )}
                {content.orderDeliveryUrl && (
                  <a href={content.orderDeliveryUrl} style={{
                    background: "transparent", color: "var(--tomato)",
                    border: "1px solid var(--tomato)",
                    fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase",
                    padding: "13px 32px",
                    textDecoration: "none", textAlign: "center",
                    width: "100%", maxWidth: "200px", borderRadius: "4px",
                    transition: "all 0.2s",
                  }}
                    onMouseEnter={(e) => { e.target.style.background = "var(--tomato)"; e.target.style.color = "white"; }}
                    onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "var(--tomato)"; }}
                  >Order Delivery</a>
                )}
              </div>
            </div>
          </div>
        </Fade>
      </div>

      {/* Footer */}
      <div style={{
        background: "var(--charcoal)",
        textAlign: "center", padding: "32px 24px",
      }}>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "18px", fontWeight: 700, color: "var(--cream)",
          marginBottom: "8px", letterSpacing: "-0.5px",
        }}>
          Roseville <span style={{ color: "var(--tomato)" }}>Slice</span> Co.
        </div>
        <div style={{
          fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.3)",
          textTransform: "uppercase",
        }}>
          &copy; {new Date().getFullYear()} {content.name} &middot; {content.location} &middot; All Rights Reserved
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <SignaturePies />
      <FullMenu />
      <Catering />
      <Visit />
    </>
  );
}
