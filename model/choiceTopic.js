var Question = require('./question');

function ChoiceTopic(topicName, standardAnswer, goal) {
  Question.call(this, topicName, standardAnswer, goal);
}

ChoiceTopic.prototype = Object.create(Question.prototype);

ChoiceTopic.prototype.constructor = ChoiceTopic;

ChoiceTopic.prototype.countScore = function (inputAnswers) {
  var score = 0;
  var _this = this;
  _.forEach (inputAnswers, function(inputAnswer) {
    if (inputAnswer.checked === true && inputAnswer.value === _this.standardAnswer) {
      score += _this.goal;
    }
  });
  return score;
};
module.exports = ChoiceTopic;
