const { getDefaultConfig } = require('@expo/metro-config')

const defaultConfig = getDefaultConfig(__dirname)

defaultConfig.resolver.sourceExts.push('cjs')
defaultConfig.resolver.sourceExts.push('aca173c4')

module.exports = defaultConfig
