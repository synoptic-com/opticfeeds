// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Definitions for scraper-facing API of the feed.
//
'use strict';
var grpc = require('grpc');
var proto_feed_pb = require('../proto/feed_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_synoptic_feed_feed_FeedMessage(arg) {
  if (!(arg instanceof proto_feed_pb.FeedMessage)) {
    throw new Error('Expected argument of type synoptic.feed.feed.FeedMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_synoptic_feed_feed_FeedMessage(buffer_arg) {
  return proto_feed_pb.FeedMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_synoptic_feed_feed_SubmitFeedMessageResponse(arg) {
  if (!(arg instanceof proto_feed_pb.SubmitFeedMessageResponse)) {
    throw new Error('Expected argument of type synoptic.feed.feed.SubmitFeedMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_synoptic_feed_feed_SubmitFeedMessageResponse(buffer_arg) {
  return proto_feed_pb.SubmitFeedMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_synoptic_feed_feed_SubscriptionRequest(arg) {
  if (!(arg instanceof proto_feed_pb.SubscriptionRequest)) {
    throw new Error('Expected argument of type synoptic.feed.feed.SubscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_synoptic_feed_feed_SubscriptionRequest(buffer_arg) {
  return proto_feed_pb.SubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var FeedServiceService = exports.FeedServiceService = {
  // Subscribe to the feed.
subscribe: {
    path: '/synoptic.feed.feed.FeedService/Subscribe',
    requestStream: false,
    responseStream: true,
    requestType: proto_feed_pb.SubscriptionRequest,
    responseType: proto_feed_pb.FeedMessage,
    requestSerialize: serialize_synoptic_feed_feed_SubscriptionRequest,
    requestDeserialize: deserialize_synoptic_feed_feed_SubscriptionRequest,
    responseSerialize: serialize_synoptic_feed_feed_FeedMessage,
    responseDeserialize: deserialize_synoptic_feed_feed_FeedMessage,
  },
};

exports.FeedServiceClient = grpc.makeGenericClientConstructor(FeedServiceService);
var IngressServiceService = exports.IngressServiceService = {
  // Submits a single message to the ingress instance.
submitFeedMessage: {
    path: '/synoptic.feed.feed.IngressService/SubmitFeedMessage',
    requestStream: false,
    responseStream: false,
    requestType: proto_feed_pb.FeedMessage,
    responseType: proto_feed_pb.SubmitFeedMessageResponse,
    requestSerialize: serialize_synoptic_feed_feed_FeedMessage,
    requestDeserialize: deserialize_synoptic_feed_feed_FeedMessage,
    responseSerialize: serialize_synoptic_feed_feed_SubmitFeedMessageResponse,
    responseDeserialize: deserialize_synoptic_feed_feed_SubmitFeedMessageResponse,
  },
  // Submits a stream of messages to the feed ingress.
submitFeedMessages: {
    path: '/synoptic.feed.feed.IngressService/SubmitFeedMessages',
    requestStream: true,
    responseStream: true,
    requestType: proto_feed_pb.FeedMessage,
    responseType: proto_feed_pb.SubmitFeedMessageResponse,
    requestSerialize: serialize_synoptic_feed_feed_FeedMessage,
    requestDeserialize: deserialize_synoptic_feed_feed_FeedMessage,
    responseSerialize: serialize_synoptic_feed_feed_SubmitFeedMessageResponse,
    responseDeserialize: deserialize_synoptic_feed_feed_SubmitFeedMessageResponse,
  },
};

exports.IngressServiceClient = grpc.makeGenericClientConstructor(IngressServiceService);
