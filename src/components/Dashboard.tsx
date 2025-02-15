import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Settings, Sparkles, Zap, Clock, DollarSign } from 'lucide-react';
import { useLLMStore } from '../store/llmStore';

export const Dashboard: React.FC = () => {
  const { responses, weights, models, activeModel, setWeights } = useLLMStore();

  const chartData = responses.map((response) => ({
    name: new Date(response.timestamp).toLocaleTimeString(),
    ...response.metrics,
  }));

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-900 mb-2">LLM Performance Analyzer</h1>
        <p className="text-purple-700">Real-time analysis and comparison of LLM responses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg border border-purple-100 p-6">
          <div className="flex items-center mb-4">
            <Sparkles className="w-6 h-6 text-amber-500 mr-2" />
            <h2 className="text-xl font-semibold text-purple-900">Active Models</h2>
          </div>
          <div className="space-y-2">
            {models.map((model) => (
              <div key={model.id} className="flex items-center justify-between">
                <span className="text-purple-800">{model.name}</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  model.active ? 'bg-amber-100 text-amber-800' : 'bg-purple-100 text-purple-800'
                }`}>
                  {model.active ? 'Active' : 'Inactive'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-purple-100 p-6">
          <div className="flex items-center mb-4">
            <Settings className="w-6 h-6 text-amber-500 mr-2" />
            <h2 className="text-xl font-semibold text-purple-900">Metric Weights</h2>
          </div>
          <div className="space-y-4">
            {Object.entries(weights).map(([metric, weight]) => (
              <div key={metric} className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-purple-800 capitalize">
                    {metric}
                  </label>
                  <span className="text-sm text-purple-600">{weight * 100}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={weight}
                  onChange={(e) =>
                    setWeights({ ...weights, [metric]: parseFloat(e.target.value) })
                  }
                  className="w-full accent-amber-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg border border-purple-100 p-6 mb-8">
        <div className="flex items-center mb-4">
          <Zap className="w-6 h-6 text-amber-500 mr-2" />
          <h2 className="text-xl font-semibold text-purple-900">Performance Metrics</h2>
        </div>
        <div className="w-full overflow-x-auto">
          <LineChart width={800} height={400} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E9D5FF" />
            <XAxis dataKey="name" stroke="#581C87" />
            <YAxis stroke="#581C87" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="relevance" stroke="#F59E0B" />
            <Line type="monotone" dataKey="creativity" stroke="#7C3AED" />
            <Line type="monotone" dataKey="responseTime" stroke="#D97706" />
            <Line type="monotone" dataKey="cost" stroke="#4C1D95" />
          </LineChart>
        </div>
      </div>

      {activeModel && (
        <div className="bg-white rounded-lg shadow-lg border border-purple-100 p-6">
          <div className="flex items-center mb-4">
            <Clock className="w-6 h-6 text-amber-500 mr-2" />
            <h2 className="text-xl font-semibold text-purple-900">Current Best Model: {activeModel}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(responses[responses.length - 1]?.metrics || {}).map(([metric, value]) => (
              <div key={metric} className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-purple-700 capitalize">{metric}</h3>
                <p className="text-2xl font-semibold text-purple-900">{value.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};