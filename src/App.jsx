import React, { useState } from "react";
import { pretestQs, posttestQs } from "./data/moduleData";

import IntroScreen from "./components/IntroScreen";
import {
  PreevalIntro,
  PreevalQuestions,
  PreevalResult,
} from "./components/PreevalScreen";
import TestScreen, { PretestResult } from "./components/TestScreen";
import LearnScreen from "./components/LearnScreen";
import PracticeScreen from "./components/PracticeScreen";
import FinalScreen from "./components/FinalScreen";
import AttitudeScreen from "./components/AttitudeScreen";

import "./styles/main.css";

export default function App() {
  const [phase, setPhase] = useState("intro");
  const [peScore, setPeScore] = useState(0);
  const [ptResponses, setPtResponses] = useState({});
  const [postResponses, setPostResponses] = useState({});

  function go(p) {
    setPhase(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ── INTRO ────────────────────────────────────────────────────────────────
  if (phase === "intro") {
    return <IntroScreen onStart={() => go("preeval-intro")} />;
  }

  // ── ÖN DEĞERLENDİRME ────────────────────────────────────────────────────
  if (phase === "preeval-intro") {
    return <PreevalIntro onStart={() => go("preeval-q")} onNavigate={go} />;
  }

  if (phase === "preeval-q") {
    return (
      <PreevalQuestions
        onNavigate={go}
        onFinish={(score) => {
          setPeScore(score);
          go("preeval-result");
        }}
      />
    );
  }

  if (phase === "preeval-result") {
    return (
      <PreevalResult
        score={peScore}
        onNext={() => go("pretest")}
        onNavigate={go}
      />
    );
  }

  // ── ÖN TEST ──────────────────────────────────────────────────────────────
  if (phase === "pretest") {
    return (
      <TestScreen
        questions={pretestQs}
        phase="pretest"
        phaseLabel="Ön Test"
        icon="📝"
        bannerTitle="Ön Test"
        bannerSub="Modül öncesi bilgi düzeyinizi ölçen açık uçlu sorular."
        pctStart={22}
        pctRange={10}
        onNavigate={go}
        onFinish={(responses) => {
          setPtResponses(responses);
          go("pretest-result");
        }}
      />
    );
  }

  if (phase === "pretest-result") {
    return (
      <PretestResult
        responses={ptResponses}
        questions={pretestQs}
        onNext={() => go("learn")}
        onNavigate={go}
      />
    );
  }

  // ── ÖĞRETİM ─────────────────────────────────────────────────────────────
  if (phase === "learn") {
    return <LearnScreen onFinish={() => go("practice")} onNavigate={go} />;
  }

  // ── UYGULAMA ─────────────────────────────────────────────────────────────
  if (phase === "practice") {
    return <PracticeScreen onFinish={() => go("posttest")} onNavigate={go} />;
  }

  // ── SON TEST ──────────────────────────────────────────────────────────────
  if (phase === "posttest") {
    return (
      <TestScreen
        questions={posttestQs}
        phase="posttest"
        phaseLabel="Son Test"
        icon="🎯"
        bannerTitle="Son Test"
        bannerSub="Modülü tamamladıktan sonra öğrendiklerinizi uygulayın."
        pctStart={82}
        pctRange={14}
        onNavigate={go}
        infoAlert={
          <div className="alert alert-info" style={{ marginBottom: 14 }}>
            Bu sorular ön testle <strong>paralel yapıda</strong> ama farklı
            senaryolardır. Sonuçlar ön testinizle karşılaştırılacaktır.
          </div>
        }
        onFinish={(responses) => {
          setPostResponses(responses);
          go("attitude");
        }}
      />
    );
  }

  // ── TUTUM ÖLÇEĞİ ─────────────────────────────────────────────────────────
  if (phase === "attitude") {
    return <AttitudeScreen onFinish={() => go("final")} onNavigate={go} />;
  }

  // ── SONUÇ ─────────────────────────────────────────────────────────────────
  if (phase === "final") {
    return <FinalScreen onRestart={() => go("intro")} />;
  }

  return null;
}
