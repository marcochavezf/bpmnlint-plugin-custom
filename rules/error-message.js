const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports missing targetNamespace on bpmn:Definitions.
 */
module.exports = function() {

  function check(node, reporter) {
    if (node.customErrorMessage) {
      reporter.report(node.id, node.customErrorMessage);
    }
  }

  return {
    check: check
  };
};
