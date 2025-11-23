# neutralinojs-portable-sample

This sample showcases the implementation of the Single-App feature using [`postject`](https://github.com/nodejs/postject).

## Dependencies

1. `bin/`: Every binary inside this folder is compiled using [this fork](https://github.com/IsmaCortGtz/neutralinojs/tree/feature/postject-embedded-res) and [this release](https://github.com/IsmaCortGtz/neutralinojs/releases/tag/vpostject-embedded-res-v1).
2. `neutralinojs-cli `: Using a custom version of the `neu cli` from [this fork](https://github.com/IsmaCortGtz/neutralinojs-cli/tree/feature/postject-build) and [this release](https://github.com/IsmaCortGtz/neutralinojs-cli/releases/tag/postject-build-v1).

## Usage

### Install CLI

> [!IMPORTANT]  
> If you have a previous `neutralinojs-cli` version installed you will need to delete it, clean cache with `npm cache clean --force`.

To install use the custom tarball URL:

```bash
npm i -g https://github.com/IsmaCortGtz/neutralinojs-cli/releases/download/postject-build-v1/neutralinojs-neu-11.5.0.tgz
```

### Update neu

You will need to update client library using the following command:

```bash
neu run
```

### Install custom binaries

1. If you have one, remove every file inside your `bin/` folder.
2. Download the zip file from the [release](https://github.com/IsmaCortGtz/neutralinojs/releases/tag/vpostject-embedded-res-v1).
3. Unzip the result inside the `bin/` folder.