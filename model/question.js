// var Answer = require('./buildTopics');

function Question(topicName, standardAnswer, goal){
  this.topicName = topicName;
  this.standardAnswer = standardAnswer;
  this.goal = goal;
}
// Question.all = function() {
//   return Answer.buildTopics();
// };

Question.prototype.countScore = function () {

};
module.exports = Question;
