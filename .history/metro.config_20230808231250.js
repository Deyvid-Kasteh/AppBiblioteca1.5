// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaulConfig.resolver.assetExts.push('cjs')

module.exports = defaulConfig;
