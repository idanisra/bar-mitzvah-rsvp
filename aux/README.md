# 🎊 Bar Mitzvah RSVP App - Clean Architecture

A beautiful, scalable, and maintainable React application for managing bar mitzvah RSVPs.

## 🏗️ **Project Structure**

```
src/
├── components/
│   ├── common/           # Reusable components
│   ├── layout/           # Layout components (Navigation, Layout)
│   └── sections/         # Page-specific components
│       ├── HomePage/     # Home page components
│       └── RSVPPage/     # RSVP form components
├── hooks/                # Custom hooks
├── styles/               # Theme and global styles
├── utils/                # Utility functions
├── assets/               # Images and static assets
├── App.jsx              # Main app component
├── main.jsx             # Entry point
├── index.css            # Global styles
└── firebase.js          # Firebase configuration

aux/                     # Non-code files
├── config/              # Configuration files
│   ├── package.json
│   ├── vite.config.js
│   └── firebase.json
├── scripts/             # Build and deployment scripts
└── docs/                # Documentation
```

## ✨ **Features**

- **🎨 Beautiful Design**: Elegant teal and gold gradient theme
- **📱 Fully Responsive**: Perfect on all devices
- **🔧 Clean Architecture**: Modular, scalable, and maintainable
- **🎯 Component-Based**: Tiny, focused, and reusable components
- **🎭 Custom Hooks**: Organized and efficient state management
- **💅 Separate Styles**: Clean separation of concerns
- **🌐 RTL Support**: Full Hebrew language support

## 🚀 **Getting Started**

1. **Install Dependencies**:

   ```bash
   cd aux/config
   npm install
   ```

2. **Configure Firebase**:
   - Update `src/firebase.js` with your Firebase credentials
   - Or copy your existing firebase config

3. **Run Development Server**:

   ```bash
   npm run dev
   ```

4. **Build for Production**:

   ```bash
   npm run build
   ```

## 🏛️ **Architecture Principles**

### **Component Structure**

- **Single Responsibility**: Each component has one clear purpose
- **Small & Focused**: Components are under 50 lines when possible
- **Reusable**: Generic components that can be used across the app
- **Props-Based**: Clean prop interfaces for easy testing

### **File Organization**

- **Co-location**: Styles and components live together
- **Logical Grouping**: Related components in the same folder
- **Clear Naming**: Descriptive file and folder names
- **Consistent Patterns**: Same structure across all components

### **State Management**

- **Custom Hooks**: Organized state logic in reusable hooks
- **Local State**: Component-specific state stays in the component
- **Shared State**: Common state moved to appropriate hooks
- **Clean Interfaces**: Simple, predictable hook APIs

## 🎨 **Design System**

### **Colors**

- **Primary**: Teal (#008080, #20B2AA, #48D1CC)
- **Secondary**: Gold (#FFD700, #FFA500)
- **Accent**: Orange (#FF8C00, #FF6347, #FF4500)

### **Typography**

- **Font Family**: Heebo (Hebrew-optimized)
- **Scale**: Consistent typography scale
- **Responsive**: Adapts to screen size

### **Components**

- **Cards**: Glassmorphism with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean, accessible form fields
- **Navigation**: Sticky header with mobile drawer

## 🔧 **Technical Stack**

- **React 18**: Latest React with hooks
- **Material-UI**: Professional UI components
- **Vite**: Fast build tool
- **Firebase**: Backend and hosting
- **React Router**: Client-side routing
- **Custom Hooks**: Organized state management

## 📱 **Responsive Design**

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Consistent Material-UI breakpoints
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Optimized for all screen sizes

## 🚀 **Deployment**

1. **Build the App**:

   ```bash
   npm run build
   ```

2. **Deploy to Firebase**:

   ```bash
   firebase deploy
   ```

## 🤝 **Contributing**

1. Follow the established component structure
2. Keep components small and focused
3. Use the existing design system
4. Write clean, readable code
5. Test on multiple devices

## 📄 **License**

This project is for personal use. Please respect the intended purpose.

---

**Built with ❤️ for a special bar mitzvah celebration! 🎊**
