# Build a React Blog with Simple Markdown

I’ve really prioritized building out my little slice of the internet here at https://itsseanl.com and it came to my attention that I needed a space to share my thoughts and ideas! I have been working on a number of different projects, from custom WordPress plugins to my demo affiliate site/nextjs testing ground over at https://ultimatestarterpacks.com, and I felt that the best way to solidify the lessons I’m learning is to write up everything I do. For that, I needed a blog section.

I chose nextjs to build my personal site with because of its great performance and dead simple deployment process. I won’t go over the details of setting up a nextjs project here, that’s been done a million times. But I do want to share how I’ve kept with the thread of simplicity by building out this bare-bones blog section with the help of two great packages.

## Step One: Requirements

You’ll need [React Markdown](https://github.com/rexxars/react-markdown) and [Raw Loader](https://github.com/webpack-contrib/raw-loader) for this project. Head over to your terminal to add them.

```
npm install —save react-markdown
```

And

```
npm install raw-loader --save-dev
```

React-markdown will accept our source file as a prop and convert it to a react component that we can add to our page, while raw-loader allows us to import our markdown files. In order to make use of raw-loader, we’ll need to load it into our config, so in the case of nextjs we’ll need to add the following code to our next.config.js file:

```
module.exports = {
  webpack: (config) => {
	config.module.rules.push(
		{
			test:/\.md$/,
			use: ‘raw-loader’,
		},
	)
	return config
	}
}
```

## Step Two: Write your First Post

We’ll need to set up a folder in our application directory and set up a markdown file. I just created a folder in the root of my nextjs app and called it “posts.” You can name this folder whatever you would like. Inside this folder, you can create your markdown file. For the sake of this write-up, I’ll just call it post.md. If you’ve somehow found yourself on this article without ever having heard of a markdown file, don’t be intimidated! Check out this great [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for everything you need to know. Once you’ve written your file, save it and we can get to the implementation.

## Step Three: The Fun Stuff

Now we’re ready to rock. In next, pages are stored inside the `/pages/`
directory, so I created a folder inside of pages named blog. Here, I set up an index.js file for the main blog page, and a dynamic page that will display each post.
