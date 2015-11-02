import Backbone from 'backbone';
import $ from 'jquery';
import ReactDom from 'react-dom';
import React from 'react';

import PhotosCollection from './resources/photos_collection';

import homeView from './views/home';


import APP_ID from './parse_data';
import API_KEY from './parse_data';
import APP_URL from './parse_data';

// ???? = DUMMY_DATA



let Router = Backbone.Router.extend({

  routes: {
    ""           : "home",
    "images/:id" : "showImage",
    "edit/:id"   : "editImage",
    "add"        : "addImage"
  },

  initialize: function(appElement) {
    this.el = appElement;
    this.photos = new PhotosCollection();
  },

  home(component) {
    let peanutButter = ['one', 'two', 'three'];
    ReactDom.render(
      <ThumnailList onThumbnailSelect={this.selectImage.bind(this)} data={component}/>,
      this.el
    );
  },

  selectImage(id) {
    this.navigate('images/' + id, {trigger: true});
  },

  ShowImage(id) {
    let image = id.find(item => item.objectId === id);
    ReactDom.render(<PreviewImage src={image.ImgSrc}/>, this.el);
  },

  start: function() {
    Backbone.history.start();
  }

};


export default Router;

