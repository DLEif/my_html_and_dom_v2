function Fill(topicName, standardAnswer, goal) {
  Question.call(this, topicName, standardAnswer, goal);
}

Fill.prototype = Object.create(Question.prototype);

Fill.prototype.constructor = Fill;

Fill.prototype.countScore = function(inputAnswers) {
  var score = 0;
  var userAnswers = [];

  _.forEach(inputAnswers, function(inputAnswer) {
    userAnswers.push(inputAnswer.value);
  });
  // console.log(userAnswers);
  var _this = this;
  _.forEach(this.standardAnswer, function(userAnswer) {
    var modelAnswer = _.contains(userAnswers, userAnswer);
    if (modelAnswer) {
      score += _this.goal / _this.standardAnswer.length;
    }
  });
  return score;
};
