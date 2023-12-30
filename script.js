function getBehaviorDescription(twitterAge) {
  let behavior = '';
  let imageSrc = '';

  const roundedAge = Math.round(twitterAge); // Round the calculated age

  if (roundedAge <= 1) {
    behavior = "You're tweeting like a crying baby, throwing tantrums with each tweet!";
    imageSrc = 'images/crying_baby.jpg'; // Update path to crying baby image
  } else if (roundedAge > 1 && roundedAge <= 3) {
    behavior = "Your tweets resemble a toddler's playful, curious babble!";
    imageSrc = 'images/toddler.jpg'; // Update path to toddler image
  } else if (roundedAge > 3 && roundedAge <= 5) {
    behavior = "Your Twitter presence is as chaotic and messy as a mischievous preschooler's playroom!";
    imageSrc = 'images/mischievous_preschooler.jpg'; // Update path to mischievous preschooler image
  } else if (roundedAge > 5 && roundedAge <= 7) {
    behavior = "You're tweeting like a whiny grade-schooler, complaining about everything!";
    imageSrc = 'images/kid.jpg'; // Update path to kid image
  } else if (roundedAge > 7 && roundedAge <= 10) {
    behavior = "Your tweets are as irritating and rebellious as a stubborn pre-teen!";
    imageSrc = 'images/stubborn_pre_teen.jpg'; // Update path to stubborn pre-teen image
  } else if (roundedAge > 10 && roundedAge <= 15) {
    behavior = "Your tweets are a whirlwind of teenage rebellion and immaturity!";
    imageSrc = 'images/teenager.jpg'; // Update path to teenager image
  } else if (roundedAge > 15 && roundedAge <= 18) {
    behavior = "You're a walking contradiction on Twitter - part adult, part teenager, and all drama!";
    imageSrc = 'images/young.jpg'; // Update path to young age image
  } else if (roundedAge > 18 && roundedAge <= 30) {
    behavior = "Your Twitter antics are the epitome of youthful exuberance and occasional immaturity!";
    imageSrc = 'images/mature.jpg'; // Update path to mature age image
  } else {
    behavior = "You're the sage of Twitter, occasionally throwing shade like a well-aged fine wine.";
    imageSrc = 'images/wise.jpg'; // Update path to wise age image
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
