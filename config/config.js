module.exports = {
  issues: {
    commands: {
      assign: {
        claim: ["claim"],
        abandon: ["abandon", "unclaim", "abort"],
        limit: 1,
        newContributors: {
          permission: "pull",
          restricted: 5,
        },
      },
      label: {
        add: ["label", "add"],
        remove: ["unlabel", "remove"],
      },
    },
  },
  pulls: {
    status: {
      mergeConflicts: {
        label: "has conflicts",
        comment: false,
      },
    },
    references: {
      required: true,
      labels: {
        exclude: [
          "in progress",
          "good first issue",
          "good sprint project",
          "help wanted",
        ],
      },
    },
  },
  references: {
    required: true,
    labels: {
      exclude: [
        "in progress",
        "good first issue",
        "good sprint project",
        "help wanted",
      ],
    },
  },
  activity: {
    inactive: "inactive",
    check: {
      repositories: [
        "rippleTv/frontend-v2",
        "hngi/sentry-my-customer-backend",
        "hngi/sentry-my-customer-api",
        "hngi/mobileforce-QuickThink",
        "hngi/mobileforce-afrivac",
      ],
      interval: 3,
      reminder: 1,
      limit: 1,
    },
    issues: {
      inProgress: "in progress",
      clearClosed: true,
    },
    pulls: {
      autoUpdate: true,
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
