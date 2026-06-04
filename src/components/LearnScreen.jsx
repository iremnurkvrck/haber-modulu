import React, { useState } from "react";
import { learnSteps } from "../data/moduleData";
import {
  TopBar,
  ProgressBar,
  PhaseSteps,
  Card,
  Btn,
  FlexEnd,
  SectionLabel,
  Alert,
} from "./UI";

export default function LearnScreen({ onFinish, onNavigate }) {
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState([]);

  const step = learnSteps[idx];
  const pct = 38 + (idx / learnSteps.length) * 20;

  function markDone(i) {
    if (!done.includes(i)) setDone((prev) => [...prev, i]);
  }

  function next() {
    markDone(idx);
    setIdx(idx + 1);
  }

  function prev() {
    setIdx(idx - 1);
  }

  function jump(i) {
    markDone(idx);
    setIdx(i);
  }

  return (
    <div className="screen active">
      <TopBar phaseLabel={`Öğretim – ${step.label}`} />
      <ProgressBar pct={pct} />
      <div className="container">
        <PhaseSteps active="learn" onNavigate={onNavigate} />

        <div className="steps-nav">
          {learnSteps.map((s, i) => {
            const cls = i === idx ? "active" : done.includes(i) ? "done" : "";
            return (
              <div
                key={s.id}
                className={`step-dot ${cls}`}
                onClick={() => jump(i)}
              >
                {s.id}
              </div>
            );
          })}
        </div>

        <Card>
          <div className="learn-header">
            <div className="step-badge">
              {step.label}
              <span style={{ fontSize: "0.62rem", opacity: 0.55 }}>
                <br />
                {step.duration}
              </span>
            </div>
            <div>
              <SectionLabel>Öğretim İçeriği</SectionLabel>
              <h2
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                {step.title}
              </h2>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
                {step.subskills.length} alt beceri
              </p>
            </div>
          </div>

          <Alert type="info">
            <strong>Bu adımda öğrenecekleriniz:</strong>
            <br />
            {step.subskills.map((s) => `• ${s}`).join("\n")}
          </Alert>

          <hr className="div" />
          <SectionLabel>Bilgi</SectionLabel>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.7,
              whiteSpace: "pre-line",
            }}
          >
            {step.info}
          </p>

          {step.chips.length > 0 && (
            <div className="tip-row">
              {step.chips.map((c) => (
                <div key={c} className="tip-chip">
                  {c}
                </div>
              ))}
            </div>
          )}

          <hr className="div" />
          <SectionLabel>Örnek Senaryo</SectionLabel>
          <div className="example-box">
            <strong className="lbl">Örnek</strong>
            <span style={{ whiteSpace: "pre-line" }}>{step.example}</span>
            {step.image && (
              <img
                src={step.image}
                alt={step.label}
                style={{
                  width: "100%",
                  borderRadius: 8,
                  marginTop: 12,
                  border: "1px solid var(--border)",
                }}
              />
            )}
          </div>
        </Card>

        <FlexEnd>
          {idx > 0 && (
            <Btn variant="secondary" onClick={prev}>
              ← Geri
            </Btn>
          )}
          {idx < learnSteps.length - 1 ? (
            <Btn variant="primary" onClick={next}>
              Sonraki Adım →
            </Btn>
          ) : (
            <Btn
              variant="success"
              onClick={() => {
                markDone(idx);
                onFinish();
              }}
            >
              Uygulamaya Geç →
            </Btn>
          )}
        </FlexEnd>
      </div>
    </div>
  );
}
