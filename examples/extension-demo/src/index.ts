import { ExtensionContext } from "@lichtblick/suite";

import { initExamplePanel } from "./ExamplePanel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({
    name: "Extension Demo",
    initPanel: initExamplePanel,
  });
}
