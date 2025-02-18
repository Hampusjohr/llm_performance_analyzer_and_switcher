# LLM Performance Analyzer

![LLM Performance Analyzer](https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=400)

A sophisticated dashboard for real-time analysis and comparison of Large Language Model (LLM) responses across different metrics and providers.

## Features

- 📊 **Real-time Performance Tracking**: Monitor LLM responses with live-updating metrics
- 🔄 **Multi-Model Comparison**: Compare performance across different LLM providers (OpenAI, Anthropic, Google)
- ⚖️ **Customizable Metric Weights**: Adjust the importance of different performance metrics:
  - Relevance
  - Creativity
  - Response Time
  - Cost
- 📈 **Visual Analytics**: Beautiful charts and graphs for performance visualization
- 🎨 **Modern UI**: Clean, accessible interface with a premium purple and gold theme
- 📱 **Responsive Design**: Fully functional across all device sizes

## Tech Stack

- ⚛️ React 18
- 🎨 TailwindCSS
- 📊 Recharts
- 🏪 Zustand
- 🎯 TypeScript
- ⚡ Vite

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 7.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hampusjohr/llm_performance_analyzer_and_switcher
   ```

2. Navigate to the project directory:
   ```bash
   cd llm-performance-analyzer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Usage

1. **Model Selection**: Toggle different LLM models on/off in the "Active Models" section
2. **Metric Customization**: Adjust the weights of different metrics using the sliders
3. **Performance Monitoring**: View real-time performance data in the charts
4. **Best Model Analysis**: Check the current best-performing model and its metrics

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Icons by [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
- State management with [Zustand](https://github.com/pmndrs/zustand)

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Made by Hampus Johansson
