/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktnProviderProject } = require("@cdktn/provider-project");

const project = new CdktnProviderProject({
  useCustomGithubRunner: true,
  // Per-provider V8 heap ceiling from providersWithCustomRunners.json.
  // `undefined` means "take the default for the runner class" -- which is what
  // every provider should use unless it has demonstrably OOMed on the default.
  nodeHeapSizeMb: undefined,
  terraformProvider: "hashicorp/aws@~> 6.0",
  cdktnVersion: "^0.24.0",
  // cdktn 0.24's constructs peer range verbatim -- NOT caret-style. cdk-terrain
  // disallows constructs 10.8 until support lands (open-constructs/cdk-terrain#363),
  // and a caret here would defeat that upper bound. upgrade-cdktf.yml blindly
  // prepends "^" when it rewrites this line; fixed to pass ranges through as-is.
  constructsVersion: ">=10.6.0 <10.8.0",
  // engines.node -- the compat floor we publish to CONSUMERS, not a CI knob.
  // projen's own docs: "Most projects should not use this option ... Setting this
  // option has very high impact on the consumers of your package, as package
  // managers will actively prevent usage with node versions you have marked as
  // incompatible. To change the node version of your CI/CD workflows, use
  // `workflowNodeVersion`."
  //
  // Policy: oldest MAINTAINED LTS line (the same rule that produced the previous
  // 20.16.0 floor while Node 20 was in maintenance). Per nodejs/Release:
  //   v20 EOL 2026-04-30 (dead)  v22 maintenance until 2027-04-30  v24 active LTS
  // so 22.11.0 today. Also matches @cdktn/provider-project's own engines.
  //
  // Verified empirically on Node 22.22.3 against @cdktn/provider-null: cdktn App +
  // NullProvider + Resource synthesizes correctly, so a 24 floor was simply untrue.
  // jsii pins the emitted JS to ES2022 (Node 16.11+), so the artifact does not
  // depend on the Node version CI builds it with.
  minNodeVersion: "22.11.0",
  // CI runs current 24 LTS. This is deliberately DECOUPLED from minNodeVersion:
  // projen only falls back to minNodeVersion as a convenience default, and the
  // build/package jobs are toolchain jobs -- they compile with jsii and package
  // with pacmak, they never run the published bindings in a consumer app, so
  // matching them to the floor validated nothing. Real floor coverage belongs in
  // the end-to-end provider-repo test (cdktn-provider-project#20), pinned to
  // minNodeVersion.
  workflowNodeVersion: "24.18.0",
  typescriptVersion: "~5.9.0", // JSII and TS should always use the same major/minor version range
  jsiiVersion: "~5.9.0", // JSII and TS should always use the same major/minor version range
  devDeps: ["@cdktn/provider-project@^0.9.0"],
  isDeprecated: false,
  npmTrustedPublishing: true,
  pypiTrustedPublishing: true,
});

project.synth();
