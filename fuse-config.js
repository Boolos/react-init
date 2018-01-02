const { FuseBox, WebIndexPlugin, TypeScriptHelpers } = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "./src/",
    output: "./dist/$name.js",
    cache: true,
    log: true,
    debug: false,
    sourceMaps: true,
    tsConfig: "tsconfig.json",
    target: "browser",
    plugins: [
        WebIndexPlugin({
            title: "Hello",
            template: "./src/index.html",
            target: "index.html",
        }),
        TypeScriptHelpers(),
    ],
});

const app = fuse.bundle("app")
    .instructions(`>index.tsx`);

module.exports = {
    fuse: fuse,
    bundles: {
        app: app,
    },
};
