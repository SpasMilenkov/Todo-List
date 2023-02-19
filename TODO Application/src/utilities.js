const dateStringConstructor = (hours, minutes) => {
  if (Math.floor(hours / 24) > 0) {
    const days = Math.floor(hours / 24)
    return `Due in ${days}days and ${hours - days * 24}hours`
  }
  if (hours === 0) {
    return `Due in ${minutes}minutes`
  }
  if (hours < 25 && minutes === 0) {
    return `Due in ${hours}hours`
  }
  if (hours < 25 && minutes !== 0) {
    return `Due in ${hours}hours and ${minutes} minutes`
  }
}
export { dateStringConstructor }
