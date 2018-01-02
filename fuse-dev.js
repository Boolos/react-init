const bundler = require("./fuse-config.js");

bundler.fuse.dev({
    port: 8080,
    open: true,
});

bundler.bundles
    .app
    .watch("src/**");

bundler.fuse.run();
