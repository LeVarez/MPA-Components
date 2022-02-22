const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-color-picker",
    "@storybook/addon-svelte-csf"
  ],
  "staticDirs": ['../public'],
  "framework": "@storybook/svelte",
  "svelteOptions": {
    "preprocess": require("svelte-preprocess")()
  },
  core: {
    builder: "webpack5",
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /svelte-splide/,
      resolve: { fullySpecified: false },
    });
    config.resolve.alias.svelte = path.resolve('node_modules', 'svelte');
    return config;
  },
}