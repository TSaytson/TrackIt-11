export const MinimumDaysError = () => {
  return {
    response: {
      data: {
        details: 'Select at least one day'
      }
    }
  }
}

export const MaximumHabitNameError = () => {
  return {
    response: {
      data: {
        details: 'Maximum habit name length (20)'
      }
    }
  }
}