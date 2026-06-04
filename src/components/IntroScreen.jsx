import React from "react";
import { Btn } from "./UI";

const flowSteps = [
  "Ön Değerlendirme",
  "Ön Test",
  "Öğretim",
  "Uygulama",
  "Son Test",
  "Tutum Ölçeği",
];

export default function IntroScreen({ onStart }) {
  return (
    <div className="screen screen-intro active">
      <div className="hero-badge">
        ÖTE5325 · Öğretim Tasarımı Teori ve Uygulamaları
      </div>
      <h1 className="hero-title">
        Sosyal Medyada
        <br />
        <span>Haber Güvenilirliği</span>
        <br />
        Değerlendirme Modülü
      </h1>
      <p className="hero-sub">
        Hedef kitle: 35–60 yaş yetişkin bireyler · Asenkron çevrimiçi · 65
        dakika
      </p>
      <div className="hero-flow">
        {flowSteps.map((step, i) => (
          <div className="flow-step" key={step}>
            <div className="flow-chip">{step}</div>
            {i < flowSteps.length - 1 && <div className="flow-arrow">→</div>}
          </div>
        ))}
      </div>
      <Btn variant="white" size="lg" onClick={onStart}>
        Modüle Başla →
      </Btn>
    </div>
  );
}
