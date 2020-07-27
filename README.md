HWL Blokkendoos
===

For developers
---

### File and folder structure  ###

#### root ####
For configration, booting and documentation

- `.browserlistrc`: used by postcss to know which browsers to support.
- `.editorconfig`: default editor settings
- `.gitattributes`: git configuration
- `.gitignore`: git configuration
- `composer.json`: composer configuration
- `index.php`: bootfile for the plugin (or `<plugin>.php`).
- `licence.md`: tells everyone this is open source
- `package.json`: npm configuration
- `README.md`: documentation
- `webpack.mix.js`: webpack configuration

#### app ####
For app logic and setup

- `app/classes/App.php`: setup default app-properties and app-functions and load bootstrap-autoload.
- `app/classes/Utils.php`: utility functions for the app
- `app/classes/<other>`: other classes with standard functionality
- `app/bootstrap-autoload.php`: startpoint for loading custom function files
- `app/<function-files>`: custom function files

### resources ###
The home for build assets like blocks, javascript, postcss, images, svg, language.

- `resources/blocks`:
- `resources/js`:
- `resources/css`:
- `resources/...`:

### public ###
The result of the compiled build process; combined javascript and or minified, optimized images..

- `resources/blocks`:
- `resources/js`:
- `resources/css`:
- `resources/fonts`:
- `resources/...`:

### config ###
Optional configuration files
