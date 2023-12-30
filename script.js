function calculateTwitterAge() {
  const actualAge = parseInt(document.getElementById('actualAge').value);
  const twitterYears = parseInt(document.getElementById('twitterYears').value);

  if (isNaN(actualAge) || isNaN(twitterYears) || twitterYears === 0) {
    document.getElementById('result').innerText = 'Please enter valid numbers.';
    document.getElementById('ageImage').style.display = 'none';
    return;
  }

  const twitterAge = actualAge / twitterYears;
  const roundedAge = Math.round(twitterAge);

  const behavior = getBehaviorDescription(roundedAge);
  const behaviorText = behavior.description;
  const imageSource = behavior.imageSrc;

  document.getElementById('result').innerText = `Congratulations! Your Twitter age is approximately ${roundedAge} years old. ${behaviorText}`;

  const ageImage = document.getElementById('ageImage');
  ageImage.src = imageSource;
  ageImage.style.display = 'block';
  ageImage.style.maxWidth = '80%';
}

function getBehaviorDescription(twitterAge) {
  let behavior = '';
  let imageSrc = '';

  if (twitterAge <= 5) {
    behavior = "You're throwing Twitter tantrums like a toddler denied their favorite toy!";
    imageSrc = 'images/toddler.jpg';
  } else if (twitterAge > 5 && twitterAge <= 10) {
    behavior = "You're the petulant prince/princess of Twitter, always wanting attention and retweets!";
    imageSrc = 'images/kid.jpg';
  } else if (twitterAge > 10 && twitterAge <= 15) {
    behavior = "Your tweets are a whirlwind of teenage rebellion and immaturity!";
    imageSrc = 'images/teenager.jpg';
  } 
  // Add more conditions for other age groups

  return {
    description: behavior,
    imageSrc: imageSrc
  };
}
