'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var movieSchema = new Schema(
  {
    title: {type: String, required: true, maxLength: 100},
    director: {type: ObjectId, ref: 'Director', required: true},
    genre: {type: ObjectId, ref: 'Genre'},
    length: {type: String},
    review: {ObjectId, ref: 'Review'},
  }
);

module.exports = mongoose.model( 'Movie', movieSchema );