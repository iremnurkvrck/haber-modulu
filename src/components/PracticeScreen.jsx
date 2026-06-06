import React, { useState } from "react";
import { practiceItems } from "../data/moduleData";
import {
  TopBar,
  ProgressBar,
  PhaseSteps,
  PhaseBanner,
  Card,
  ScenarioBox,
  Alert,
  Btn,
  FlexEnd,
  SectionLabel,
} from "./UI";

const INT_STEPS = [
  "1. Yayıncı analizi: Hesabı kim paylaştı? Güvenilir mi?",
  "2. Kaynak doğrulama: Haberde kaynak var mı? Yeterli mi?",
  "3. Başlık-içerik analizi: Duygusal dil var mı? Başlık içerikle uyumlu mu?",
  "4. Görsel sorgulama: Ters görsel aramanın adımlarını uygulayın.",
  "5. Bağımsız karşılaştırma: Bu haberi başka kaynaklarda nasıl doğrularsınız?",
];

export default function PracticeScreen({ onFinish, onNavigate }) {
  const [idx, setIdx] = useState(0);
  const [responses, setResponses] = useState({});
  const [phase, setPhase] = useState("items");
  const [intResp, setIntResp] = useState(["", "", "", "", ""]);
  const [intFinal, setIntFinal] = useState("");

  const item = practiceItems[idx];
  const pct = 62 + (idx / practiceItems.length) * 16;

  function saveItem(val) {
    setResponses((prev) => ({ ...prev, [item.stepId]: val }));
  }

  function next() {
    if (idx < practiceItems.length - 1) setIdx(idx + 1);
  }

  function prev() {
    if (idx > 0) setIdx(idx - 1);
  }

  function goIntegrated() {
    setPhase("integrated");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function backToItems() {
    setPhase("items");
    setIdx(practiceItems.length - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateInt(i, val) {
    setIntResp((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  }

  if (phase === "integrated") {
    return (
      <div className="screen active">
        <TopBar phaseLabel="Bütünleşik Uygulama" />
        <ProgressBar pct={80} />
        <div className="container">
          <PhaseSteps active="practice" onNavigate={onNavigate} />
          <PhaseBanner
            icon="🧩"
            title="Bütünleşik Uygulama"
            subtitle="Tüm beş adımı tek bir senaryoda uygulayın."
          />
          <Card>
            <div className="scenario-box">
              <h4>Final Senaryosu</h4>
              <p>
                Instagram da bir haber niteliği taşıyan gönderi görüyorsunuz
                <br />
                <br />
                <strong>
                  Instagram'da 3 hafta önce açılmış, profil fotoğrafı bulanık,
                  biyografisinde yalnızca "Gerçek haberleri paylaşıyoruz 🇹🇷"
                  yazan bir hesap şu paylaşımı yapıyor: "ACİL! Sağlık Bakanlığı
                  gizli raporu sızdı: Türkiye'de satılan şişe suların %70'i
                  kanserojen madde içeriyor! Uzmanlar 'hemen bırakın' dedi!
                  HEMEN PAYLAŞ!"
                </strong>
                <br />
                <br />
                Paylaşımın altında sular altında kalmış bir fabrika fotoğrafı
                var.
              </p>
              <img
                src="./images/final.png"
                alt="Final senaryosu görseli"
                style={{
                  width: "100%",
                  borderRadius: 8,
                  marginTop: 14,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
            </div>

            {INT_STEPS.map((label, i) => (
              <div key={i} style={{ marginTop: 16 }}>
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  {label}
                </p>
              </div>
            ))}

            <div style={{ marginTop: 16 }}>
              <p
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                Final Kararı: Bu haber güvenilir mi, şüpheli mi, yoksa yanıltıcı
                mı? Gerekçenizi yazın.
              </p>
            </div>
          </Card>

          <FlexEnd>
            <Btn variant="secondary" onClick={backToItems}>
              ← Geri
            </Btn>
            <Btn
              variant="primary"
              onClick={() =>
                onFinish({ items: responses, int: intResp, intFinal })
              }
            >
              Son Teste Geç →
            </Btn>
          </FlexEnd>
        </div>
      </div>
    );
  }

  return (
    <div className="screen active">
      <TopBar phaseLabel={`Uygulama ${idx + 1}/${practiceItems.length}`} />
      <ProgressBar pct={pct} />
      <div className="container">
        <PhaseSteps active="practice" onNavigate={onNavigate} />
        <PhaseBanner
          icon="✏️"
          title={item.title}
          subtitle={`Uygulama ${idx + 1} / ${practiceItems.length}`}
        />

        <Card>
          <ScenarioBox
            text={item.senaryo}
            gorsel={item.image}
            link={item.link}
          />
          <p className="task-label">Görev</p>
          <p className="task-text" style={{ whiteSpace: "pre-line" }}>
            {item.gorev}
          </p>
        </Card>

        <FlexEnd>
          {idx > 0 && (
            <Btn variant="secondary" onClick={prev}>
              ← Geri
            </Btn>
          )}
          {idx < practiceItems.length - 1 ? (
            <Btn variant="primary" onClick={next}>
              Sonraki Uygulama →
            </Btn>
          ) : (
            <Btn variant="success" onClick={goIntegrated}>
              Bütünleşik Uygulamaya Geç →
            </Btn>
          )}
        </FlexEnd>
      </div>
    </div>
  );
}
