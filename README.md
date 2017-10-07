# Contentful + next.js

1. How easy will it be for content writers to update/add/remove content?
How do you add an application, new text, pictures, category, post?
> Contentful lets you model the data however you want. (In wordpress this is like having different types of Posts)
> Here is an example of what the content models could look like:
> ```
> Integration {
>   name: string,
>   logo: media,
>   type: reference to IntegrationType
> }
> 
> IntegrationType {
>   name: string (ex. zapier, native),
>   icon: media
> }
> 
> Post {
>   title: string,
>   integration: reference to Integration,
>   content: string
> }
> ```

How do you preview and publish?
> next.js allows you to run a node server in lower stage environments but a statically built site for production.
> Here's how I imagine out setup would look like:
>
> ![image](https://user-images.githubusercontent.com/5312329/30543473-9a3f41f4-9c83-11e7-9f17-188a586f626e.png)
>
> So what's going on here?
> - Preview API serves the latest draft of content, Delivery API serves the latest published version of content
> - devs dynamically read the latest draft when using their local dev servers. Yay! We don't have to update a content dependency
> - content editors can edit content in Contentful, and then go to preprod to view their changes
> - When new content is published, we should trigger a build that publishes a new static version of the site. (We can trigger a notification to be sent to the content editors)

How does it compare with the existing wordpress flow?
> It should feel similar for content editors. They log into a service and update content there. Content for posts is written in markdown which make require some adjustment but I think it should be fine. Here's a gif of updating content in Contentful:
>
> ![gif of changing content in Contentful](https://media.giphy.com/media/l378vEz2ZxOWxVW0g/giphy.gif)
>
> The content auto saves as the latest draft version and there is a button "Publish" that allows you to publish the content.

2. Can we have continuous integration?
> Yes

3. How testable will everything be?
> We would be able to test it the same way we test the dev-portal

4. If we choose something different than Wordpress/our current stack, can we do the same for the Public Site/Blog/Help Center?
> In theory yes. The Help Center is probably the easiest to use this tech stack for. In fact the POC I did is actually for the Help Center. The Public Site and Blog are also theoretically possible but I would want to have a better understanding of all the content that exists currently in the Public Site and Blog.

5. How much effort will it take to use a new tech stack? What are the risks? What are the benefits?
> There will be some effort setting up the CI + CD and deploying the preprod version of the site to a server behind our firewall.
> I would say that the risks are in the execution of this new tech stack. What if there are issues we cannot predict? But this risk exists for anything you do for the first time.
> The benefits are that it should be a much more pleasant experience for devs to work on the project as well as for content editors.
> Here are some of the benefits:
> - single source of truth for data
> - no need for devs to sync content
> - better testability (live previews for new features, writing components that should be testable in isolation, etc.)

6. How can we import integrations into the CMS (there will be hundreds)
> Once we know what the content model is in Contentful we can write a script that communicates with the API and imports all of the integrations.

7. Pricing?
> It's expensive.https://www.contentful.com/pricing/
> We could get away with a dev account but eventually I think we would want to upgrade to the team account which is $249/month.

8. How mature is the service we plan on using?
> Hmmm difficult to answer, although they've been around for a couple of years. Started in 2014? Maybe earlier? I heard of them through Lee, he said they're using Contentful for their Help Center at his new job.

