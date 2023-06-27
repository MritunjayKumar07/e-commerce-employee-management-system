import express from 'express';
import TeamMember from '../schema/staf.js';


const router3 = express.Router();

router3.post('/login', async (req, res) => {
    const staf = req.body;
    const email = staf.email;
    const ids = staf.ids;
    try {
        const data = await TeamMember.find({ ids: ids, email:email })
        if (data.length) {
            res.status(200).json(data);
        } else {
            res.status(409).json({ message: 'Not match enterd input...' })
        }

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

router3.post('/idsFind', async (req, res) => {
    const staf = req.body;
    const ids = staf.ids;
    try {
        const data = await TeamMember.find({ ids: ids,})
        if (data.length) {
            res.status(200).json(data);
        } else {
            res.status(409).json({ message: 'Not match enterd input...' })
        }

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})
export default router3;