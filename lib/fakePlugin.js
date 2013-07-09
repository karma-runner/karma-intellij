// If 'karma-intellij' plugin is installed near 'karma', it is unintentionally loaded as a result of expansion of 'karma-*'.
// This can lead to unexpected results, because 'karma-intellij' plugin is added explicitly in 'intellij.conf.js'.
// To prevent it, 'karma-intellij' plugin located near 'karma' should do nothing.
module.exports = {};
