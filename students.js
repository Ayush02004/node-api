const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamps');

const StudentSchema = new Schema({
    name: {type:String, default:''},
    age: {type:Number, default: 18},
    subject: {type:String, default:''},
    marks: {type:Number, default:0}
});

// middleware
StudentSchema.pre("save", (next)=>{
    this.updated_at = Date.now();
    next();
});

StudentSchema.plugin(timestamps, {index: true});      // adds createdAt and updatedAt fields to the schema

module.exports = mongoose.model("Student", StudentSchema);