'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var genreSchema = new Schema(
  {
    name: {type: String, required: true, minLength: 3 ,maxLength: 100},
  }
);

module.exports = mongoose.model( 'Genre', genreSchema );