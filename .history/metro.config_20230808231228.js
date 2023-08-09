// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');

const defaulConfig = getDefaultConfig(__dirname);
defaulConfig.resolver.assetExts.push('c')

module.exports = config;
