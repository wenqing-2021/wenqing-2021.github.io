#!/usr/bin/env bash
set -euo pipefail

tmp_dir="$(mktemp -d)"
tmp_override="${tmp_dir}/comments-test-override.yml"
tmp_site="${tmp_dir}/site"
giscus_fixture="_posts/2002-01-01-integration-giscus-comments.md"
disqus_fixture="_posts/2002-01-02-integration-disqus-comments.md"

cleanup() {
  rm -f "${giscus_fixture}" "${disqus_fixture}"
  rmdir _posts 2>/dev/null || true
  rm -rf "${tmp_dir}"
}
trap cleanup EXIT

mkdir -p _posts
if [ -e "${giscus_fixture}" ] || [ -e "${disqus_fixture}" ]; then
  echo "comments integration fixture path already exists" >&2
  exit 1
fi

cat >"${giscus_fixture}" <<'MARKDOWN'
---
layout: post
title: Giscus integration fixture
date: 2002-01-01 10:00:00+0000
giscus_comments: true
related_posts: false
---

Giscus integration fixture.
MARKDOWN

cat >"${disqus_fixture}" <<'MARKDOWN'
---
layout: post
title: Disqus integration fixture
date: 2002-01-02 10:00:00+0000
disqus_comments: true
related_posts: false
---

Disqus integration fixture.
MARKDOWN

cat >"${tmp_override}" <<'YAML'
giscus:
  repo: alshedivat/al-folio
  repo_id: R_kgDOExample
  category: Comments
  category_id: DIC_kwDOExample
disqus_shortname: al-folio
YAML

bundle exec jekyll build --config "_config.yml,${tmp_override}" -d "${tmp_site}" >/dev/null

giscus_page="${tmp_site}/blog/2002/integration-giscus-comments/index.html"
disqus_page="${tmp_site}/blog/2002/integration-disqus-comments/index.html"

grep -q 'https://giscus.app/client.js' "${giscus_page}"
if grep -q 'giscus comments misconfigured' "${giscus_page}"; then
  echo "unexpected giscus misconfiguration warning in ${giscus_page}" >&2
  exit 1
fi

grep -q 'id="disqus_thread"' "${disqus_page}"
grep -q '.disqus.com/embed.js' "${disqus_page}"

echo "comments integration checks passed"
