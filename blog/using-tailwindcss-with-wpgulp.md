# Using TailwindCSS with WPGulp!

[Tailwindcss](https://tailwindcss.com/) is an amazing low-level css framework that allows you to build custom designs while serving incredibly small stylesheet files. Taken straight from their website,

> Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

Instead of complex components, tailwind is a framework of base CSS styles baked into their own classes, which removes the complexity and bulk associated with other css frameworks that aim to build their own complicated components. With the power of PurgeCSS, any unused classes are removed from your final production stylesheet, which leaves you with a stylesheet taking up mere kilobytes.

In this post, I want to discuss how I set it up using another fantastic tool, wpgulp, in order to extend my local WordPress development environment and begin building ultra-lean WordPress sites with Tailwindcss!

## Step 1: Install WP gulp

This is fairly straightforward. Navigate to your theme folder, and run `npx wpgulp` . There is some minimal configuration associated with wpgulp inside the wpgulp.config.js file. You’ll have to change your projectURL to match your local URL, and ensure the paths to all your assets are mapped correctly. It’s very simple, and the[wpgulp repository](https://github.com/ahmadawais/WPGulp) readme provides you with everything you need to know to get up and running in minutes.

## Step 2: Install additional dependencies

You’ll need a few more packages to get up and running. Install the following:

```
npm install —save-dev gulp-postcss tailwindcss
```

Inside your main sass file, you’ll need to import tailwind via:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And finally `npx tailwind init` to set up your tailwind.config.js file. This will present you with a boilerplate config file to customize your tailwind theme. Here, you will want to add a couple lines to the purge section,

```
module.exports = {
    purge: {
        // enabled: true,
        content: [“./*.php”, “./**/*.php”],
    },
    theme: {
    extend: {},
    },
    variants: {},
    plugins: [],
};
```

You will notice that the line `// enabled:true` is commented out. This line will purge all unused classes from your final stylesheet, which is only necessary when you’re done modifying your styles and ready to push to production. Leaving this uncommented will slow down compile times and require you to recompile if you end up needing to add a class that has been purged, so leave it commented out until you’re done making changes!

The content line is telling the script which files to look at, so add any paths/file extensions in which you’re using tailwind.

## Step 3: Modify your gulp file

Wpgulp configures your gulpfile for you, but you’ll need to add a few lines so that it can utilize postcss and tailwind correctly.

Upon inspection, you will find a list of imported plugins for css, utility, and more. Start by importing tailwind and the gulp-postcss packages we installed earlier:

```

const postcss = require( ‘gulp-postcss’ );
const tailwindcss = require( ‘tailwindcss’ );

```

Finally, we’ll need to add them to the gulp tasks that generate our stylesheets. You will find two distinct functions, a styles task and a stylesRTL task. Inside each of them respectively, add:

```

gulp.task(“styles”, () => {
return gulp
…
.pipe(postcss([tailwindcss(“.tailwind.config.js”),require(“autoprefixer”)]))
…

```

And

```

gulp.task(“stylesRTL”, () => {
return gulp
…
.pipe(postcss([tailwindcss(“tailwind.config.js”), require(“autoprefixer”)]))
…

```

## Step 4: Get Building!

With that, you should be ready to start building with tailwindcss! run `npm start` and you're off to the races. You can check out some of their pre-built [components](https://tailwindcss.com/components) to get started, and run through their documentation to get up to speed on their class naming conventions. Once you get the hang of it, you'll never want to let it go!
