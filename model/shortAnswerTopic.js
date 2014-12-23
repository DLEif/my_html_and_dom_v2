var Question = require('./question');

function ShortAnswerTopic(topicName, standardAnswer, goal) {
  Question.call(this, topicName, standardAnswer, goal);
}
ShortAnswerTopic.prototype = Object.create(Question.prototype);

ShortAnswerTopic.prototype.constructor = ShortAnswerTopic;

ShortAnswerTopic.prototype.countScore = function (inputAnswers) {
  var _this = this;
  var score = 0;

  _.forEach(inputAnswers, function(inputAnswer) {
    if (inputAnswer.value === _this.standardAnswer) {
      score += _this.goal;
    }
  });
  return score;
};
module.exports = ShortAnswerTopic;
