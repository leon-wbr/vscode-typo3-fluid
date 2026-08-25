# TYPO3 Fluid Syntax Highlighting

This extension provides basic syntax highlighting for [TYPO3 Fluid](https://typo3.org/fluid).

Simply extends HTML with Fluid tags, such as `<f:if>`, `<f:for>`, etc. 

This way, no more errors are produced when using Fluid tags in `<script>` blocks.

Fluid variables are recognised in text, in HTML attributes, and in CSS property values inside `<style>` blocks, while the surrounding CSS and JavaScript keep their own highlighting.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request on the [GitHub repository](https://github.com/leon-wbr/vscode-typo3-fluid).

### Testing

The grammar is covered by snapshot tests that tokenize the fixtures in `test/fixtures` exactly as VS Code would, including the embedded CSS and JavaScript grammars.

```bash
yarn install
yarn test          # verify against the committed snapshots
yarn test:update   # re-record snapshots after an intentional change
```

`yarn test` downloads the pinned VS Code HTML and CSS grammars into `test/grammars` on first run, so it needs network access once.

**Enjoy!**
