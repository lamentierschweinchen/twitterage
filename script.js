function getBehaviorDescription(twitterAge) {
  let behavior = '';
  let imageSrc = '';

  const roundedAge = Math.round(twitterAge); // Round the calculated age

  if (roundedAge <= 5) {
    behavior = "You're throwing Twitter tantrums like a toddler denied their favorite toy!";
    imageSrc = 'images/toddler.jpg'; // Update path to toddler image
  } else if (roundedAge > 5 && roundedAge <= 10) {
    behavior = "You're the petulant prince/princess of Twitter, always wanting attention and retweets!";
    imageSrc = 'images/kid.jpg'; // Update path to kid image
  } else if (roundedAge > 10 && roundedAge <= 15) {
    behavior = "Your tweets are a whirlwind of teenage rebellion and immaturity!";
    imageSrc = 'images/teenager.jpg'; // Update path to teenager image
  }
  // ... (update paths for other age groups)

  const result = {
    behavior: behavior,
    imageSrc: imageSrc
  };

  return result;
}

function calculateTwitterAge() {
  const actualAge = parseInt(document.getElementById('actualAge').value);
  const twitterYears = parseInt(document.getElementById('twitterYears').value);

  if (isNaN(actualAge) || isNaN(twitterYears) || twitterYears === 0) {
    document.getElementById('result').innerText = 'Please enter valid numbers.';
    return;
  }

  const twitterAge = actualAge / twitterYears;

  const roundedAge = Math.round(twitterAge); // Round the calculated age
  const behaviorInfo = getBehaviorDescription(roundedAge); // Use rounded age for behavior description

  const behaviorText = behaviorInfo.behavior;
  const imageSource = behaviorInfo.imageSrc;

  document.getElementById('result').innerText = `Your Twitter age is approximately ${roundedAge} years old. ${behaviorText}`;

  const ageImage = document.getElementById('ageImage');
  if (imageSource) {
    ageImage.style.display = 'block';
    ageImage.src = imageSource;
    ageImage.style.maxWidth = '80%'; // Adjusted image display size
  } else {
    ageImage.style.display = 'none';
  }
}
