/**
 * @param {string} imageId
 * @returns {string}
 */
function getImagePath(imageId) {
  return `https://res.cloudinary.com/dtwiszeub/image/fetch/c_fit,h_2000,q_auto,w_2000/f_webp/https://vivid344-webspeedhackathon2021.herokuapp.com/images/${imageId}.jpg`;
}

/**
 * @param {string} movieId
 * @returns {string}
 */
function getMoviePath(movieId) {
  return `https://res.cloudinary.com/dtwiszeub/image/fetch/q_auto/https://vivid344-webspeedhackathon2021.herokuapp.com/movies/${movieId}.gif`;
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
  return `https://res.cloudinary.com/dtwiszeub/image/fetch/c_fit,h_2000,q_auto,w_2000/f_webp/https://vivid344-webspeedhackathon2021.herokuapp.com/images/profiles/${profileImageId}.jpg`;
}

export { getImagePath, getMoviePath, getSoundPath, getProfileImagePath };
