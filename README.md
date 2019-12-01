# Neue Kit Utilities
Tree-shakeable JavaScript utilities, add yours today! 🧑‍💻

## Hello 👋,

The purpose of this repo is to create a single point of access for all those little helpers, tools and utilities that you have on all your projects.

### Structure

The structure is super simple, there is a master import at the root of src that pulls in the namespaces, those in turn have their own indeci which import the modules themselves.

Each module is a sinlge exported function, please continue this way as it makes things easy to reason about and keeps individual modules small.

The aim with this approach is to have small files that do one thing well.

#### Open to contributions, ideas and feedback, oh plus bugs of course 🤓

[Documentation available here](https://neuekit.github.io/utilities/index.html)
