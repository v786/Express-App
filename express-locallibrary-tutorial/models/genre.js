var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {
      type: String, min: [3, 'Too few'],
      max: 100, required: true
    } //reference to the associated book
  }
);

// Virtual for bookinstance's URL
GenreSchema
  .virtual('url')
  .get(function () {
    return '/catalog/genre/' + this._id;
  });

//Export model
module.exports = mongoose.model('Genre', GenreSchema);