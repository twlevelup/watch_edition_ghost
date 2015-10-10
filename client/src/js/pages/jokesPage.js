'use strict';

var Page = require('../framework/page');

var JOKES = [
  'Why are the fish happy on saturday? because the school is out',
  'I wondered why the frisbee was getting bigger, and then it hit me.',
  'I used to like my neighbours, until they put a password in their wi-fi',
  'What do you get with a dog crossing the road? a golden receiver.',
  'For anyone who think a woman’s place is in the kitchen, remember that’s where the knifes are kept.',
  'What did the dog say when it sat on the sand paper? rough',
  'What did the fish say when he swam into the wall? Damn',
  'How did the blonde die while raking leaves? She fell out of the tree.',
  'What did the ocean say to the beach? Nothing, it just waved.',
  'How do you get a pikachu on a bus? You poke em on',
  'What the difference between roast beef and pea soup? Anyone can roast beef.',
  'Why is 6 afraid of 7? because 7 is a registered 6 offender',
  'I bet earth makes fun of the other planets for having no life',
  'Last time i got  caught stealing a calendar i got 12 months',
  'How did i escape Iraq? Iran',
  'Never trust atoms, they make up everything',
  'If Apple make a car, would it have windows?',
  'The person who invented the door knock won the no-bell prize.',
  'I couldn’t work out how to fasten my seatbelt. Then it clicked.',
  'What does a nosey pepper do ? Get jalapeño business.',
  'What is Bruce Lee’s favourite drink? Wataaaah!',
  'What kind of shoes do ninjas wear? Sneakers',
  'What time is it when you have to go to the dentist? Tooth-hurtie',
  'How does NASA organise their company parties? They planet.',
  'What comes down but never go up? Rain',
  'If you want to catch a squirrel just climb a tree and act like a nut',
  'You kill vegetarian vampires with a steak to the heart.',
  'How do you fit more pigs on your farm? build a sty-scraper',
  'Why are teddy bears never hungry? They are always stuffed',
  'Where do polar bears vote? The north poll',
  'Why do fish live in salt water? Because pepper makes them sneeze',
  'Why are fish so smart? Because they live in schools',
  'What do you call a bear with no ears? B!',
  'How do bees get to school? By school buzz!',
  'What did the 80 year old pirate say? Aye matey!'
];

var JokesPage = Page.extend({

  id: 'jokes-page',

  state: {
    jokeIndex: 0,
    currentJokeList: []
  },

  template: require('../../templates/pages/jokesPage.hbs'),

  buttonEvents: {
    right: '',
    left: 'goToHome',
    top: 'nextJoke',
    bottom: 'nextJoke',
    face: ''
  },

  render: function() {
    this.state.currentJokeList = _.shuffle(JOKES);
    this.state.jokeIndex = 0;

    this.$el.html(this.template({
      joke: this.state.currentJokeList[this.state.jokeIndex],
      index: this.state.jokeIndex
    }));

    return this;
  },

  goToHome: function() {
    global.App.navigate('');
  },

  nextJoke: function() {
    this.state.jokeIndex += 1;

    if (this.state.jokeIndex >= JOKES.length) {
      this.state.currentJokeList = _.shuffle(JOKES);
      this.state.jokeIndex = 0;
    }

    this.$el.html(this.template({
      joke: this.state.currentJokeList[this.state.jokeIndex],
      index: this.state.jokeIndex
    }));
    return this;
  },

  prevJoke: function() {
    this.state.jokeIndex -= 1;

    if (this.state.jokeIndex < 0) {
      this.state.currentJokeList = _.shuffle(JOKES);
      this.state.jokeIndex = JOKES.length - 1;
    }

    this.$el.html(this.template({
      joke: this.state.currentJokeList[this.state.jokeIndex],
      index: this.state.jokeIndex
    }));
    return this;
  }
});

module.exports = JokesPage;
