import express from 'express';

import { buyMovieTicket, getTickets } from '../controllers/movieTicketController.js';

const router = express.Router();

router.post('/', buyMovieTicket);
router.get('/', getTickets);

export default router;
