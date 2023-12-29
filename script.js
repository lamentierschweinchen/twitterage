function calculateTwitterAge() {
  const actualAge = parseInt(document.getElementById('actualAge').value);
  const twitterYears = parseInt(document.getElementById('twitterYears').value);

  if (isNaN(actualAge) || isNaN(twitterYears)) {
    document.getElementById('result').innerText = 'Please enter valid numbers.';
    return;
  }

  if (twitterYears >= actualAge) {
    document.getElementById('result').innerText = 'Invalid input: Twitter years exceed or equal actual age.';
    return;
  }

  const twitterAge = actualAge / (actualAge - twitterYears);
  const behavior = getBehaviorDescription(twitterAge);
  document.getElementById('result').innerText = `Your Twitter age is approximately ${twitterAge.toFixed(2)} years old. ${behavior}`;
}

function getBehaviorDescription(twitterAge) {
  if (twitterAge <= 5) {
    return "You're throwing Twitter tantrums like a toddler denied their favorite toy!";
  } else if (twitterAge > 5 && twitterAge <= 10) {
    return "You're the petulant prince/princess of Twitter, always wanting attention and retweets!";
  } else if (twitterAge > 10 && twitterAge <= 15) {
    return "Your tweets are a whirlwind of teenage rebellion and immaturity!";
  } else if (twitterAge > 15 && twitterAge <= 18) {
    return "You're a walking contradiction on Twitter - part adult, part teenager, and all drama!";
  } else if (twitterAge > 18 && twitterAge <= 30) {
    return "Your Twitter antics are the epitome of youthful exuberance and occasional immaturity!";
  } else if (twitterAge > 30 && twitterAge <= 50) {
    return "Your Twitter presence combines wisdom with occasional 'back in my day' rants!";
  } else {
    return "You're the sage of Twitter, occasionally throwing shade like a well-aged fine wine.";
  }
}
