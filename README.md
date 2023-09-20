# ResourcePackCDN

A simple standalone CDN webserver for Minecraft Resource Packs

# Introduction

Minecraft: Bedrock Edition introduced a feature that allows client to download resource pack from external URL.

This allows us to have fast resource pack download speed, also
resolving [pmmp/PocketMine-MP#3127](https://github.com/pmmp/PocketMine-MP/issues/3127) without having to modify PMMP.

# Setup

1. Make sure you have installed Node.js (or Bun) and NPM
2. Make a directory called `packs`, put resource packs in it
3. Run the command: `npm install && npm run start`

To change the port, edit `.env` file.

### Warning

The client expects the zip file structure like this, not like the regular behaviour:

```
Correct:
MyPack.zip
├── MyPack
│   ├── manifest.json
│   ├── ...

Invalid:
MyPack.zip
├── manifest.json
├── ...
```
