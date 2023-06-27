import express from 'express';
import TeamMember from '../schema/staf.js';

const router = express.Router();
//add membet:-
router.post('/add', async (req, res) => {
    const staf = req.body;
    const newStaf = new TeamMember(staf);
    console.log(newStaf);
    try {
        const data = await TeamMember.find({ ids: req.body.ids })
        if (data.length) {
            res.status(409).json({ message: 'Member ID Alwarady Avelable...' })
            // res.send({ message: `Creating new emplpyes successfully...`, data: editEmployes, alert: true })
        } else {
            // console.log(req.body);
            const data = TeamMember(req.body)
            data.save();
            // await newStaf.save();
            // res.status(201).json(newStaf);
        }

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})
//show all member:-
router.get('/all', async (req, res) => {
    try {
        const member = await TeamMember.find({});
        res.status(200).json(member);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})
//Delit all member:-
router.delete('/:id', async (req, res) => {
    const removeTeamMember = TeamMember(req.body);
    try {
        await TeamMember.remove({ _id: req.params.id });
        console.log({ message: `Delit emplpye successfully...` })
        res.status(200).json(removeTeamMember)
    } catch (error) {
        console.log({ message: `Backend error on editing emplpyes...  ${error}` })
        res.status(409).json({ message: error.message });
    }
});
//Find Member:-
router.get('/:id', async (req, res) => {
    // console.log(req.params.id);//get url parameter
    try {
        const Member = await TeamMember.find({ _id: req.params.id });
        res.status(200).json(Member)
    } catch (error) {
        console.log({ message: `Backend error on geting member's...  ${error}` })
        res.status(440).json({ message: error.message });
    }
});


export default router;