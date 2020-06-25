# hngibot

hgnibot is a GitHub workflow bot application
for the [hng internship](https://hng.tech/)

## Usage

* **Claim an issue** :Comment  `@hngibot claim` on the issue you want to claim; @hngibot will assign you to the issue and label the issue as in progress.
  * If you’re a new contributor, @zulipbot will give you read-only collaborator access to the repository and leave a welcome message on the issue you claimed.

* **Track inactive claimed issues** — If a claimed issue has not been updated within a day, `@hngibot` will post a comment on the inactive issue to ask the assignee(s) if they are still working on the issue.<br/> If you see this comment on an issue you claimed, you should post a comment on the issue to notify `@hngibot` that you’re still working on it.<br/> If `@hngibot` does not receive a response from the assignee within 3 days of an inactive issue prompt, `@hngibot` will automatically remove the issue’s current assignee(s) and the “in progress” label to allow others to work on an inactive issue

* **Find unclaimed issues** — Use the [GitHub search](https://help.github.com/en/github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests) feature to find unclaimed issues by adding one of the following filters to your search:<br/>-label: "in progress" (excludes issues labeled with the in progress label)<br/>no:assignee (shows issues without assignees)

## License

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy
of the License at

```
https://www.apache.org/licenses/LICENSE-2.0
```

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.

The software includes some works released by third parties under other free
and open source licenses. Those works are redistributed under the license
terms under which the works were received.
