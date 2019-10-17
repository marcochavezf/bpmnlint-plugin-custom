const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports manual tasks being used.
 */
module.exports = function() {

  function check(node, reporter) {
    if (node.customWarningMessage) {
      reporter.report(node.id, node.customWarningMessage);
    }
  }

  return {
    check: check
  };
};
