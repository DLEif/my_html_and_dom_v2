var Question = require('./question');

function TrueOrFalseTopic(topicName, standardAnswer, goal) {
  Question.call(this, topicName, standardAnswer, goal);
}

TrueOrFalseTopic.prototype = Object.create(Question.prototype);

TrueOrFalseTopic.prototype.constructor = TrueOrFalseTopic;

TrueOrFalseTopic.prototype.countScore = function(inputAnswers) {
  var score = 0;
  var _this = this;

  _.forEach(inputAnswers, function(inputAnswer){
    if (inputAnswer.checked === true && inputAnswer.value === _this.standardAnswer) {
      score = _this.goal;
    }
  });
  return score;
};
module.exports = TrueOrFalseTopic;
