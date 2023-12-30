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
  } else if (twitterAge > 15 && twitterAge <= 30) {
    behavior = "Your Twitter antics are the epitome of youthful exuberance and occasional immaturity!";
    imageSrc = 'images/young.jpg';
  } else if (twitterAge > 30 && twitterAge <= 50) {
    behavior = "Your Twitter presence combines wisdom with occasional 'back in my day' rants!";
    imageSrc = 'images/mature.jpg';
  } else {
    behavior = "You're the sage of Twitter, occasionally throwing shade like a well-aged fine wine.";
    imageSrc = 'images/wise.jpg';
  }

  return {
    description: behavior,
    imageSrc: imageSrc
  };
}
