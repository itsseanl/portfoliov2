# I built a Radius Based Messaging Platform

The project discussed in this article can be found here: https://hey-neighbor.now.sh/

The GitHub repository for this project can be found here: https://github.com/itsseanl/heyneighbor

I want to push the limits of what I’m capable of every week. Last week, my goal was to set up a messaging platform that relied on user location in order to display posts by other users within a certain radius of them. The idea sprang from the many stories of selfless neighbors helping each other out in response to the state-wide shutdowns currently in affect here in the US and many other places worldwide. With a simple messaging service, users could log on and communicate helpful news, ask for/offer help, and provide a direct way for communities to communicate quickly.

While the entire process is a bit much to cover in detail in a single post, I want to run through an overview of each step I took, some issues I ran into, and set the stage for some future posts that I will be making to share in depth how I solved some of the bigger hurdles of this project!

## Step One: User Authentication and identity management

I knew I wanted to stay within the next framework because of the ease of deployment, and the fact that it’s free and extremely fast. Unfortunately, looking into user authentication with next will almost always lead you into an explanation of how to set up an express server as the first step. I also understood that setting up a custom server would invalidate most of the advantages of NextJS, so I sought out alternatives. The only one that seemed to fit the bill was integrating with auth0. Auth0 essentially allows you to outsource your user authentication, handling all of the authentication on their end and passing back the user details that you can then work with in your own code. And luckily for me, they’ve released a [Next.JS SDK](https://github.com/auth0/nextjs-auth0) that made this relatively easy to do. I also have to give a major shoutout to [code mochi](https://www.codemochi.com/blog/2020-04-01-how-to-add-auth0-nextjs) for putting together an [incredible guide](https://www.codemochi.com/blog/2020-04-01-how-to-add-auth0-nextjs) for setting this all up.

## Step Two: MongoDB Integration

The next step was setting up a MongoDB project on MongoDB Atlas in order to store some additional user information. Once you’re authenticated through Auth0, the endpoint returns a user object with some basic profile information:

```
{nickname: "seanforpresident", name: "seanforpresident@gmail.com",
 picture: "https://s.gravatar.com/avatar/50f96fb9c2edc4827147…&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fse.png",
 updated_at: "2020-05-17T18:06:22.502Z", sub: "auth0|..."}
```

Upon the user’s first sign in, navigating to the dashboard page will create an entry in the MongoDB with the user’s email and a default radius of 5 miles. It will also trigger a prompt for permission to the user’s location via google’s Geolocation API. This is then saved along with the user’s profile.
With coordinates and a set radius, we have everything we need to filter posts by location.

## Step Three: Geospacial Queries

MongoDB makes this dead simple, but of course I learned that the hard way. My first google searches were based around accomplishing this with javascript alone. I looked up things like “how to find the distance between two points with lat long javascript” which lead me to the discovery of the Haversine formula! A very cool discovery, and I’m glad I learned about it, but I also wish I had googled “find distance between points with mongoldb” before spending an entire evening trying to figure out how to implement the formula on my back-end before realizing I should probably be filtering my queries within the database itself.

I’m still very new to MongoDB, and I’m learning about a lot of powerful features that it has baked into it. One of them is the ability to save GeoJSON data inside your objects, and then utilize their many different geospatial queries in order to do all sorts of cool sorting.

So when a user creates a new post, their user information gets sent along with the post data to an api endpoint, where the post object is created and nserted to mongodb. To store the GeoJSON data, you simply format it like so:

```
geo: {
	coordinates: [lat, lon],
  type: “Point”,
},
```

Voila! I’ve got posts with queryable coordinates. From there, I created a getposts endpoint to be called whenever the user visits the feed page. The front-end passes the user’s email address, and from there the endpoint does a find on the MongoDB database for the rest of the user’s information. From there, the lat, long, and radius are passed into another find function that takes the following query:

```
   const nearSphere = {
            geo: {
                $nearSphere: {
                    $geometry: {
                        type: “Point”,
                        coordinates: [lat, lon],
                    },
                    $minDistance: 0,
                    $maxDistance: data.radius * 1609.34,
                },
            },
        };
```

I’m planning on writing an article on this specific functionality because it was a huge game changer for me and I want to ensure I fully understand what’s happening, but this is the gist of it: given a lat, long, a min distance and max distance (our user’s selected radius in this case), near sphere will check each object in our specified collection for a geo field, and then return it if it fits inside our specific min and max distance relative to the latitude and longitude we specified. SO COOL. If you’d like to learn more, [check out the docs.](https://docs.mongodb.com/manual/reference/operator/query/nearSphere/)

## Step Four: Querying for comments

This was the final hurdle I had to cover before I set up a live demo. The MongoDB docs actually cover the[main approaches to storing comments](https://docs.mongodb.com/drivers/use-cases/storing-comments) , which was a huge help in this process. The three main approaches to storing comments are to store one document per comment, embedding all comments in the parent document, or a hybrid approach that stores comments in 'buckets' of about 100 each. I ended up opting to store each comment as an individual document because it provides the most flexibility in how many comments to query for. The idea is simple, just store a referenceID to the parent post, and query for your comments based on the IDs of each of the posts you are retrieving in your radius. Again, I wasted a ton of time trying to over-engineer a solution, while the MongoDB docs were waiting patiently for me to reference them once more.

The solution to this was to use the built in \$in operator that MongoDB provides. Given an array, you can run a find on a specific field to return only the objects whose field matches the values in the array passed to it. That will look something like this:

```
   const coms = await db
            .collection(“comments”)
            .find({ referenceID: { $in: uniqueID } })
            .toArray();
```

Finally, I was ready to push this baby live!

## Next Steps

If you visited the site, it’s obvious that the layout and design itself needs some serious elbow grease. Beyond that, I’m thinking about including ‘distance from you’ to each post, some much needed ‘delete’ buttons so that you can remove your own posts and comments, and an additional feed on your dashboard that will give you a quick snapshot of all of your recent posts and comments. A reach goal after all of this is completed is to add some form of notifications for when people comment on your posts and posts that you have commented on. I’m hoping to implement much of this by the end of the week, so check back for the next installment!
