# Micro Frontend Examples

- [module-federation](https://github.com/iendeavor/micro-frontend-examples/tree/module-federation/apps)
- [single-spa](https://github.com/iendeavor/micro-frontend-examples/tree/single-spa/apps)

## Why

Pros:

- Progressively migrate technology stack
- Faster pipelines
- A/B testing
- Minimize uptime impacts
- etc.

## How

- **Runtime** module resolution/loading (e.g., module-federation and importmaps)
  - Singleton dependencies (some library (e.g., styled-components) needs to be shared across all micro frontend apps)
- Exposing lifecycle hooks (inspired by single-spa). Each micro frontend apps should be able to mount itself, thus we can use different tech stack for each micro frontend apps.
- JS and CSS sandbox isolation
- Use standard ways to communicate between micro frontend apps:
  - Passing attributes to share states (e.g., `<App token={token} />`)
  - Passing callback functions to handle events (e.g., `<App onTokenChange={onTokenChange} />`)

## Others

- Do we need the JS sandbox isolation feature of qiankun? Can't we use dedicated library for sandbox isolation?
- Can't we just use `shadow-dom` to isolate CSS? https://github.com/umijs/qiankun/blob/master/src/loader.ts#L67-L110
