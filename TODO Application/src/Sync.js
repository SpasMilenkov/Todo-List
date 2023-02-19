const config = {
  morning: {
    bodyBackground: 'linear-gradient(30deg, #444558, #b35c9e, #e6c49c))',
    datePicker: 'white',
    cardBackground: `linear-gradient(${Math.floor(
      Math.random() * 380
    )}deg,  #444558, #b35c9e, #e6c49c)`,
    image: 'url("/images/morning.png")',
    brightness: `inset 0 0 2000px rgba(255, 255, 255, 0.5)`,
  },
  noon: {
    bodyBackground: 'linear-gradient(330deg, #e5ac3b, #c87225, #964424)',
    datePicker: 'white',
    cardBackground: `linear-gradient(${Math.floor(
      Math.random() * 380
    )}deg, #fbce75, #e58630, rgba(150,68,36,1))`,
    image: 'url("/images/noon.png")',
    brightness: `inset 0 0 2000px rgba(255, 255, 255, 0.3)`,
  },
  evening: {
    bodyBackground:
      'linear-gradient(330deg, #aa5c46, #6d2e61, rgba(26,21,49,1))',
    datePicker: 'dark',
    cardBackground: `linear-gradient(${Math.floor(
      Math.random() * 380
    )}deg, #b72479, #5f226f, rgba(26, 21, 49, 1))`,
    image: 'url("/images/evening.png")',
    brightness: `inset 0 0 2000px rgba(255, 255, 255, 0.3)`,
  },
  night: {
    bodyBackground:
      'linear-gradient(120deg, #271d32, #3d3275, rgba(60,82,195,1))',
    datePicker: 'dark',
    cardBackground: `linear-gradient(${Math.floor(
      Math.random() * 380
    )}deg, #3c52c3, #4782bc, #51a7b6)`,
    image: 'url("/images/night.png")',
    brightness: `inset 0 0 2000px rgba(255, 255, 255, 0.3)`,
  },
}
function sync() {
  const time = new Date()
  const hours = time.getHours()
  if (hours <= 12) {
    return config.morning
  }
  if (hours < 16 && hours > 12) {
    return config.noon
  }
  if (hours >= 16 && hours < 20) {
    return config.evening
  }
  return config.night
}
const theme = sync()
export default theme
