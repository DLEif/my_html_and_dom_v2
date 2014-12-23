var Question = require('./question');

function MultipleChoiceTopic(topicName, standardAnswer, goal) {
  Question.call(this, topicName, standardAnswer, goal);
}
MultipleChoiceTopic.prototype = Object.create(Question.prototype);

MultipleChoiceTopic.prototype.constructor = MultipleChoiceTopic;

MultipleChoiceTopic.prototype.countScore = function (inputAnswers) {

  var score = 0;
  var array = [];
  var _this = this;
  _.forEach(inputAnswers, function(inputAnswer) {
    if (inputAnswer.checked === true) {
      array.push(inputAnswer.value);
    }
  });

  if (array.toString() === _this.standardAnswer.toString()) {
    score += _this.goal;
  }

  return score;
};
module.exports = MultipleChoiceTopic;
