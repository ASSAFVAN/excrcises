const mongoose = require("mongoose");
const validator = require("validator");

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: { type: String, required: true, minlength: 10 },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error("price must be a positive number");
        }
      },
    },
    discount: { type: Number, default: 0 },
    images: {
      type: Array,
      required: true,
      validate(value) {
        if (value.length < 2) {
          throw new Error("need at least two images");
        }
      },
    },
    phoneNumber: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, "he-IL")) {
          throw new Error(
            "phone number is valid according to israel phone rules"
          );
        }
      },
    },
  },
  dateAdded: { type: Date, default: new Date() },
});

module.exports = Product;
