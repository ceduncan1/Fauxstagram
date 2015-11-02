import Backbone from 'backbone';
import PhotoModel from './photo_model';

let PhotosCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/instagram',

  model: PhotoModel,

  parse: function(data) {
    return data.results;
  }

});

export default PhotosCollection;
