import React, { useState } from "react";
import { pretestQs, posttestQs } from "../data/moduleData";
import { TopBar, ProgressBar, Card, Alert, SectionLabel, Btn } from "./UI";

const STEP_LABELS = [
  "Yayıncı Analizi",
  "Kaynak Doğrulama",
  "Başlık-İçerik Analizi",
  "Görsel Sorgulama",
  "Bağımsız Karşılaştırma",
];

const CHECKLIST_ITEMS = [
  {
    l: "Yayıncı Analizi",
    d: "Hesabın açılış tarihi, profil tutarlılığı ve geçmiş paylaşımlarını incele.",
  },
  {
    l: "Kaynak Doğrulama",
    d: "Kaynak var mı? Muğlak mı? Bağlantıya tıkla, kontrol et.",
  },
  {
    l: "Başlık-İçerik",
    d: "Duygusal dil var mı? Başlık ile içerik uyumlu mu?",
  },
  {
    l: "Görsel Sorgulama",
    d: 'Görsele uzun bas → "Görseli ara" → Orijinal bağlamı bul.',
  },
  {
    l: "Bağımsız Karşılaştırma",
    d: "Anahtar kelimelerle en az 2 bağımsız kaynakta ara.",
  },
];

export default function FinalScreen({ ptResponses, postResponses, onRestart }) {
  const [checked, setChecked] = useState([]);

  function toggleCheck(i) {
    setChecked((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );
  }

  return (
    <div className="screen active">
      <TopBar phaseLabel="Tamamlandı ✓" />
      <ProgressBar pct={100} />
      <div className="container">
        {/* Hero */}
        <div className="text-center" style={{ marginBottom: 32 }}>
          <div style={{ fontSize: "2.8rem", marginBottom: 10 }}>🎉</div>
          <SectionLabel>Modül Tamamlandı</SectionLabel>
          <h1
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "1.9rem",
              marginBottom: 6,
            }}
          >
            Tebrikler!
          </h1>
          <p className="text-muted">
            Haber güvenilirliği değerlendirme modülünü başarıyla tamamladınız.
          </p>
        </div>

        {/* Ön Test – Son Test Karşılaştırması */}
        <Card style={{ marginBottom: 18 }}>
          <SectionLabel>Ön Test – Son Test Karşılaştırması</SectionLabel>
          <p className="text-muted" style={{ marginBottom: 16 }}>
            Her hedef için ön test ve son test yanıtlarınız aşağıda yan yana
            gösterilmektedir.
          </p>
          {pretestQs.map((pq, i) => {
            const postQ = posttestQs[i];
            const pre = ptResponses[pq.id] || "";
            const post = postResponses[postQ.id] || "";
            const prePreview =
              pre.length > 70 ? pre.slice(0, 70) + "…" : pre || "—";
            const postPreview =
              post.length > 70 ? post.slice(0, 70) + "…" : post || "—";
            return (
              <div
                key={pq.id}
                style={{
                  background: "var(--warm)",
                  border: "1.5px solid var(--border)",
                  borderRadius: 10,
                  padding: "16px 18px",
                  marginBottom: 12,
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  {STEP_LABELS[i]}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      border: "1px solid var(--border)",
                      borderRadius: 7,
                      padding: "10px 12px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.66rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--accent2)",
                        marginBottom: 5,
                      }}
                    >
                      Ön Test
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {prePreview}
                    </p>
                  </div>
                  <div
                    style={{
                      background: "white",
                      border: "1px solid var(--border)",
                      borderRadius: 7,
                      padding: "10px 12px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.66rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--success)",
                        marginBottom: 5,
                      }}
                    >
                      Son Test
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      {postPreview}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Card>

        {/* Kontrol Listesi */}
        <Card style={{ marginBottom: 18 }}>
          <SectionLabel>📋 Haber Doğrulama Kontrol Listesi</SectionLabel>
          <p className="text-muted" style={{ marginBottom: 14 }}>
            Günlük kullanım için tıklayarak işaretleyin:
          </p>
          {CHECKLIST_ITEMS.map((ci, i) => (
            <div
              key={i}
              className={`check-item${checked.includes(i) ? " checked" : ""}`}
              onClick={() => toggleCheck(i)}
            >
              <div className="check-box">{checked.includes(i) ? "✓" : ""}</div>
              <p>
                <strong>{ci.l}:</strong> {ci.d}
              </p>
            </div>
          ))}
        </Card>

        <Alert type="success" style={{ marginBottom: 20 }}>
          <strong>Transfer Görevi:</strong> Son 24 saat içinde sosyal medyada
          gördüğünüz bir haberi bu beş adımla değerlendirin ve kararınızı bir
          yakınınızla paylaşın.
        </Alert>

        <div className="text-center">
          <Btn variant="secondary" onClick={onRestart}>
            ← Başa Dön
          </Btn>
        </div>
      </div>
    </div>
  );
}
