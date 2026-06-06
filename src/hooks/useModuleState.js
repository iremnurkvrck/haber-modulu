import { useState, useCallback } from "react";

const initialState = {
  phase: "intro",

  peIdx: 0,
  peAnswers: {},
  peRevealed: {},
  peScore: 0,
  ptIdx: 0,
  ptResponses: {},
  learnIdx: 0,
  learnDone: [],
  practiceIdx: 0,
  practiceResponses: {},
  intResponses: ["", "", "", "", ""],
  intFinal: "",
  practicePhase: "items",
  postIdx: 0,
  postResponses: {},
};

export function useModuleState() {
  const [state, setState] = useState(initialState);

  const set = useCallback((patch) => {
    setState((prev) => ({
      ...prev,
      ...(typeof patch === "function" ? patch(prev) : patch),
    }));
  }, []);

  const goPhase = useCallback((phase) => {
    setState((prev) => ({ ...prev, phase }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { state, set, goPhase };
}
