# Prais2
## Build automation

WIP: Moving to using babashka for build automation. e.g. `bb gen` will kick off the gen task, `bb sass` generates css.
Need to add some tasks to sort out the other issues below.

## CSS generation

The following task will generate the styles in `target/public/css`.

```shell
$ bb sass
```

## HTML generation

Pages are generated for the correct build, as the html files must reference the correct js file. Figwheel-main creates a js file named by the build (e.g. `dev-main.js` for the dev build) in `target/public/cljs-out/`.

```shell
$ bb gen-html 
```
> This will generate the html pages for a production build.

```shell
bb gen-html-dev 
```
> This will generate the html pages for a development build.

## Development build

To create a development build with hot-reload using figwheel-main:

```shell
$ bb gen-dev
```
>If using VSCode/Calva, Jack-in selecting figwheel-main with deps.edn.>Do not tick any aliases.
>Connect to the dev build.

## Production build

To create a production build:

```shell
$ bb gen 
```




MH: I think the script folder isn't used by babashka (because the tasks are not defined in clj file in the script folder)




<!-- 
The old Leingingen and classic figwheel build is decribed in the commented out section below.


Communicating the risks of infant surgery.
# Updated development builds
## Development builds


> We've switched the main development build to use IntelliJ (community edition with the Cursive plugin) plus Figwheel.
> To run SASS as part of the build follow the Fighwel instructions for working with cursive, but make a
> run configuration that uses script/figwheel.clj rather than script/repl.clj.

> Instructions below are for a SASS-less emacs build. You can switch to this by changing the project.clj
> figwheel dependencies back to the default figwheel setup so figwheel-sidecar is no longer used. If you do this
> you'll also need to add in SASS. Probably easiest to add it to gulp.

There are two development builds - one for [devcards](https://github.com/bhauman/devcards) and one for the PRAIS2 site. The devcards build is good for testing and visualising code and site components. You can switch between these two options at run time.


This is a ClojureScript project. To create a development environment from scratch you will need to install:

* A Java virtual machine. (e.g. A [recent JRE from Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html))
* Leiningen. Follow [these installation instructions](http://leiningen.org/), which will provide the `lein` command.
* A suitable text editor. I originally used emacs with an [emacs-live set up](http://overtone.github.io/emacs-live/) for clojurescript development, but later switched to IntelliJ community edition with the Cursive plugin. Another good alternative is the Atom editor with the Proto-REPL plugin.
>
Once you have leiningen installed, get an interactive development environment for running by typing:
```
git clone https://github.com/gmp26/prais2cljs.git prais2
cd prais2
lein figwheel
```
in a terminal or command line window. This will download and install all other dependencies and launch a local development server. 

### Setting up IntelliJ

Create run configuration with options below.

* Change to Clojure Main REPL.
* In Common Option - Parameters add "script/figwheel.clj"

### Switching builds

In a REPL, say `(switch-to-build :devcards)` or `(switch-to-build :dev)`.

### To work with devcards

Open your browser at http://localhost:3449/cards.html to view. Once a browser connects you will have a REPL executing there allowing you to test cljs functions in situ. Use clojure's `in-ns` function to switch namespace to the source file you are working on. Source maps are provided so you are able to step through clojurescript code in Chrome Developer Tools.

### To work with the site
Open your browser at http://localhost:3449/index.html to view.

In both development builds, 
[Figwheel](https://github.com/bhauman/lein-figwheel) gives you live reloading into the browser. 


Production build
----------------

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

-->

## Test

Test by serving out the target/public folder (e.g. with python 2, `cd target/public & python -m 'SimpleHTTPServer'` and then viewing localhost:8000. In python 3, `cd target/public & python -m 'http.server'`).

## Deployment

Upload and serve the target/public folder.
> Be sure to have generated the styles and relevant html pages and build first.

## Other dependencies

The project uses ReactJS to provide a fast virtual DOM, together with the Reagent flavour
of [tonsky/rum](https://github.com/tonsky/rum) to drive React. To create an initial fresh, empty figwheel/Rum/ReactJS project I used [this Leiningen template](https://github.com/gmp26/fwrum). See project.clj for details.

If upgrading dependencies, pay attention to the latest versions of React that Rum supports.

## License

Copyright © 2014 University of Cambridge

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.

### Reference

For the production optimised build of openlayers from cljsjs see [the condense example](https://github.com/condense/example_openlayers_cljsjs). 
