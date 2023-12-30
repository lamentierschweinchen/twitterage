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
  } else if (roundedAge > 15 && roundedAge <= 18) {
    behavior = "You're a walking contradiction on Twitter - part adult, part teenager, and all drama!";
    imageSrc = 'images/young.jpg'; // Update path to young age image
  } else if (roundedAge > 18 && roundedAge <= 30) {
    behavior = "Your Twitter antics are the epitome of youthful exuberance and occasional immaturity!";
    imageSrc = 'images/mature.jpg'; // Update path to mature age image
  } else if (roundedAge > 30 && roundedAge <= 50) {
    behavior = "Your Twitter presence combines wisdom with occasional 'back in my day' rants!";
    imageSrc = 'images/wise.jpg'; // Update path to wise age image
  } else {
    behavior = "You're the sage of Twitter, occasionally throwing shade like a well-aged fine wine.";
    imageSrc = 'images/wise.jpg'; // Update path to wise age image (for default)
  }

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

  document.getElementById('result').innerText = `Congratulations! Your Twitter age is approximately ${roundedAge} years old. ${behaviorText}`;

  const ageImage = document.getElementById('ageImage');
  if (imageSource) {
    ageImage.style.display = 'block';
    ageImage.src = imageSource;
  } else {
    ageImage.style.display = 'none';
  }

  // Hide the title image once the result is displayed
  document.getElementById('titleImage').style.display = 'none';
}
