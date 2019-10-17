# bpmnlint-plugin-custom-messages

An custom [bpmnlint](https://github.com/bpmn-io/bpmnlint) plug-in to report messages from bpmn-js elements


## About

This plugin only has two rules by default: `error-message` and `warning-message` which report the correspoing message using [bpmn-js-bpmnlint](https://github.com/bpmn-io/bpmn-js-bpmnlint). 

In order to show a message set a string in the property `node.businessObject.customErrorMessage` or `node.businessObject.customWarningMessage` where `node` is a bpmn-js element.

Also set the plugin in the `.bpmnlintrc` file:

```json
{
  "extends": [
    "bpmnlint:recommended",
    "plugin:custom-messages/recommended"
  ]
}
```

## License

MIT
