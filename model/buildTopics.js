var Fill = require('./fillInTopic');
var ChoiceTopic = require('./choiceTopic');
var MultipleChoiceTopic = require('./MultipleChoiceTopic');
var TrueOrFalseTopic = require('./TrueOrFalseTopic');
var ShortAnswerTopic = require('./shortAnswerTopic');

function Answer(){

}
Answer.buildTopics = function () {
  return [
  new Fill('1_1', ['统一建模语言'], 15),
  new Fill('1_2', ['封装性', '继承性', '多态性'], 15),
  new ChoiceTopic('2_1', 'B', 10),
  new ChoiceTopic('2_2','A', 10),
  new MultipleChoiceTopic('3_1', ['A','B','D'], 10),
  new MultipleChoiceTopic('3_2', ['A','B','C'], 10),
  new TrueOrFalseTopic('4_1', 'false', 10),
  new TrueOrFalseTopic('4_2', 'true', 10),
  new ShortAnswerTopic('5_1','模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物' +
  '或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。', 10)
   ];
};
module.exports = Answer;
