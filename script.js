function calculateTwitterAge() {
  const actualAge = parseInt(document.getElementById('actualAge').value);
  const twitterYears = parseInt(document.getElementById('twitterYears').value);

  if (isNaN(actualAge) || isNaN(twitterYears) || twitterYears === 0) {
    document.getElementById('result').innerText = 'Please enter valid numbers.';
    return;
  }

  const twitterAge = actualAge / twitterYears;
  document.getElementById('result').innerText = `Your Twitter age is approximately ${twitterAge.toFixed(2)} years old.`;
}

function getBehaviorDescription(twitterAge) {
  let behavior = '';
  let imageSrc = '';

  if (twitterAge <= 5) {
    behavior = "You're throwing Twitter tantrums like a toddler denied their favorite toy!";
    imageSrc = 'images/toddler.jpg'; // Path to the toddler image
  } else if (twitterAge > 5 && twitterAge <= 10) {
    behavior = "You're the petulant prince/princess of Twitter, always wanting attention and retweets!";
    imageSrc = 'images/prince_princess.jpg'; // Path to the prince/princess image
  } else if (twitterAge > 10 && twitterAge <= 15) {
    behavior = "Your tweets are a whirlwind of teenage rebellion and immaturity!";
    imageSrc = 'images/teen_rebellion.jpg'; // Path to the teen rebellion image
  }
  // ... (other behavior descriptions)

  const result = {
    behavior: behavior,
    imageSrc: imageSrc
  };

  return result;
}
