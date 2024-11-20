# Bluesky Starter Packs

Bluesky allows users to create Starter Packs, which are basically user lists for specific topics. Those Starter Packs can help new users to quickly find people to follow. This website collects and categorized Starter Packs.

## Add a new Starter Pack

Starter Packs are stored under `/src/content/packs`.

To add a new pack, create a file with an unique name in that directory. The file name
- must be short and precise,
- only consist of lowercase characters and hyphens,
- must not contain special characters like ä, ß or ć.

The file must follow a strict structure:

```json
{
  "title": "Laravel Employees",
  "description": "Here are all the smart folks who works at the Laravel Team \uD83D\uDE4C",
  "url": "https://bsky.app/starter-pack/jbrooks.uk/3l7kxuavami2q",
  "author": "jbrooks.uk",
  "tags": ["tech", "php", "laravel"]
}
```

## Add a new Tag

Tags are used to categorize packs. To add a new tag, create a new file this the name of the tag like this `/src/content/tags/design.json` and add the following content:

```json
{
  "name": "Design"
}
```

## Development

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Say thanks

This website was created by [Kevin Woblick](https://kovah.de). Follow me on [Bluesky](https://bsky.app/profile/kevin.woblick.com)
and [say Thanks](https://buymeacoffee.com/kevinwoblick)
