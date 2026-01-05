# 🏃 Syncfusion EJ2 React Fitness Tracker Dashboard

[![License](https://img.shields.io/badge/License-Evaluation-blue.svg)](https://github.com/syncfusion/ej2-react-fitness-application/blob/master/license)
[![React](https://img.shields.io/badge/React-19.x-61DAFB.svg?logo=react)](https://reactjs.org/)
[![Syncfusion EJ2](https://img.shields.io/badge/Syncfusion-EJ2-3949AB.svg)](https://www.syncfusion.com/react-components)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E.svg?logo=javascript)](https://javascript.info/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Why Choose This Project?](#-why-choose-this-project)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Components Used](#-components-used)
- [Quick Start](#-quick-start-5-minutes)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Application Modules](#-application-modules)
- [Troubleshooting](#-troubleshooting)
- [Community & Support](#-community--support)
- [License](#-license)

---

## 🎯 Overview

A **production-ready React Fitness Tracker Dashboard** built with **Syncfusion Essential JS 2 (EJ2)** components. This comprehensive health monitoring platform demonstrates best practices for building scalable, interactive wellness applications that track daily activities, dietary habits, fasting routines, and fitness progress through beautiful, intuitive visualizations.

**Perfect for:**
- 💪 Personal fitness enthusiasts
- 🏥 Health and wellness applications  
- 🍎 Nutritional tracking platforms
- 🏢 Corporate wellness programs
- 📊 Health analytics dashboards
- 🔗 Integration with wearables and health APIs

### What Makes This Application Special?

✨ **Modular Architecture** - Four independent micro-frontend modules using Webpack Module Federation

✨ **Enterprise-Grade Components** - Syncfusion EJ2's 50+ React components for professional UI

✨ **Real-Time Data** - Live updates with mock data (ready for API integration)

✨ **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices

✨ **Developer Friendly** - Clean, well-organized code structure for easy maintenance

✨ **Production Ready** - Complete error handling, state management, and best practices

### The Four Main Modules

- **Activities**: Track daily steps, calories burned, and workout details
- **Diet**: Monitor nutritional intake with detailed macro/micronutrient breakdown
- **Fasting**: Track intermittent fasting windows with real-time progress
- **Profile**: Manage personal health goals and body metrics

---

## ✨ Key Features

### 1. **💪 Comprehensive Activity Tracking**
- Real-time step count and calorie burn tracking
- Daily workout logging with 4 activity types (Running, Swimming, Walking, Yoga)
- Distance and duration metrics with automatic calorie calculations
- Historical activity trends with weekly and monthly visualizations
- Weekly/Monthly comparison charts for progress analysis

### 2. **🍎 Advanced Dietary Management**
- 5-meal daily tracking system (Breakfast, Snack 1, Lunch, Snack 2, Dinner)
- Rich food database with 15+ pre-configured meal items
- Complete nutritional breakdown: Calories, Proteins, Carbs, Fats, Calcium, Iron, Sodium
- Visual doughnut charts for macro/micronutrient distribution
- Adjustable calorie goals and meal recommendations

### 3. **⏰ Intermittent Fasting Window Tracker**
- Customizable fasting schedule with real-time countdown
- Visual progress tracking with percentage completion
- Elapsed time vs. remaining time display
- Historical fasting performance with weight tracking charts
- Monthly weight trend visualization

### 4. **👤 User Profile & Goal Management**
- Comprehensive health profile with personal metrics
- Height and weight tracking with multiple unit options (KG/LB, CM/Inches)
- Goal setting and progress monitoring
- Theme preferences (Light/Dark mode)
- Location and contact information storage

### 5. **📊 Beautiful Data Visualizations**
- **Interactive Line & Column Charts** - Activity and diet trends
- **Circular Gauges** - Daily goal progress indicators
- **Linear Gauges** - Water intake status with real-time updates
- **Doughnut Charts** - Nutritional breakdown analysis
- **Responsive Tab Navigation** - Smooth module switching

### 6. **💧 Intelligent Water Intake Tracking**
- Daily water consumption monitoring with visual gauges
- Meal-based water logging (Breakfast, Lunch, Evening)
- Water intake status indicators (Poor → Good → Almost → Perfect!)
- Expected vs. consumed water amount tracking
- Real-time hydration status updates


---

## 🛠 Technology Stack

Built with **modern, battle-tested technologies** trusted by Fortune 500 companies:

### Core Technologies
| Technology | Version | Why We Use It |
|-----------|---------|---------------|
| **React** | 19.x | Modern reactive UI framework with excellent performance |
| **Node.js** | 14+ | Reliable server runtime for build tools |
| **npm** | 6+ | Industry-standard package management |
| **Webpack** | 5.x | Powerful module bundler with Module Federation support |
| **Babel** | 7.x | Latest JavaScript transpilation for browser compatibility |

### Syncfusion EJ2 - Enterprise UI Components

Syncfusion Essential JS 2 (EJ2) is a comprehensive, production-ready UI component library with:
- ✅ **50+ React components** for building complex interfaces
- ✅ **Enterprise support** with guaranteed maintenance
- ✅ **Accessibility compliance** (WCAG standards)
- ✅ **Multiple themes** (Material, Bootstrap, Fabric, Tailwind)
- ✅ **120+ countries support** in 60+ languages

**Used Components:**
```json
{
  "@syncfusion/ej2-react-buttons": "*",     // Action buttons & controls
  "@syncfusion/ej2-react-calendars": "*",   // Date & time pickers
  "@syncfusion/ej2-react-circulargauge": "*", // Progress indicators
  "@syncfusion/ej2-react-grids": "*",       // Data grids & tables
  "@syncfusion/ej2-react-inputs": "*",      // Text inputs & validators
  "@syncfusion/ej2-react-lineargauge": "*", // Linear progress gauges
  "@syncfusion/ej2-react-navigations": "*", // Tab & navigation controls
  "@syncfusion/ej2-react-popups": "*"       // Dialogs & popups
}
```

### Build & Development Tools
- **Webpack 5 Module Federation** - Micro-frontend architecture support
- **Webpack Dev Server** - Hot module reloading for fast development
- **Gulp** - Automated build tasks and asset processing
- **Babel Loader** - ES6+ JavaScript transpilation
- **CSS/PostCSS** - Advanced styling and autoprefixing

---

## 📦 Components Used

### Syncfusion EJ2 Components in Action

This application showcases **11 core Syncfusion components**, demonstrating professional UI/UX best practices:

| Component | Purpose | Use Case |
|-----------|---------|----------|
| **TabComponent** 📑 | Main navigation system | Switch between Activities, Diet, Fasting, Profile modules |
| **CircularGaugeComponent** 🎯 | Goal progress visualization | Daily step goals, fasting progress, target tracking |
| **LinearGaugeComponent** 📏 | Continuous progress tracking | Water intake levels, hydration status |
| **ChartComponent** 📈 | Time-series data visualization | Activity trends, weekly/monthly comparisons |
| **AccumulationChartComponent** 🥧 | Pie/Doughnut charts | Nutritional breakdown (macros & micros) |
| **DataGridComponent** 📊 | Data tables & lists | Workout history, meal logs, activity records |
| **ButtonComponent** 🔘 | Interactive controls | Add menu, change fasting time, update profile |
| **DatePickerComponent** 📅 | Date selection | Historical data viewing, date filtering |
| **TimePickerComponent** ⏰ | Time selection | Fasting start/end time configuration |
| **DialogComponent** 💬 | Modal dialogs | Menu selection, profile editing, confirmations |
| **NumericTextBoxComponent** 🔢 | Numeric inputs | Weight, height, calorie goals, measurements |

**Why These Components?**
✅ Fully responsive and mobile-optimized
✅ Built-in accessibility (WCAG compliant)
✅ Touch-friendly for mobile devices
✅ Lightweight with excellent performance
✅ Easy to customize and theme

---

## ⚡ Quick Start (5 Minutes)

This application uses **Webpack Module Federation**, so you need to run multiple applications simultaneously.

### Quick Start (Windows PowerShell)

**Open 5 separate PowerShell windows and run these commands in order:**

```powershell
# Window 1 - Activities Module (Port 8051)
cd Activities; npm install; npm run start

# Window 2 - Profile Module (Port 8052)
cd Profile; npm install; npm run start

# Window 3 - Diet Module (Port 8053)
cd Diet; npm install; npm run start

# Window 4 - Fasting Module (Port 8054)
cd Fasting; npm install; npm run start

# Window 5 - Main Dashboard (Port 8050)
npm install; npm run start
```

✅ **All servers running?** Open **http://localhost:8050** in your browser and start tracking!

### 🎯 Verify Everything Works

You should see:
- ✅ Fitness Tracker Dashboard loads with real-time data
- ✅ 4 navigation tabs: Activities, Diet, Fasting, Profile
- ✅ Interactive charts and gauges with live data
- ✅ Zero console errors (press F12 to verify)
- ✅ Smooth tab switching with instant module loading

> **📖 For detailed step-by-step setup instructions and troubleshooting, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)**

---

## 🌟 Why Choose This Project?

### For Developers

| Benefit | Description |
|---------|-------------|
| **Learn Micro-Frontends** 🏗️ | Real-world Webpack Module Federation implementation |
| **Master Syncfusion** 🎨 | Hands-on experience with 11+ enterprise UI components |
| **Best Practices** ✅ | Production-ready patterns and architecture |
| **Full Documentation** 📚 | Comprehensive guides with troubleshooting |
| **Modern Stack** 🚀 | React 19, Webpack 5, latest development tools |
| **Portfolio Ready** 💼 | Showcase-quality code for job interviews |

### For Teams

| Advantage | Impact |
|-----------|--------|
| **Modular Design** | Teams can work on modules independently |
| **Scalable** | Easy to add new features or modules |
| **Maintainable** | Clean code structure reduces tech debt |
| **Enterprise Ready** | Syncfusion's commercial support available |
| **Real-Time Updates** | Live data with mock services (ready for APIs) |
| **Responsive** | Works perfectly on all devices |

### For Organizations

- 💰 **Cost-Effective** - Start with mock data, integrate real APIs gradually
- 📊 **Analytics Ready** - Built-in tracking and data visualization
- 🔒 **Secure Foundation** - Enterprise-grade Syncfusion components
- 🌍 **Global Scale** - Multi-language, multi-timezone support
- 📱 **Future-Proof** - Modern tech stack with long-term support
- 🎯 **Customizable** - Multiple themes and easy branding

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0 or higher)
- **npm** (v6.0 or higher)
- **Git** (for cloning the repository)

### System Requirements

| Requirement | Specification |
|-----------|---------------|
| **OS** | Windows, macOS, Linux |
| **RAM** | 4GB minimum |
| **Browser** | Chrome, Firefox, Safari, or Edge (latest versions) |

---

## 📥 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/syncfusion/ej2-react-fitness-application.git
cd ej2-react-fitness-application
```

### Step 2: Install Dependencies for Main Application

```bash
npm install
```

This installs all required packages including Syncfusion EJ2 components and React dependencies.

### Step 3: Install and Run Micro-Frontend Applications

The application uses **Webpack Module Federation** to load micro-frontend modules. Each module must run on its own port before starting the main application.

**Important:** Open separate terminal/PowerShell windows for each micro-frontend.

#### Terminal 1 - Activities Module (Port 8051)
```powershell
cd Activities
npm install
npm run start
```

#### Terminal 2 - Profile Module (Port 8052)
```powershell
cd Profile
npm install
npm run start
```

#### Terminal 3 - Diet Module (Port 8053)
```powershell
cd Diet
npm install
npm run start
```

#### Terminal 4 - Fasting Module (Port 8054)
```powershell
cd Fasting
npm install
npm run start
```

### Step 4: Start the Main Application (Port 8050)

**In a new terminal/PowerShell window:**

```powershell
npm run start
```

The main dashboard will open automatically at **http://localhost:8050** in your default browser.

### Micro-Frontend Ports Configuration

| Module | Port | URL |
|--------|------|-----|
| **Main Dashboard** | 8050 | http://localhost:8050 |
| **Activities** | 8051 | http://localhost:8051 |
| **Profile** | 8052 | http://localhost:8052 |
| **Diet** | 8053 | http://localhost:8053 |
| **Fasting** | 8054 | http://localhost:8054 |

> **Note:** All micro-frontend modules must be running before accessing the main dashboard. If a module is not running, you will see a loading error.

### Available npm Scripts

**Main Application:**
- `npm run start` - Start main dashboard (Port 8050)
- `npm run start:live` - Start with live reload enabled
- `npm run build` - Build production version
- `npm run build:dev` - Build development version
- `npm run build:start` - Build and serve on port 8080

**Micro-Frontend Modules:**
- `npm run start` - Start individual module on assigned port
- `npm run build` - Build module for production

---

## 📁 Project Structure

```
ej2-react-fitness-application/
│
├── src/                           # Main application
│   ├── App.jsx                   # Root component
│   ├── index.js                  # Entry point
│   ├── index.css                 # Global styles
│   ├── tab.js                    # Tab navigation component
│   ├── LinearGauge.js            # Linear gauge component
│   ├── DietDialog.js             # Diet menu dialog
│   ├── FastingDialog.js          # Fasting config dialog
│   ├── ProfileDialog.js          # Profile edit dialog
│   └── assets/                   # Images and fonts
│
├── Activities/                    # Activities module
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Activities.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── webpack.config.js
│
├── Diet/                          # Diet tracking module
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Diet.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── webpack.config.js
│
├── Fasting/                       # Fasting tracking module
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Fasting.js
│   │   ├── CircularGuage.js
│   │   ├── LinearGuage.js
│   │   ├── ChartData.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── webpack.config.js
│
├── Profile/                       # User profile module
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Profile.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── webpack.config.js
│
├── webpack.config.js             # Webpack configuration
├── package.json                  # Project dependencies
├── .babelrc                       # Babel configuration
├── gulpfile.js                   # Gulp build tasks
├── index.html                    # HTML template
└── README.md                      # Documentation
```

### Key Directories

| Directory | Purpose |
|-----------|---------|
| **src/** | Main dashboard application with tab navigation |
| **Activities/** | Activity tracking with workout and step data |
| **Diet/** | Meal planning and nutritional tracking |
| **Fasting/** | Intermittent fasting window tracking |
| **Profile/** | User profile and health metrics management |

---

## 📝 Application Modules

### Activities Module (`Activities/src/Activities.js`)
Displays daily workout activities including:
- Running, Swimming, Walking, Yoga tracking
- Distance and duration metrics
- Calorie burn calculation
- Weekly/Monthly activity charts
- **Port:** 8051

### Diet Module (`Diet/src/Diet.js`)
Manages nutritional tracking with:
- 5 meal periods: Breakfast, Snack 1, Lunch, Snack 2, Dinner
- Predefined food items with nutritional data
- Calorie, protein, carbs, fat, calcium, iron, and sodium tracking
- Nutritional breakdown pie chart
- **Port:** 8053

### Fasting Module (`Fasting/src/Fasting.js`)
Tracks intermittent fasting with:
- Customizable fasting start and end times
- Real-time countdown and elapsed time display
- Progress percentage visualization
- Weight tracking chart with monthly data
- **Port:** 8054

### Profile Module (`Profile/src/Profile.js`)
Manages user health information:
- Personal details (name, age, location, email)
- Body metrics (weight, height, goal weight)
- Unit selection (KG/LB for weight, CM/Inches for height)
- Theme preference (Light/Dark mode)
- **Port:** 8052

---

## 🐛 Troubleshooting

### Issue: Micro-frontend modules not loading or "Failed to load module" error

**Causes:**
- Micro-frontend modules are not running on their respective ports
- Port conflicts with other applications
- Module failed to start due to dependency issues

**Solution:**
1. Verify all four micro-frontend modules are running on their correct ports:
   - Activities: http://localhost:8051
   - Profile: http://localhost:8052
   - Diet: http://localhost:8053
   - Fasting: http://localhost:8054

2. If a module fails to start, check the terminal output for errors and try reinstalling dependencies:
   ```powershell
   cd <ModuleName>
   Remove-Item -Recurse -Force node_modules
   Remove-Item package-lock.json
   npm install
   npm run start
   ```

3. Check browser console (F12) for detailed error messages.

### Issue: Port already in use

**Error:** `Port 8050/8051/8052/etc. is already in use`

**Solution:**
1. Find and kill the process using the port:
   ```powershell
   # Find process using specific port
   netstat -ano | findstr :8050
   
   # Kill the process (replace PID with the process ID from above)
   taskkill /PID <PID> /F
   ```

2. Or change the port in `webpack.config.js` and corresponding micro-frontend config files.

### Issue: Dependencies mismatch between modules

**Error:** `React version mismatch` or `Dependency conflict`

**Solution:**
Ensure all modules use the same dependency versions:
```powershell
# Clear all node_modules and reinstall
cd ej2-react-fitness-application
Remove-Item -Recurse -Force node_modules, Activities/node_modules, Diet/node_modules, Fasting/node_modules, Profile/node_modules
Remove-Item package-lock.json, Activities/package-lock.json, Diet/package-lock.json, Fasting/package-lock.json, Profile/package-lock.json
npm install
cd Activities; npm install; cd ..
cd Diet; npm install; cd ..
cd Fasting; npm install; cd ..
cd Profile; npm install; cd ..
```

### Issue: Browser shows blank page or infinite loading

**Causes:**
- Module Federation failed to initialize
- Network request to remote module failed
- JavaScript error in module

**Solution:**
1. Check browser DevTools (F12) → Console tab for errors
2. Check browser DevTools → Network tab to see if remote modules are loading
3. Verify all micro-frontend servers are running and accessible
4. Clear browser cache (Ctrl+Shift+Delete) and refresh

### Issue: Changes in micro-frontend modules not reflecting

**Cause:** Hot module replacement not working due to caching

**Solution:**
1. Stop the development server (Ctrl+C)
2. Clear browser cache
3. Restart the micro-frontend module:
   ```powershell
   npm run start
   ```
4. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Quick Verification Checklist

- [ ] All 4 micro-frontend modules are running (check all terminal windows)
- [ ] Main application is running on port 8050
- [ ] No port conflicts (all services on different ports)
- [ ] Browser console shows no errors (F12)
- [ ] All URLs are accessible in browser address bar
- [ ] Network requests in DevTools show successful responses (200 status)

---

## 🤝 Community & Support

### Get Help & Resources

- 📖 **[Syncfusion Documentation](https://ej2.syncfusion.com/react/documentation/introduction/)** - Complete EJ2 React documentation
- 💬 **[Syncfusion Forums](https://www.syncfusion.com/forums)** - Active community support
- 🎥 **[Video Tutorials](https://www.youtube.com/SyncfusionInc)** - Learn from Syncfusion team
- 📚 **[Code Examples](https://www.syncfusion.com/code-examples)** - 1000+ examples gallery
- 🐛 **[GitHub Issues](https://github.com/syncfusion/ej2-react-fitness-application/issues)** - Report bugs and suggest features

### Featured Technologies

Built with the technologies developers love:

```
React 19 ⚡ | Webpack 5 📦 | Syncfusion EJ2 🎨 | Node.js 🚀
```

### Star ⭐ This Project

If you find this project helpful, please:
1. ⭐ **Star** this repository
2. 🔄 **Share** with your team
3. 📢 **Mention** in your portfolio
4. 💬 **Contribute** improvements

---

## 📄 License

This project is licensed under **Syncfusion Evaluation License**. 

**Usage Rights:**
- ✅ Free for evaluation and development
- ✅ Educational and learning purposes
- ✅ Internal team projects
- ❌ Production deployment (requires commercial license)
- ❌ Redistribution without commercial license

For commercial licensing, contact [Syncfusion Sales](https://www.syncfusion.com/sales/products)

See the [`license`](./license) file for complete terms.

---

## 🎉 Thank You!

Thank you for exploring this Fitness Tracker Dashboard! We hope this helps you:
- 🏆 Master modern React development
- 🔧 Learn advanced patterns with Syncfusion
- 🎓 Understand micro-frontend architecture
- 💡 Build better applications

**Made with ❤️ using Syncfusion EJ2**

---

**Version:** 1.0.0 | **Last Updated:** January 2026 | **Status:** ✅ Production Ready
