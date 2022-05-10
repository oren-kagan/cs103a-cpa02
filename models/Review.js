'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var reviewSchema = new Schema(
  {
    rating: {type: Number, required: true, maxLength: 2},
    review_text: {type: String, maxLength: 200},
    date_of_review: {type: Date},
    reviewId: {ObjectId, ref: 'ReviewTrackerId'}
  }
);

module.exports = mongoose.model('Review', reviewSchema);