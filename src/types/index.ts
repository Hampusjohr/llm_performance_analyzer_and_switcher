export interface LLMResponse {
  id: string;
  model: string;
  response: string;
  metrics: {
    relevance: number;
    creativity: number;
    responseTime: number;
    cost: number;
  };
  timestamp: number;
  totalScore: number;
}

export interface MetricWeight {
  relevance: number;
  creativity: number;
  responseTime: number;
  cost: number;
}

export interface LLMModel {
  id: string;
  name: string;
  provider: string;
  active: boolean;
}