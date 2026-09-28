# Contributing

Help readers find tools that explain software systems clearly. Additions, factual corrections, better category placement, and broken-link fixes are welcome.

## Inclusion criteria

A proposed entry should:

- Support software architecture, infrastructure, system relationships, or technical interactions in a concrete way.
- Have a public official website or repository with enough documentation or examples to verify its purpose.
- Offer a distinct authoring, modeling, rendering, interaction, or layout capability relevant to this list.
- Be usable today. Label significant limitations or archived status when relevant; star counts and release frequency alone do not determine inclusion.

Both open-source and proprietary projects are eligible. AI or agent-driven generators are eligible when they produce inspectable diagram source or a documented output format. General drawing tools need a clear architecture use case. Exclude generic charting libraries, link aggregators, affiliate links, promotional landing pages without a documented product, and duplicate entries for the same tool.

## Submit an addition

1. Check for an existing entry and choose the closest category. Explain a proposed new category in the pull request.
2. Add one alphabetical entry to the appropriate category in `data.json`. Keep `name`, `url`, and `description` factual and concise.
3. Include an official documentation or repository link in the pull request that supports each capability in the description. Explain what the tool adds to the list and disclose any affiliation.
4. Run `bun scripts/build.mjs` to regenerate `README.md` and `site/index.html`; include the generated changes. Check links and both outputs. Do not edit generated entries directly.

```markdown
- [Project name](https://official-project.example/) - One factual sentence describing its input, purpose, or distinguishing workflow.
```

Use primary sources. Write an original, concise description without rankings, superlatives, pricing claims, tracking parameters, or copied marketing language. Distinguish a usable authoring application from a renderer, layout engine, or UI library. Do not imply that a library supplies a complete editor.

## Review and maintenance

Maintainers apply these criteria to all entries, including ARC, which is developed by the list's maintainer, Hudson Kit. Affiliation is not a reason to exclude a relevant project or to give it preferential placement. Inclusion is not an endorsement or a promise of support.

For corrections, link the official source and explain the discrepancy. For removal, describe the broken, unavailable, duplicate, or out-of-scope entry and provide evidence. Prefer updating a moved link to removing an otherwise useful project.

New contributions to the list and its original descriptions are provided under [CC0 1.0](LICENSE). Do not contribute third-party text or assets you lack permission to share on that basis.
