function getBehaviorDescription(twitterAge) {
  let behavior = '';
  let imageSrc = '';
  const roundedAge = Math.round(twitterAge);

  // Your existing behavior description logic here
  // ...

  return {
    behavior: behavior,
    imageSrc: imageSrc
  };
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
