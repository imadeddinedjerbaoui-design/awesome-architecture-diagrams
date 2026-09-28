# Maintaining the directory

Edit `data.json` for resource names, official links, descriptions and category placement. `README.template.md` owns the surrounding Markdown introduction, contribution and license text. `scripts/build.mjs` generates both the README and the companion HTML from the same entries.

```sh
bun scripts/build.mjs
bun scripts/serve.mjs
```

Preview at http://127.0.0.1:4178. The server binds loopback and serves only `site/`. It has no installed dependencies.

The companion is a static folder: `site/index.html`, `site/style.css`, `site/app.js`, and `site/mark.svg`. Search and category filters work in the browser. Without JavaScript the full directory remains readable.

## Review and publication

The initial directory completed two Grok research and Opus validation rounds on 27 September 2026. Descriptions are documentation-based; Linux empirical trials and the rendered comparison gallery remain deferred.

Before publishing updates, check claims against official sources, resolve material review findings, regenerate the outputs, and verify search and category filters. Keep private review receipts outside the public repository.

The public repository is https://github.com/hudsonkit/awesome-architecture-diagrams. GitHub Pages serves the contents of `site/` from the root of the `gh-pages` branch at https://hudsonkit.github.io/awesome-architecture-diagrams/.

After committing generated changes on `main`, publish the static folder:

```sh
git push origin main
git subtree split --prefix=site -b pages-release
git push origin pages-release:gh-pages
git branch -d pages-release
```

In repository Settings → Pages, use Deploy from a branch, `gh-pages`, and `/ (root)`. The `.nojekyll` file preserves plain static serving. Verify the live page and filters after deployment. The organization profile links to both the list and companion.
