'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var reviewTrackerSchema = new Schema(
  {
    reviewID: {type: String, required: true},
  }
);

module.exports = mongoose.model( 'ReviewTracker', reviewTrackerSchema );