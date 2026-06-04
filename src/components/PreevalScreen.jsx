import React, { useState } from "react";
import { preevalQs } from "../data/moduleData";
import {
  TopBar,
  ProgressBar,
  PhaseSteps,
  PhaseBanner,
  Card,
  Btn,
  FlexEnd,
  ScoreCircle,
  SectionLabel,
  Alert,
} from "./UI";

// ─── ÖN DEĞERLENDİRME GİRİŞ ─────────────────────────────────────────────────
export function PreevalIntro({ onStart, onNavigate }) {
  return (
    <div className="screen active">
      <TopBar phaseLabel="Ön Değerlendirme" />
      <ProgressBar pct={4} />
      <div className="container">
        <PhaseSteps active="preeval" onNavigate={onNavigate} />
        <PhaseBanner
          icon="🔍"
          title="Ön Değerlendirme"
          subtitle="Modüle başlamadan önce temel dijital becerilerinizi ölçen 4 soruluk kısa bir değerlendirme. Not amaçlı değildir."
        />
        <Card>
          <SectionLabel>Bu değerlendirmede ölçülenler</SectionLabel>
          <ul className="checklist">
            <li>Sosyal medya hesabı geçmişini inceleme becerisi</li>
            <li>İnternet tarayıcısı ve arama motoru kullanımı</li>
            <li>Görsel üzerinde menü açma</li>
            <li>Haber içeriğini kişisel paylaşımdan ayırt edebilme</li>
          </ul>
          <Alert type="info">
            Sonuçlara göre bazı öğrenenlere eksik olduğu konu hakkında kısa bir
            bilgi verilecektir.
          </Alert>
        </Card>
        <FlexEnd>
          <Btn variant="primary" onClick={onStart}>
            Değerlendirmeye Başla →
          </Btn>
        </FlexEnd>
      </div>
    </div>
  );
}

export function PreevalQuestions({ onFinish, onNavigate }) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const [score, setScore] = useState(0);

  const q = preevalQs[idx];
  const isRevealed = revealed[q.id];
  const selected = answers[q.id];
  const pct = 8 + (idx / preevalQs.length) * 10;

  function selectOpt(i) {
    if (isRevealed) return;
    setAnswers((prev) => ({ ...prev, [q.id]: i }));
  }

  function reveal() {
    if (selected === undefined) return;
    setRevealed((prev) => ({ ...prev, [q.id]: true }));
    if (selected === q.correct) setScore((s) => s + 1);
  }

  function next() {
    if (idx < preevalQs.length - 1) setIdx(idx + 1);
    else onFinish(score + (selected === q.correct && !revealed[q.id] ? 1 : 0));
  }

  function finish() {
    onFinish(score);
  }

  return (
    <div className="screen active">
      <TopBar phaseLabel="Ön Değerlendirme" />
      <ProgressBar pct={pct} />
      <div className="container">
        <PhaseSteps active="preeval" onNavigate={onNavigate} />
        <PhaseBanner
          icon="📋"
          title="Ön Değerlendirme"
          subtitle={`Soru ${idx + 1} / ${preevalQs.length} · ${q.skill}`}
        />
        <Card>
          <div className="q-num">{idx + 1}</div>
          {q.aim && <div className="q-aim">Ölçülen beceri: {q.aim}</div>}
          <div className="q-text">{q.text}</div>
          <div className="options">
            {q.opts.map((opt, i) => {
              let cls = "";
              if (isRevealed) {
                if (i === q.correct) cls = " correct";
                else if (selected === i) cls = " wrong";
              } else if (selected === i) cls = " selected";
              return (
                <div
                  key={i}
                  className={`option${cls}`}
                  onClick={() => selectOpt(i)}
                >
                  <div className="opt-letter">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span>{opt}</span>
                </div>
              );
            })}
          </div>
          {isRevealed && (
            <div className={`fb show ${selected === q.correct ? "ok" : "err"}`}>
              {selected === q.correct ? `✓ ${q.fbok}` : `✗ ${q.fberr}`}
            </div>
          )}
        </Card>

        <FlexEnd>
          {!isRevealed ? (
            <Btn
              variant="primary"
              onClick={reveal}
              disabled={selected === undefined}
            >
              Yanıtı Kontrol Et
            </Btn>
          ) : idx < preevalQs.length - 1 ? (
            <Btn variant="primary" onClick={next}>
              Sonraki →
            </Btn>
          ) : (
            <Btn variant="success" onClick={finish}>
              Değerlendirmeyi Tamamla ✓
            </Btn>
          )}
        </FlexEnd>
      </div>
    </div>
  );
}

export function PreevalResult({ score, onNext, onNavigate }) {
  const [videoDone, setVideoDone] = useState(false);
  const msgs = [
    "Temel becerilerde önemli eksiklikler tespit edildi. Lütfen aşağıdaki yönlendirme videosunu izleyiniz.",
    "Bazı temel becerilerde eksiklik var. Eksik konular hakkında kısa bir bilgilendirme yapılacaktır.",
    "İyi! Ön teste geçebilirsiniz.",
    "Mükemmel! Tüm giriş davranışlarına sahipsiniz, ön teste geçebilirsiniz.",
  ];
  const showVideo = score <= 2;

  return (
    <div className="screen active">
      <TopBar phaseLabel="Ön Değerlendirme" />
      <ProgressBar pct={18} />
      <div className="container">
        <div className="text-center" style={{ marginBottom: 28 }}>
          <ScoreCircle score={score} total={4} />
          <h2
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "1.45rem",
              marginBottom: 6,
            }}
          >
            Ön Değerlendirme Tamamlandı
          </h2>
          <p className="text-muted">{msgs[Math.min(score, 3)]}</p>
        </div>

        {showVideo && (
          <Card>
            <Alert type="warn">
              Temel becerilerde eksiklik tespit edildi. Ön teste geçmeden
              bilgilendirmeyi dinlemeniz önerilir.
            </Alert>

            {videoDone && (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.82rem",
                  color: "var(--success)",
                  marginTop: 6,
                }}
              ></p>
            )}
          </Card>
        )}

        <FlexEnd>
          <Btn variant="primary" onClick={onNext}>
            Ön Teste Geç →
          </Btn>
        </FlexEnd>
      </div>
    </div>
  );
}
