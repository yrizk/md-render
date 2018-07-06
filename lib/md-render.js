'use babel';

import { CompositeDisposable } from 'atom';
import cheerio from 'cheerio'
export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'md-render:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {};
  },

  // replace markdown syntax with actual html equivalents
  toggle() {
    this.scrape()
  },

  scrape() {
    if (textEditor = atom.workspace.getActiveTextEditor()) {
      //TODO: check that the registered grammar is markdown.
      textEditorElement = atom.views.getView(textEditor)
      $ = cheerio.load(textEditorElement.innerHTML)
      h1 = $('span.syntax--heading-1').text()
      console.log(h1)
    }
  }
};
