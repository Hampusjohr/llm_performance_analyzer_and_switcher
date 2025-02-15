import { create } from 'zustand';
import type { LLMResponse, MetricWeight, LLMModel } from '../types';

interface LLMStore {
  responses: LLMResponse[];
  weights: MetricWeight;
  models: LLMModel[];
  activeModel: string | null;
  setWeights: (weights: MetricWeight) => void;
  addResponse: (response: LLMResponse) => void;
  toggleModel: (modelId: string) => void;
  setActiveModel: (modelId: string) => void;
}

export const useLLMStore = create<LLMStore>((set) => ({
  responses: [],
  weights: {
    relevance: 0.4,
    creativity: 0.2,
    responseTime: 0.2,
    cost: 0.2,
  },
  models: [
    { id: 'gpt-4', name: 'GPT-4', provider: 'OpenAI', active: true },
    { id: 'gpt-3.5', name: 'GPT-3.5', provider: 'OpenAI', active: true },
    { id: 'claude', name: 'Claude', provider: 'Anthropic', active: true },
    { id: 'palm', name: 'PaLM', provider: 'Google', active: true },
  ],
  activeModel: null,
  setWeights: (weights) => set({ weights }),
  addResponse: (response) => 
    set((state) => ({ responses: [...state.responses, response] })),
  toggleModel: (modelId) =>
    set((state) => ({
      models: state.models.map((model) =>
        model.id === modelId ? { ...model, active: !model.active } : model
      ),
    })),
  setActiveModel: (modelId) => set({ activeModel: modelId }),
}));