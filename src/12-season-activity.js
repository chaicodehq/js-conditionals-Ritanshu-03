/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here
  let season = "";
  let activity = "";
  const months = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  if (!months.includes(month)) {
    return null;
  }
  if (months.slice(0, 3).includes(month)) {
    season = "Winter";
  }
  if (months.slice(3, 6).includes(month)) {
    season = "Spring";
  }
  if (months.slice(6, 9).includes(month)) {
    season = "Summer";
  }
  if (months.slice(9).includes(month)) {
    season = "Autumn";
  }
  if (season === "Winter") {
    if (temperature >= 0) {
      activity = "ice skating";
    } else {
      activity = "skiing";
    }
  }
  if (season === "Spring") {
    if (temperature <= 20) {
      activity = "museum visit";
    } else {
      activity = "hiking";
    }
  }
  if (season === "Summer") {
    if (temperature <= 35) {
      activity = "cycling";
    } else {
      activity = "swimming";
    }
  }
  if (season === "Autumn") {
    if (temperature <= 15) {
      activity = "reading at a cafe";
    } else {
      activity = "nature walk";
    }
  }
  return { season, activity };
}
