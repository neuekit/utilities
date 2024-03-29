![Hero](https://raw.githubusercontent.com/neuekit/utilities/main/.github/hero.svg)

<p align="center">
  Tree-shakeable JavaScript utilities, add yours today! 🧑‍💻
</p>

## Hello 👋,

<a href="https://github.com/neuekit/utilities/releases">
<img src="https://img.shields.io/github/v/release/neuekit/utilities" alt="Releases" />
</a>

<a href="https://github.com/neuekit/utilities/actions">
<img src="https://github.com/neuekit/utilities/actions/workflows/main.yml/badge.svg" alt="CI" />
</a>

The purpose of this repo is to create a single point of access for all those little helpers, tools and utilities that you have on all your projects.

### Structure

The structure is super simple, there is a main import at the root of lib that pulls in the namespaces, those in turn have their own indice which import the modules themselves.

Each module is a single exported function or micro api, please continue this way as it makes things easy to reason about and keeps individual modules small.

The aim with this approach is to have small files that do one thing well.

#### Open to contributions, ideas and feedback, oh plus bugs of course 🤓

[Documentation available here](https://neuekit.github.io/utilities/index.html)

![Alt](https://repobeats.axiom.co/api/embed/dff5b0ba9f0da76ccc2a8349f39eec1c743b42f7.svg "Repobeats analytics image")
