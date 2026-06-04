import React from "react";
import {
  TopBar,
  ProgressBar,
  PhaseSteps,
  PhaseBanner,
  Card,
  Alert,
  Btn,
  FlexEnd,
} from "./UI";

export default function AttitudeScreen({ onFinish, onNavigate }) {
  return (
    <div className="screen active">
      <TopBar phaseLabel="Tutum Ölçeği" />
      <ProgressBar pct={94} />
      <div className="container">
        <PhaseSteps active="attitude" onNavigate={onNavigate} />
        <PhaseBanner
          icon="📊"
          title="Tutum Ölçeği"
          subtitle="Modüle yönelik görüşlerinizi paylaşın. Yanıtlarınız tamamen gizlidir."
        />
        <Card>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: 24 }}>
            Modülü tamamladınız! Lütfen aşağıdaki butona tıklayarak kısa tutum
            ölçeğini doldurun. Yanıtlarınız yaklaşık <strong>3-5 dakika</strong>{" "}
            sürmektedir ve tamamen gizlidir.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfm8JIbCUJfiUlNCI7q7Ni0nctssRBSc62lLpVe0vRdB0Iphg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{
              width: "100%",
              textDecoration: "none",
              justifyContent: "center",
              display: "flex",
            }}
          >
            📋 Tutum Ölçeğini Doldurun →
          </a>
        </Card>
        <Alert type="info">
          Formu doldurduktan sonra bu sayfaya geri dönüp modülü
          tamamlayabilirsiniz.
        </Alert>
        <FlexEnd>
          <Btn variant="success" onClick={onFinish}>
            Modülü Tamamla →
          </Btn>
        </FlexEnd>
      </div>
    </div>
  );
}
