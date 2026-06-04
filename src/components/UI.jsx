import React from "react";
import { PHASE_ORDER, PHASE_LABELS } from "../data/moduleData";

// ─── PROGRESS BAR ────────────────────────────────────────────────────────────
export function ProgressBar({ pct }) {
  return (
    <div className="progress-wrap">
      <div className="progress-bar" style={{ width: `${pct}%` }} />
    </div>
  );
}

// ─── TOP BAR ─────────────────────────────────────────────────────────────────
export function TopBar({ phaseLabel }) {
  return (
    <div className="topbar">
      <span className="topbar-title">Haber Güvenilirliği Modülü</span>
      <span className="topbar-phase">{phaseLabel}</span>
    </div>
  );
}

// ─── PHASE STEPS INDICATOR ───────────────────────────────────────────────────
export function PhaseSteps({ active, onNavigate }) {
  const phases = [
    "preeval",
    "pretest",
    "learn",
    "practice",
    "posttest",
    "attitude",
  ];
  const activeIdx = PHASE_ORDER.indexOf(active);

  const phaseEntry = {
    preeval: "preeval-intro",
    pretest: "pretest",
    learn: "learn",
    practice: "practice",
    posttest: "posttest",
    attitude: "attitude",
  };

  return (
    <div className="phase-steps">
      {phases.map((p, i) => {
        const pIdx = PHASE_ORDER.indexOf(p);
        const cls = p === active ? "active" : pIdx < activeIdx ? "done" : "";
        const clickable = onNavigate && p !== active;
        return (
          <React.Fragment key={p}>
            <div
              className={`ps-chip ${cls}${clickable ? " clickable" : ""}`}
              onClick={clickable ? () => onNavigate(phaseEntry[p]) : undefined}
              title={clickable ? `${PHASE_LABELS[p]} adımına git` : undefined}
            >
              {PHASE_LABELS[p]}
            </div>
            {i < phases.length - 1 && <div className="ps-arrow">›</div>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── PHASE BANNER ────────────────────────────────────────────────────────────
export function PhaseBanner({ icon, title, subtitle }) {
  return (
    <div className="phase-banner">
      <div className="phase-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

// ─── CARD ────────────────────────────────────────────────────────────────────
export function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

// ─── RUBRIC TABLE ─────────────────────────────────────────────────────────────
export function RubricTable({ rubric }) {
  return (
    <div className="rubric-wrap">
      <table className="rubric">
        <thead>
          <tr>
            <th>Kriter</th>
            <th>İyi (3)</th>
            <th>Orta (2)</th>
            <th>Zayıf (1)</th>
          </tr>
        </thead>
        <tbody>
          {rubric.map((r) => (
            <tr key={r.k}>
              <td>
                <strong>{r.k}</strong>
              </td>
              <td>
                <span className="b3">İyi (3)</span> {r.iyi}
              </td>
              <td>
                <span className="b2">Orta (2)</span> {r.orta}
              </td>
              <td>
                <span className="b1">Zayıf (1)</span> {r.zayif}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── SCENARIO BOX ────────────────────────────────────────────────────────────
export function ScenarioBox({ text, gorsel, link }) {
  return (
    <div className="scenario-box">
      <h4>Senaryo</h4>
      <p>{text}</p>
      {gorsel && (
        <img
          src={gorsel}
          alt="Senaryo görseli"
          style={{
            width: "100%",
            borderRadius: 8,
            marginTop: 14,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 10,
            fontSize: "1rem",
            color: "var(--accent)",
            fontWeight: 600,
          }}
        >
          🔗 Habere Git →
        </a>
      )}
    </div>
  );
}

// ─── ALERT ───────────────────────────────────────────────────────────────────
export function Alert({ type = "info", children }) {
  return <div className={`alert alert-${type}`}>{children}</div>;
}

// ─── BUTTONS ─────────────────────────────────────────────────────────────────
export function Btn({
  variant = "primary",
  size = "",
  onClick,
  disabled,
  children,
  className = "",
}) {
  return (
    <button
      className={`btn btn-${variant} ${size ? `btn-${size}` : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function FlexEnd({ children }) {
  return <div className="flex-end">{children}</div>;
}

// ─── SCORE CIRCLE ────────────────────────────────────────────────────────────
export function ScoreCircle({ score, total }) {
  return (
    <div className="score-circle">
      <span className="num">{score}</span>
      <span className="den">/ {total}</span>
    </div>
  );
}

// ─── SECTION LABEL ───────────────────────────────────────────────────────────
export function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}
