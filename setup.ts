/* eslint-disable no-console */
// setup.ts
import { execSync } from 'child_process';

function setup() {
  console.log('Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('Setup complete!');
    console.log('To start the development server, run:');
    console.log('pnpm dev');
  } catch (error) {
    console.error('Error installing dependencies:', error);
  }
}

setup();
