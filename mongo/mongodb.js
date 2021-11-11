const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  licanceId: String,
  name: String,
  city: String,
});

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
