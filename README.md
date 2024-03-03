# Slides

A custom container to serve my talk slides.

You probably don't want to use this yourself, but it's open source anyway!

## Features

- Serve files performantly with `nginx`
- Automatically calculate a sitemap based on directories
- Redirect the root to my website.
- Upload files via WebDAV (protected by basic auth).
- Healthcheck endpoint at `/.ping`.

## Configuration

Files should be mounted to `/srv`.

By default, basic auth is credentials are `user:password`, but can be overridden by `/etc/nginx/.htpasswd`.

By default, the container runs as UID `1000`, which can be overridden by `$PUID`.
