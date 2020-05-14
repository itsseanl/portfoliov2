# Build a Blog with NextJS and Markdown

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

## Step Three: Set up your Pages

Now we’re ready to rock. In next, pages are stored inside the `/pages/`
directory, so I created a folder inside of pages named blog. Here, I set up an index.js file for the main blog page, and a dynamic page that will display each post.

On the index.js page, I will create a simple object array to store the references to each blog. For now, this is my only post, so I'll just have the one reference:

```
const posts = [
	{
		title: "Build a Blog With NextJS and Markdown",
		date: "May 8th, 2020",
	},
];
```

Then to display each post, we'll just do a simple map inside of our return function:

```
{posts.map((post) => {
	fadeIn += 0.2;

	return (
		<a
			className="post"
			href={"/blog/" + post.title.replace(/ /g, "-").toLowerCase()}
			style={{ animationDelay: `${fadeIn}s` }}
		>
			<h3>{post.title}</h3>
			<div className="underline"></div>
			<p>{post.date}</p>
		</a>
	);
})}
```

Here, I'm taking each post title and sanitizing it a little bit, replacing spaces with dashes and converting the string to lowercase. This will be my proces/naming structure for each of my markdown files, so that each link will match with the file names on our dynamic page. We're almost there! Now let's set up our dynamic posts page. Note, the fadeIn variable is just to add a little bit of flair, I am using css animations to fade each blog post in on page load, and the animation display offsets each one so they fade in one after the other.

Make another file in the same directory called `[slug].js` and retrieve the query in the getInitialProps function:

```
const Post = ({ content }) => {
	return <ReactMarkdown source={content.default} renderers{{code: CodeBlock }} />
};
Post.getInitialProps = async ({ query }) => {
	const postPath = query.slug;
	const content = await require(`../../blog/${postPath}.md`);
	return { content };
};
```

You can see here that we are pulling the slug that was passed via whatever link is clicked on the previous page, and using it to import the markdown file with the corresponding file name. We can then pass that to ReactMarkdown, which will neatly display our file onto the page! I am also utilizing a module called CodeBlock along with ReactMarkdown, this is in order to format and syntax highlight any code snippets that may be in my markdown files. This is fairly straightforward, so I'll leave that bit up to you!

While this is slightly more of a manual process than the typical blog, it is extremely lightweight and easy to set up, which is what I was going for. I would like to focus my efforts on building out new projects and writing them up, so with this out of the way I can focus on the important stuff!
