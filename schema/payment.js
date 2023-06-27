import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const payment = mongoose.Schema({
    date: String,
    firstName: String,
    ids:String, 
    insentive: Number,
    lastName: String,
    netsalary: Number,
    previousadvanceamount: Number,
    salary: Number,
    stockboy: Number,
    thismonthadvance: Number,
})

autoIncrement.initialize(mongoose.connection);
payment.plugin(autoIncrement.plugin, 'AddMemberPayment');
const MemberPayment = mongoose.model('AddMemberPayment', payment);
export default MemberPayment;