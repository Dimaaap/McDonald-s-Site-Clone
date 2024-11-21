export const calculateDailyCaloriesPart = (calories, fullNumber) => {
    const dailyPart = (calories / fullNumber) * 100
    return Math.round(dailyPart)
  }
  