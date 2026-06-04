import { useState, useCallback } from "react";

const initialState = {
  phase: "intro",
  // ön değerlendirme
  peIdx: 0,
  peAnswers: {},
  peRevealed: {},
  peScore: 0,
  // ön test
  ptIdx: 0,
  ptResponses: {},
  // öğretim
  learnIdx: 0,
  learnDone: [],
  // uygulama
  practiceIdx: 0,
  practiceResponses: {},
  intResponses: ["", "", "", "", ""],
  intFinal: "",
  practicePhase: "items", // "items" | "integrated"
  // son test
  postIdx: 0,
  postResponses: {},
};

export function useModuleState() {
  const [state, setState] = useState(initialState);

  const set = useCallback((patch) => {
    setState((prev) => ({ ...prev, ...(typeof patch === "function" ? patch(prev) : patch) }));
  }, []);

  const goPhase = useCallback((phase) => {
    setState((prev) => ({ ...prev, phase }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { state, set, goPhase };
}
