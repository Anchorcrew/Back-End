const mongoose = require("mongoose");
const express = require("express");
const Anchor = require("../models/anchors");
const uuid4 = require("uuid4");

exports.getAllAnchor = async (req, res, next) => {
  try {
    anchors = await Anchor.find({});
    res.status(200).json(anchors);
  } catch (err) {
    console.log(err);
  }
};

exports.getAnchor = async (req, res, next) => {
  try {
    anchors = await Anchor.find({id: req.params.id});
    res.status(200).json(anchors);
  } catch (err) {
    console.log(err);
  }
};

exports.createAnchor = async (req, res, next) => {
  try {
      const anchorData = req.body;
      const anchor = new Anchor(anchorData);
      await anchor.save();
      res.status(200).json();
  } catch (err) {
    console.log(err);
  }
};

exports.deleteAllAnchors = async (req, res, next) => {
    try {
      await Anchor.deleteMany({});
      res.status(200).json();
    } catch(err) {
      console.log(err);
    }
}

exports.deleteAnchor = async (req, res, next) => {
  try {
    anchorID = req.params.id;
    await Anchor.deleteOne({id: anchorID});
    res.status(200).json();
  } catch(err) {
    console.log(err);
  }
}