#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const target = './node_modules/@cyclonedx/cdxgen/bin/cdxgen';

const args = process.argv.slice(2);

const child = spawn(target, args, {
  stdio: 'inherit'
});

child.on('error', (e) => {
  console.error($`{error.message}`);
  process.exit(1);
});

child.on('exit', (c) => {
  process.exit(c);
});
