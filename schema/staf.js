import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
 
const stafSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    qualification: String,
    age: String,
    email: {
        type: String,
        unique: true,
    },
    contact: String,
    ids:{
        type:String, 
        unique:true},
    post: String,
    address1: String,
    address2: String,
    payment: String,
    access: String,
    Aadhaar: String,
    Photo: String,
    Passbook: String
})

autoIncrement.initialize(mongoose.connection);
stafSchema.plugin(autoIncrement.plugin, 'TeamMember');
// console.log(new mongoose.mongo.ObjectId())
const TeamMember = mongoose.model('TeamMember', stafSchema);
export default TeamMember;