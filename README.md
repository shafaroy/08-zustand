# NoteHub — homework 08

A notes application built with Next.js App Router, TypeScript, Axios, TanStack
Query, and Zustand. The application supports filtering, searching, pagination,
note previews and details, creating notes, and deleting notes.

## Development

Use Node.js 20.9 or later. Install the locked dependencies with `npm ci`.

Create an ignored `.env.local` file and set `NEXT_PUBLIC_NOTEHUB_TOKEN` to your
NoteHub API token. Do not commit the token. Optionally set `NEXT_PUBLIC_SITE_URL`
to the production URL; metadata uses `https://notehub.com` until it is supplied.

Run `npm run dev` to start the development server. The application needs access
to `notehub-public.goit.study`; Google Fonts must be reachable during compilation
to download and self-host Roboto.

## Creating notes

The **Create note +** link opens `/notes/action/create`. Changes to the title,
content, and tag are saved automatically in a Zustand store and persisted under
the `notehub-draft` localStorage key. Only the draft data is persisted.

**Cancel** returns to the previous page and keeps the draft. Refreshing or
reopening the form restores it. A failed request keeps the draft and displays an
error. Successful creation clears the draft, invalidates the notes cache, and
navigates to `/notes/filter/all`.

## Checks

```bash
npm run lint
npx prettier --check .
npm run build
```

The production build includes TypeScript validation. Run `npm start` after a
successful build to serve the production application.

## Vercel submission

Import `shafaroy/08-zustand` into Vercel using the Next.js preset. Set
`NEXT_PUBLIC_NOTEHUB_TOKEN` in the Vercel project's environment variables. Set
`NEXT_PUBLIC_SITE_URL` to its stable production URL so Open Graph links point to
the deployed application. Redeploy after changing these variables because
`NEXT_PUBLIC_` values are captured during compilation.

Before submitting, check the production URL, filtering, note details, draft
restoration after reload and Cancel, and successful note creation and deletion.
Submit both the GitHub repository URL and the Vercel production URL. The
assignment also asks to wait five minutes after the GitHub update before
submitting.
