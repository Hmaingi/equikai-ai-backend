// api/predict.js

export default function handler(req, res) {
  const { horseName, age, temperature, heartRate, activityLevel } = req.body || {};

  // Simple mock health prediction logic
  const isHealthy =
    temperature >= 37 && temperature <= 38.5 &&
    heartRate >= 28 && heartRate <= 44 &&
    activityLevel === 'active';

  const performanceScore = Math.min(
    100,
    (100 - Math.abs(37.5 - temperature) * 10) +
    (100 - Math.abs(36 - heartRate) * 2)
  ) / 2;

  res.status(200).json({
    horse: horseName || "Unnamed",
    status: isHealthy ? "Healthy" : "Check-up Recommended",
    performanceScore: Math.round(performanceScore),
    insights: isHealthy
      ? "Horse appears to be in good condition."
      : "Some metrics are outside the ideal range."
  });
}
