import React, { useState } from "react";
import {
  TopBar,
  ProgressBar,
  PhaseSteps,
  PhaseBanner,
  Card,
  RubricTable,
  ScenarioBox,
  Alert,
  Btn,
  FlexEnd,
  SectionLabel,
} from "./UI";

export default function TestScreen({
  questions,
  phase,
  phaseLabel,
  icon,
  bannerTitle,
  bannerSub,
  pctStart,
  pctRange,
  infoAlert,
  onFinish,
  onNavigate,
}) {
  const [idx, setIdx] = useState(0);
  const [responses, setResponses] = useState({});

  const q = questions[idx];
  const pct = pctStart + (idx / questions.length) * pctRange;

  function save(val) {
    setResponses((prev) => ({ ...prev, [q.id]: val }));
  }

  function next() {
    if (idx < questions.length - 1) setIdx(idx + 1);
  }

  function prev() {
    if (idx > 0) setIdx(idx - 1);
  }

  function finish() {
    onFinish(responses);
  }

  return (
    <div className="screen active">
      <TopBar phaseLabel={phaseLabel} />
      <ProgressBar pct={pct} />
      <div className="container">
        <PhaseSteps active={phase} onNavigate={onNavigate} />
        <PhaseBanner
          icon={icon}
          title={bannerTitle}
          subtitle={`Soru ${idx + 1} / ${questions.length} · ${q.hedef}`}
        />

        {infoAlert}

        <Card>
          <ScenarioBox
            text={q.senaryo}
            gorsel={q.senaryoGorsel}
            link={q.link}
          />{" "}
          <p className="task-label">Görev</p>
          <p className="task-text">{q.gorev}</p>
        </Card>

        <FlexEnd>
          {idx > 0 && (
            <Btn variant="secondary" onClick={prev}>
              ← Geri
            </Btn>
          )}
          {idx < questions.length - 1 ? (
            <Btn variant="primary" onClick={next}>
              Sonraki Soru →
            </Btn>
          ) : (
            <Btn variant="success" onClick={finish}>
              {phase === "pretest" ? "Ön Testi Tamamla ✓" : "Modülü Tamamla ✓"}
            </Btn>
          )}
        </FlexEnd>
      </div>
    </div>
  );
}

export function PretestResult({ onNext }) {
  return (
    <div className="screen active">
      <TopBar phaseLabel="Ön Test" />
      <ProgressBar pct={34} />
      <div className="container">
        <PhaseBanner
          icon="📋"
          title="Ön Test Tamamlandı"
          subtitle="Tüm sorular tamamlandı. Öğretime geçebilirsiniz."
        />
        <Alert type="success">Ön test aşaması başarıyla tamamlandı.</Alert>
        <FlexEnd>
          <Btn variant="primary" onClick={onNext}>
            Öğretime Geç →
          </Btn>
        </FlexEnd>
      </div>
    </div>
  );
}
