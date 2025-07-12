# 🏴‍☠️ Olivia Vibe Pirate Chatbot

A fun and secure AI-powered chatbot with a unique pirate personality, built with React, TypeScript, and OpenAI.

![Pirate Chatbot](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)
![OpenAI](https://img.shields.io/badge/OpenAI-API-orange)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)

## 🌟 Features

- **🏴‍☠️ Pirate Personality**: AI responds in pirate slang and nautical terms
- **🔒 Secure API Key Management**: Keys stored locally in browser, never sent to servers
- **💬 Real-time Chat**: Instant message sending and receiving
- **🎨 Modern UI**: Clean, responsive design similar to OpenAI's interface
- **📱 Responsive Design**: Works on desktop and mobile devices
- **⚡ Fast & Lightweight**: Built with React and TypeScript

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd olivia-vibe-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔑 Setup Your API Key

1. **Get an OpenAI API Key**
   - Visit [OpenAI Platform](https://platform.openai.com/)
   - Create an account and generate an API key

2. **Enter Your API Key**
   - In the app, enter your API key in the sidebar
   - Click "Save Key" to store it securely in your browser
   - Use "Clear Key" if you want to remove it

## 💬 How to Use

1. **Enter your OpenAI API key** in the sidebar
2. **Click "Save Key"** to store it securely
3. **Start chatting!** Type your message and press Enter or click the ship button
4. **Enjoy pirate responses** from your AI companion

## 🛡️ Security

- **🔒 Local Storage Only**: Your API key is stored only in your browser's localStorage
- **🌐 Direct to OpenAI**: API calls go directly to OpenAI, no intermediate servers
- **🚫 No Server Storage**: Your key is never stored on any server
- **🔐 Secure Transmission**: Keys are only sent to OpenAI's API when needed

## 🏗️ Technical Stack

- **Frontend**: React 19.1.0 with TypeScript
- **Styling**: Tailwind CSS
- **API**: OpenAI GPT-3.5-turbo
- **State Management**: React Hooks
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/
│   ├── ChatInterface.tsx    # Main chat component
│   ├── Message.tsx          # Individual message component
│   └── APIKeyInput.tsx      # API key input component
├── utils/
│   └── api.ts              # OpenAI API integration
├── App.tsx                 # Main app component
└── index.css               # Global styles with Tailwind
```

## 🎨 UI Features

- **Sidebar Layout**: API key management on the left, chat on the right
- **Message Bubbles**: User messages in blue, bot responses in gray
- **Loading States**: Visual feedback during API calls
- **Error Handling**: Clear error messages for troubleshooting
- **Responsive Design**: Works on all screen sizes

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Environment Variables

No environment variables needed - the app uses client-side API key management.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [OpenAI API](https://openai.com/api/)
- Icons and emojis for pirate theme

## 🐛 Troubleshooting

### Common Issues

**Q: My API key isn't working**
A: Make sure your OpenAI API key is valid and has sufficient credits.

**Q: The chat isn't responding**
A: Check your browser's console for error messages and verify your API key.

**Q: The UI looks broken**
A: Make sure you're using a modern browser and try refreshing the page.

**Q: Can't save my API key**
A: Check if localStorage is enabled in your browser settings.

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Ahoy matey! Ready to sail the digital seas with your AI pirate companion?** 🏴‍☠️⚓ 