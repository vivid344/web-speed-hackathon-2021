/**
 * @param {string} imageId
 * @returns {string}
 */
function getImagePath(imageId) {
  return `https://res.cloudinary.com/dtwiszeub/image/fetch/c_fit,h_512,q_auto:eco,w_512/f_webp/https://vivid344-webspeedhackathon2021.herokuapp.com/images/${imageId}.jpg`;
}

/**
 * @param {string} movieId
 * @returns {string}
 */
function getMoviePath(movieId) {
  return `https://res.cloudinary.com/dtwiszeub/image/fetch/c_fit,h_512,q_auto:low/https://vivid344-webspeedhackathon2021.herokuapp.com/movies/${movieId}.gif`;
}

/**
 * @param {string} soundId
 * @returns {string}
 */
function getSoundPath(soundId) {
  return `/sounds/${soundId}.mp3`;
}

/**
 * @param {string} profileImageId
 * @returns {string}
 */
function getProfileImagePath(profileImageId) {
  return `https://res.cloudinary.com/dtwiszeub/image/fetch/c_fit,h_128,q_auto:eco,w_128/f_webp/https://vivid344-webspeedhackathon2021.herokuapp.com/images/profiles/${profileImageId}.jpg`;
}

export { getImagePath, getMoviePath, getSoundPath, getProfileImagePath };
