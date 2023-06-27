import express from 'express';
import MemberPayment from '../schema/payment.js';

const router2 = express.Router();

router2.post('/addPayment', async (req, res) => {
    const pay = req.body;
    const payMember = new MemberPayment(pay);
    try {
        await payMember.save();
        res.status(201).json(payMember);
    } catch (error) {
        res.status(409).json({ message: error.message })
        console.log({ message: `Backend error on adding member's Payment's...  ${error}` })
    }
})

//all payment's:-
router2.get('/allPayment', async (req, res) => {
    try {
        const payment = await MemberPayment.find({});
        res.status(200).json(payment);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

//Delit payment:-
router2.delete('/:id', async (req, res) => {
    const removePayment = MemberPayment(req.body);
    console.log(req.params.id)
    try {
        await MemberPayment.remove({ _id: req.params.id });
        console.log({ message: `Delit emplpye successfully...` })
        res.status(200).json(removePayment)
    } catch (error) {
        console.log({ message: `Backend error on editing emplpyes...  ${error}` })
        res.status(409).json({ message: error.message });
    }
});
//Find Payment:-
router2.get('/:id', async (req, res) => {
    // console.log(req.params.id);//get url parameter
    try {
        const payment = await MemberPayment.find({ _id: req.params.id });
        res.status(200).json(payment);
    } catch (error) {
        console.log({ message: `Backend error on geting member's...  ${error}` })
        res.status(440).json({ message: error.message });
    }
});
export default router2;