# 📸 Through My Eyes

> There is a story behind every capture.

And each story is shared through the website.

**Note:** 🏗️ Under Construction! Check back later for an awesome portfolio of mobile photography.

# ⌨️ TechStack

- 🚀 [**AstroJs**](https://astro.build/): Static site generator with island architecture.
- 🎨 [**TailwindCSS**](https://tailwindcss.com/): Utility-first CSS framework.
- ⚛️ [**ReactJs**](https://reactjs.org/): JavaScript library for building user interfaces.
- 🖼️ [**react-photo-album**](https://react-photo-album.com/): Responsive photo gallery component for React.

# ✒️ Content Authoring

### Step 01

Make two folders: `gallery` and `caption`.

### Step 02

Rename photos with `date-name.jpg` format and move to `gallery`. For example `2023-01-01-test-image.jpg`.

Note the use of `-` in date and instead of `space` in name.

### Step 03

For each photo on `gallery` make a `.md` file in `caption` with the same name. For example `2023-01-01-test-image.md`.

Each `.md` file will contain details of the image like height, width, caption etc.

### Step 04

In `.md` file, provide details of the corresponding photo in format below:

```md
---
title:
height:
width:
---

Write a detailed caption here.
```

For example, the file `2023-01-01-test-image.md` might look like this,

```md
---
title: This is Test Title
height: 300
width: 300
---

Ac feugiat sed lectus vestibulum. Orci nulla pellentesque dignissim enim sit amet. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Tortor dignissim convallis aenean et tortor at. Facilisi etiam dignissim diam quis enim.
```

Now you are all set for uploading contents. 😎
