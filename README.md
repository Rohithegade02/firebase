Built an TWITTER like UI
Functionality of this Projects-
1.Built an User Interface where user can create a Post,display his Post,View his/her own Post and also he/her can view other Posts also.
2.Posts are visible to all the users.
3.Only loggedIn users should be able to create new posts, edit posts, delete posts.
4.Used NextAuth libaray(Authentication of NextJS) to build Google Oauth for signIn and signOut functionality. 5. Firebase is used for storing user and his Post information .
6.Also enabled firebase storage for storing images of user s post.
7.Application is be responsive according to device screen size (used Tailwind CSS -libaray of CSS and also built by makers of NextJS).
8.The user who created the post he can only delete his/her post and cannot delete others post.
9.Also did ServerSideRendering to fetch users session.

Additional Functionality-
10.User can like his/her own post and also others post also.
11.Added Emoji mart so that user can add emoji to his/her post.
12.Also add moment to show the time when user has posted.
13.Used Recoil for state management.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
