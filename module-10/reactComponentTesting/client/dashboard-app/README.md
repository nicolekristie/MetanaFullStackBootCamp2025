# React Dashboard App

This is a React dashboard application built with Vite, featuring a responsive sidebar navigation component with comprehensive test coverage.

## Features

- Responsive sidebar navigation
- Dynamic icon integration with React Icons
- Toggle functionality for mobile view
- Comprehensive test suite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test
```

## Testing

The application includes a comprehensive test suite using Jest and React Testing Library. The test coverage includes:

### Sidebar Component Tests

The `Sidebar.test.jsx` file contains tests for the following functionality:

1. **Basic Rendering**
   - Shop brand display
   - Navigation links presence
   - Icon rendering
   - List structure validation

2. **Responsive Behavior**
   - Toggle functionality
   - Responsive class application
   - Mobile view adaptation

3. **User Interactions**
   - Close button functionality
   - Click event handling
   - Navigation link validation

4. **Styling and Layout**
   - Base styling verification
   - Title section structure
   - List item organization

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Development Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Available Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### ESLint Configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
