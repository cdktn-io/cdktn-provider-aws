/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktnProviderProject } = require("@cdktn/provider-project");

const project = new CdktnProviderProject({
  useCustomGithubRunner: true,
  terraformProvider: "hashicorp/aws@~> 6.0",
  cdktnVersion: "^0.23.0",
  constructsVersion: "^10.6.0",
  minNodeVersion: "24.11.0", // first Node 24 LTS; Node 20 went EOL 2026-04-30
  typescriptVersion: "~5.9.0", // JSII and TS should always use the same major/minor version range
  jsiiVersion: "~5.9.0", // JSII and TS should always use the same major/minor version range
  devDeps: ["@cdktn/provider-project@^0.8.0"],
  isDeprecated: false,
  npmTrustedPublishing: true,
  pypiTrustedPublishing: true,
});

project.synth();
