import express from 'express';
import { getHeartRate, postHeartRate } from '../controllers/heartRateController.js';

const router = express.Router();

router.get('/', getHeartRate);
router.post('/', postHeartRate);

export default router;
