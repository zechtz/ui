# My React UI Component Library

**Note**
The libraries are still under construction

Welcome to my React UI Component Library, a collection of reusable React components styled with TailwindCSS and showcased with Storybook. This library aims to provide easily integrable UI elements for your projects.

## Components

This library includes the following components:

- **Button**: Customizable buttons for user interactions.
- **Light**: A component to toggle light/dark themes.
- **StarRating**: Allows users to rate items using a star system.
- **Typography**: Provides styled typographic elements.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v12.0 or higher recommended)
- npm (v6.0 or higher)

### Installation

To use the components in your project, add the library to your project by running:

````bash
npm install ui-library

### Usage

Here's how to use the components in your react project

```js
import { Button, Light, StarRating, Typography } from 'ui-library';

function App() {
  return (
    <div>
      <Typography variant="h1">Welcome to My Library</Typography>
      <Button onClick={() => console.log("Clicked!")}>Click Me!</Button>
      <StarRating rating={4} />
      <Light />
    </div>
  );
}

````

### Running Storybook

To view and interact with the components locally via Storybook, clone the repository and run:

```bash
npm install
npm run storybook

```
