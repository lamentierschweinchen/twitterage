function getBehaviorDescription(twitterAge) {
  let behavior = '';
  let imageSrc = '';
  const roundedAge = Math.round(twitterAge);

  if (roundedAge <= 1) {
    behavior = "You're tweeting like a crying baby, throwing tantrums with each tweet!";
    imageSrc = 'images/crying_baby.jpg';
  } else if (roundedAge > 1 && roundedAge <= 3) {
    behavior = "Your tweets are nothing more than a chaotic string of gibberish, much like a toddler's nonsensical babbling!";
    imageSrc = 'images/toddler.jpg';
  } else if (roundedAge > 3 && roundedAge <= 5) {
    behavior = "Your Twitter presence is as chaotic and messy as a preschooler's playroom!";
    imageSrc = 'images/mischievous_preschooler.jpg';
  } else if (roundedAge > 5 && roundedAge <= 7) {
    behavior = "You're tweeting like a whiny grade-schooler, complaining about everything!";
    imageSrc = 'images/kid.jpg';
  } else if (roundedAge > 7 && roundedAge <= 10) {
    behavior = "Your tweets are as irritating and rebellious as a stubborn pre-teen!";
    imageSrc = 'images/stubborn_pre_teen.jpg';
  } else if (roundedAge > 10 && roundedAge <= 15) {
    behavior = "Your tweets are a whirlwind of teenage rebellion and immaturity!";
    imageSrc = 'images/teenager.jpg';
  } else if (roundedAge > 15 && roundedAge <= 18) {
    behavior = "You're a walking contradiction on Twitter - part adult, part teenager, and all drama!";
    imageSrc = 'images/torn.jpg';
  } else if (roundedAge > 18 && roundedAge <= 30) {
    behavior = "Your Twitter antics are the epitome of youthful exuberance and occasional immaturity!";
    imageSrc = 'images/young.jpg';
  } else if (roundedAge > 30 && roundedAge <= 45) {
    behavior = "Your Twitter posting is more focused on clever quips and teaching the youngens than little hissy fits!";
    imageSrc = 'images/mature.jpg';
  } else {
    behavior = "You're the sage of Twitter, occasionally throwing shade like a well-aged fine wine.";
    imageSrc = 'images/wise.jpg';
  }

  const result = {
    behavior: behavior,
    imageSrc: imageSrc
  };

  return result;
}
function showResult() {
  const actualAge = parseInt(document.getElementById('actualAge').value);
  const twitterYears = parseInt(document.getElementById('twitterYears').value);

  if (isNaN(actualAge) || isNaN(twitterYears) || twitterYears === 0) {
    document.getElementById('resultText').innerText = 'Please enter valid numbers.';
    return;
  }

  const twitterAge = actualAge / twitterYears;
  const roundedAge = Math.round(twitterAge);
  const behaviorInfo = getBehaviorDescription(roundedAge);

  const behaviorText = behaviorInfo.behavior;
  const imageSource = behaviorInfo.imageSrc;

  document.getElementById('resultText').innerText = behaviorText;

  const ageImage = document.getElementById('ageImage');
  if (imageSource) {
    ageImage.src = imageSource;
    ageImage.style.display = 'block';
  } else {
    ageImage.style.display = 'none';
  }

  document.querySelector('.front-page').style.display = 'none';
  document.querySelector('.result-page').style.display = 'block';
}

function resetCalculator() {
  document.getElementById('resultText').innerText = '';
  document.getElementById('ageImage').style.display = 'none';
  document.querySelector('.result-page').style.display = 'none';
  document.querySelector('.front-page').style.display = 'flex';
  document.getElementById('actualAge').value = '';
  document.getElementById('twitterYears').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('calculateBtn').addEventListener('click', showResult);
  document.getElementById('tryAgainBtn').addEventListener('click', resetCalculator);
});
