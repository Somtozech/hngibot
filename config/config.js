module.exports = {
  issues: {
    commands: {
      assign: {
        claim: ["claim"],
        abandon: ["abandon", "unclaim", "abort"],
        limit: 1,
        newContributors: {
          permission: "pull",
          restricted: 1,
        },
      },
      label: {
        add: ["label", "add"],
        remove: ["unlabel", "remove"],
      },
    },
  },
  activity: {
    inactive: "inactive",
    check: {
      repositories: ["rippleTv/frontend-v2"],
      interval: 0.1,
      reminder: 0.0069,
      limit: 0.0034,
    },
    issues: {
      inProgress: "in progress",
      clearClosed: true,
    },
    pulls: {
      autoUpdate: false,
      reviewed: {
        label: "reviewed",
      },
      needsReview: {
        label: "needs review",
        ignore: true,
      },
    },
  },
};
