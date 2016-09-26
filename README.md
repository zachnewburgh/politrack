# politrack

## Description

This Rails-Angular app is a database of politicians. Users can create, read, update, and delete politicians, as well as upvote, search, and filter them based on select attributes.

politrack users the [responders](https://github.com/plataformatec/responders), [bower-rails](https://github.com/rharriso/bower-rails), and [angular-rails-templates](https://github.com/pitr/angular-rails-templates) to successfully execute.

## Installation Guide

If not already available, install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Bundler](http://bundler.io/#getting-started).

Then, run the following in your command line:

```
git clone https://github.com/zachnewburgh/politrack.git
cd politrack
bundle install
rails db:migrate
```

To start up a local server, run rails s in your command line, and then navigate to localhost:3000 in your web browser.

## Contributors' Guide

File a ticket on the [politrack issue tracker](https://github.com/zachnewburgh/politrack/issues), and provide as much information as possible. In advance, thanks for your helpful feedback!

## License

Copyright (c) 2016 Zach Newburgh.