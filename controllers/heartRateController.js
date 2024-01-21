import heartRateService from '../services/heartRateService.js';

const getHeartRate = (req, res) => {
  const heartRate = heartRateService.getHeartRate();
  res.json({ heartRate });
};

const postHeartRate = (req, res) => {
  const { heartRate } = req.body;
  heartRateService.postHeartRate(heartRate);
  res.json({ success: true, message: 'Heart rate posted successfully' });
};

export {
  getHeartRate,
  postHeartRate,
};
