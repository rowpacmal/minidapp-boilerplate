# MiniDapp Boilerplate

A modern React + TypeScript + Vite boilerplate for building MiniDapps with MDS (MiniDapp System) integration.

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.16-38B2AC.svg)](https://tailwindcss.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd minidapp-boilerplate
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with the following variables:

   ```env
   # Development settings
   VITE_DEBUG=true                              # Set to true to use MDS while running dev
   VITE_DEBUG_HOST=127.0.0.1                    # Your host address
   VITE_DEBUG_MDS_PORT=9003                     # MDS port (usually 9003 if your node runs on 9001)
   VITE_DEBUG_SESSIONID=your-session-id-here    # Session ID for MDS connection
   VITE_DEBUG_UID=your-uid-here                 # MiniDapp UID from the URL
   ```

   > **Getting your SESSIONID and UID**: Visit `https://127.0.0.1:9003/SESSIONID/index.html?uid=UID` and copy the SESSIONID and UID value.
   >
   > **Note:** Use the SESSIONID and UID generated from your installed MiniDapp. To obtain these, first install the generated `.mds.zip` file (found in the `minidapp` folder) via the MDS interface, then use the values shown when opening your MiniDapp in the browser.

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

6. **Create MDS package**
   ```bash
   npm run zip
   ```

## 📁 Project Structure

```
minidapp-boilerplate/
├── src/                    # Source code
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   └── styles/            # Global styles
├── public/                # Static assets
├── build/                 # Build output
├── minidapp/              # MDS package output
└── package.json           # Dependencies and scripts
```

## 🛠️ Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build                 |
| `npm run lint`    | Run ESLint                               |
| `npm run zip`     | Build and create MDS package             |

## 🔧 Development with MDS

When developing with MDS integration:

1. Set `VITE_DEBUG=true` in your `.env` file
2. Configure your host and port settings
3. Get your UID from the MDS interface
4. Restart the dev server to connect to MDS

## 🎨 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Gulp** - Task runner for MDS packaging

## 📦 MDS Integration

This boilerplate is specifically designed for MiniDapp development with MDS integration. The build process creates a `.mds.zip` package that can be deployed to the MiniDapp system.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

- **Elias** 💟 - Original creator
- **dynamitesushi** 🐧 - Big love & credits

---

Made with ❤️ for the MiniDapp ecosystem
