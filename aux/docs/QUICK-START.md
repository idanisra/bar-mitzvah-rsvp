# 🚀 Quick Start Guide

## **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Firebase account

## **1. Setup Project**
```bash
# Navigate to config folder
cd aux/config

# Install dependencies
npm install
```

## **2. Configure Firebase**
1. Copy your Firebase config to `src/firebase.js`
2. Or update the placeholder values with your actual credentials

## **3. Run Development Server**
```bash
npm run dev
```
App will open at: http://localhost:5173

## **4. Build & Deploy**
```bash
# Build for production
npm run build

# Deploy to Firebase (if configured)
firebase deploy
```

## **🏗️ Project Structure Overview**

```
src/
├── components/           # All UI components
│   ├── layout/          # Navigation & Layout
│   └── sections/        # Page components
├── hooks/               # Custom React hooks
├── styles/              # Theme & global styles
└── assets/              # Images & static files
```

## **🎯 Key Components**

- **Layout**: Main app wrapper with navigation
- **HomePage**: Landing page with event details
- **RSVPPage**: RSVP form with validation
- **Navigation**: Responsive navigation bar

## **💡 Development Tips**

1. **Component Structure**: Each component has its own folder with styles
2. **Hooks**: Custom hooks for reusable logic
3. **Styles**: Separate style files for each component
4. **Responsive**: Mobile-first design approach

## **🔧 Available Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

**Happy coding! 🎊✨**
