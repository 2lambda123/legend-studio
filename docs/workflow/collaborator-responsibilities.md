# Collaborator responsibilities

> This is an overview of the responsibilities expected from collaborators who are part of the organization maintaining this project, if you are not part of this group, this is probably irrelevant to you

There are 4 main roles for people working on this repository, and each comes with their own set of responsibilities.

- **[Maintainers](#maintainers)**: people who maintain the project, who can merge PRs
- **[Release coordinators](#release-coordinators)**: people who monitor, keep track, and do the actual release
- **[Developers](#developers)**: people who actually implement the feature, bug fixes, etc.
- **[Reviewers](#reviewers)**: people review PRs

## Maintainers

The most important thing to pay attention to as maintainers is when merging PRs, please make sure to always use the `squash` merging strategy, _unless requested to do otherwise and the commit list seems sensible and do not pose risk of polluting the default branch history_.

## Release coordinators

- Do release planning (at the moment, we can't guarantee a fixed release cycle, but one usually lasts around 2 weeks to a month), _the main focus for now is to be transparent about "what goes into the next release?" so users know the coming features as well as to enable us writing better documentation/release notes_.
- Work with `developers` to add relavent issues to the milestone and assign them accordingly
- When PR are submitted against the release branch, coordinators need to check if these need documentation or not: new feature and interface change almost always guarantee documentation change, bug fixes, if notable also require documentation
- Communicate about the timeline and progress with `developers` and `reviewers`
- When we need to do a release, [create a new release branch](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch) for the version with the format `release/<VERSION>` (e.g. `release/0.4.0`). This is the branch where bug fixes for the application versions will be worked on.
- After a patch release is made on the latest version, `cherry-pick` the changes from the release branch back on to the default branch to keep the development branch up to date, for more details, refer to the [release guide](./release-process.md#patch-releases).
- Update `CHANGELOG.md` and Github release to point at the doc for the new releases

> There are a lot more details around the release process for the release coordinator in [this guide](./release-process.md)

## Developers

- When working on a bug fix:
  - If there is no issue filed for the bug, please create one with small reproducible test case and make sure to link this in your PR and `changeset` for that PR
  - Remember that `changeset` is meant to be brief, you don't really need to add a full post-mortem, instead, put that in the description of the PR
  - If this is a notable bug, please add it to the release note and link the documnetation PR to this PR
- When working on a new feature/improvement:
  - If there is no issue filed for the feature/improvement, and you are just start thinking about what you need to do or need to discuss with other on your plan, please create a new `RFC` with detailed implementation steps, this would be used to keep track of the progress of your work (`New Feature` issue type is also fine, but should really be used for very simple features or features where the scope and implementation plan has not been thought through). Otherwise, you can go straight with a PR and put your task list there.
  - Add documentation with `screenshots` and `GIFs` and link the documnetation PR to this PR

## Reviewers

- Make sure the change has proper `changeset`: please be strict here, there are changes that do not require any changeset at all, but because of our convention, we will needto cover code changes with an empty `changeset`. As such, please remind the developers to break down their changesets properly.
- Pay attention to the branch the PR is trying to merge into, if the PR is a bug fix for a past release, the base branch **must be** the corresponding release branch
- Be vigilant when you see new dependencies introduced, refer to [our guide for dependencies](./dependencies)
- When reviewing an interface change or a new feature, please make sure to check how the feature look and work. This is tricky even with tests, so thank you so much for doing this :pray: