# Prais2

Communicating the risks of infant surgery.

## Development setup

This is a ClojureScript project. To create a development environment from scratch you will need to install:

* A Java virtual machine. (e.g. A [recent JRE from Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* Leiningen. Follow [these installation instructions](http://leiningen.org/), which will provide the `lein` command.
* A suitable text editor. I use emacs with an [emacs-live set up](http://overtone.github.io/emacs-live/) for clojurescript development. You may prefer Sublime or LightTable or IntelliJ with the Cursive plugin for Clojure. 
>
Once you have leiningen installed, get an interactive development environment for running by typing:
```
git clone https://github.com/gmp26/prais2cljs.git prais2
cd prais2
lein figwheel
```
in a terminal or command line window. This will download and install all other dependencies and launch a local developemnt server. Open your browser at http://localhost:3449 to view. Once a browser connects you will have a REPL executing there allowing you to test cljs functions in situ. Use clojure's `in-ns` function to switch namespace to the source file you are working on. Source maps are provided so you are able to step through clojurescript code in Chrome Developer Tools.

[Figwheel](https://github.com/bhauman/lein-figwheel) gives you live reloading into the browser. It's brilliant.

Production build
----------------

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

Test 
----
Test by serving out the resources/public folder (e.g. with `cd resources/public & python -m'SimpleHTTPServer'` and then viewing localhost:8000).

Deployment
----------

Upload and serve the resources/public folder. 

You'll probably want to limit the client-side app to just the interactive parts of the current app for SEO purposes.

## Other dependencies

The project uses ReactJS to provide a fast virtual DOM, together with the Reagent flavour
of [tonsky/rum](https://github.com/tonsky/rum) to drive React. To create an initial fresh, empty figwheel/Rum/ReactJS project I used [this Leiningen template](https://github.com/gmp26/fwrum). See project.clj for details.

## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
