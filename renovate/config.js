console.log(process.env.API_KEY_GITHUB);
const renovateConfig = {
  platform: "github",
  binarySource: "install",
  token: process.env.API_KEY_GITHUB,
  autodiscover: false,
  repositories: ["mjunker/renovate-lockVersion3"],
  enabledManagers: ["npm"],
  ignorePresets: [":prHourlyLimit2", ":prConcurrentLimit20"],
  commitMessagePrefix: "chore(renovate): ",
  commitMessageSuffix: "[SKIP-PROPAGATION]",
  commitBody: process.env.CI_PIPELINE_URL ?? "",
  branchPrefix: "renovate-libs/",
  assignAutomerge: false,
  automerge: true,
  gitLabIgnoreApprovals: true,
  requireConfig: "optional",
  onboarding: false,
  platformAutomerge: true,
  assigneesFromCodeOwners: true,
  lockFileMaintenance: {
    schedule: ["at any time"],
    enabled: false,
  },
  allowedPostUpgradeCommands: [".*"],
  forkProcessing: "enabled",
  npmrc: "registry=https://registry.npmjs.org/",
  hostRules: [
    {
      matchHost: "github.com",
      token: process.env.API_KEY_GITHUB,
    },
  ],
  packageRules: [
    {
      matchPackagePatterns: ["*"],
      rangeStrategy: "in-range-only",
      enabled: false,
    },
    {
      matchPackageNames: ["@angular/core"],
      rangeStrategy: "in-range-only",
      enabled: true,
      allowedVersions: "<=14.3.0",
    },
    {
      matchPackagePatterns: ["^@angular/"],
      rangeStrategy: "in-range-only",
      enabled: true,
      groupName: "@angular libraries",
    },
  ],
};
console.log(`using renovate config: `);
console.log(JSON.stringify(renovateConfig, null, 2));

module.exports = renovateConfig;
