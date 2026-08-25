# Change Log

All notable changes to the "typo3-fluid" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.4.2]

- Marked the extension as no longer actively developed — use [Fluid Template Language](https://marketplace.visualstudio.com/items?itemName=FriendsOfTYPO3.fluid-language) by Friends of TYPO3 instead

## [0.4.1]

- Fixed CSS inside `<style>` losing all highlighting: `<style>` and `<script>` are no longer swallowed by the generic HTML tag rule, so their contents are highlighted as CSS and JavaScript again
- Fixed Fluid variables in CSS property values (`color: {brandColor};`) not being recognised, while leaving the surrounding CSS highlighted
- Fixed closing Fluid tags splitting the tag name at the wrong offset (`</f:for>` was read as `f:f` + `or`)
- Added snapshot tests covering Fluid in HTML, `<style>` and `<script>`

## [0.4.0]

- Added support for Fluid Tags inside of HTML STYLE tags like `<f:format.raw>{fluidVariable}</f:format>` to use Fluid variables for CSS properties

## [0.3.0]

- Added support for variables without or inside tags
- Added support for inline variables (depends on theme highlighting features)

## [0.2.0]

- Added syntax highlighting for Fluid comments

## [0.1.2]

- Fixed compatibility issue with Cursor AI by decreasing required VS Code version
- Added correct comment tags

## [0.1.1]

- Changed name and display name in `package.json` because they were in use

## [0.1.0]

- Added an icon
- Added a license
- Changed `package.json` to include GitHub

## [0.0.1]

- Initial release
