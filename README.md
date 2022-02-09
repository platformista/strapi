# Strapi template for Platform.sh

<p align="center">
<a href="https://console.platform.sh/projects/create-project?template=https://raw.githubusercontent.com/vincenzo/strapi-sqlite-platformsh/master/template-definition.yaml&utm_content=strapi&utm_source=github&utm_medium=button&utm_campaign=deploy_on_platform">
    <img src="https://platform.sh/images/deploy/lg-blue.svg" alt="Deploy on Platform.sh" width="180px" />
</a>
</p>

Strapi is a Headless CMS framework written in Node.js.
This template provides the most basic installation of Strapi, running on SQLite.

## Features

- [Node.js](https://nodejs.org/en/) 16
- [Strapi 4](https://strapi.io)
- [PostgreSQL 13](https://www.postgresql.org/)

### Additional content types

Stapi allows you to build your own content types. This installation ships already with two very basic content types that may server as building blocks for a blog: `Article` and `Category`.

## Post-install instructions

1. Visit the `/admin` path to register an administrative user.
2. Login with the newly created credentials.
3. Adjust public permissions by going to `admin/settings/users-permissions/roles/2`. For both the `Article` and the `Category` collections enable `find` and `findOne`.
4. Go to `Content Manager` in the lefthand sidebar, and create some content for both `Article` and `Category`. 
5. Test by requesting `/articles`, `/articles/1`, `/categories`, `/categories/1`, etc.

## Developing content types

To create your own content types, you can use the Content-Type Builder. This, however, can only be used in development mode. Since the behaviour of the builder is to generate new code that should be checked into your repository, we have decided not to enable development mode in this template, not even on the development branches. Instead, we advise you to run Strapi locally in development mode, generate the new content types, and then check the new code in, and push it up for deployment.

## X-Small container

This template will deploy Strapi in the smallest container available on Platform.sh (`XS`) if the plan used is anything above Development (i.e. at least a Small/Standard plan). When the app container is set to `XS`, the database container is automatically the smallest possible (`S`). This means resources are allocated as follows: 

```
strapi4 (type: nodejs:16, size: XS, cpu: 0.25, memory: 96)
postgres (type: postgresql:13, size: S, cpu: 0.25, memory: 128)
```

## Documentation

- [Strapi.io](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)
- [Node.js on Platform.sh](https://docs.platform.sh/languages/nodejs.html)
- [PostgreSQL on Platform.sh](https://docs.platform.sh/configuration/services/postgresql.html)
