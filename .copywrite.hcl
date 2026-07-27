schema_version = 1

project {
  license        = "MPL-2.0"
  copyright_year = 2021

  # (OPTIONAL) A list of globs that should not have copyright/license headers.
  # Supports doublestar glob patterns for more flexibility in defining which
  # files or folders should be ignored
  header_ignore = [
    "**/node_modules/**",
    "lib/**",
    "dist/**",
    "logs/**",
    "build/**",
    ".gen/**",
    ".github/ISSUE_TEMPLATE/**",
    ".terraform/**",
    "docs/**",
    "API.md",
    ".mergify.yml",
    "scripts/*.js",
    # projen-owned and rewritten on every synth; copywrite headers .yaml files, so
    # without these the header is added, stripped by the next synth, and re-added by
    # CI -- permanent self-mutation churn across every provider repo.
    "pnpm-lock.yaml",
    "pnpm-workspace.yaml"
  ]
}
