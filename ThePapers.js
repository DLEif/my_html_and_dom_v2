(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Question = require('./model/question');

var Answer = require('./model/buildTopics');

$(document).ready(function() {
  $('#submit').on('click', function() {
    return checkform();
  });
});
function checkform(){
  var score = 0;
  var inputs = Answer.buildTopics();
//  console.log(inputs);
  _.forEach(inputs, function(input){
    var inputAnswers = document.getElementsByName(input.topicName);
    //console.log(inputAnswers);
    score += input.countScore(inputAnswers);
  });

  var requiredInputs = [
  {
    id: 'class',
    text: '班级'
  },
  {
    id: 'id',
    text: '学号'
  },
  {
    id: 'name',
    text: '姓名'
  }
  ];

  if (requiredInput(requiredInputs)) {
    return false;
  }

  document.getElementById('count').innerText = score;
  return false;
}

function requiredInput(requiredInputs) {

  for (var i = 0; i < requiredInputs.length; i++) {
    var input = requiredInputs[i];
    var element = document.getElementById(input.id);
    if (element && _.isEmpty(element.value)) {
      alert('请输入您的：' + input.text + '！');
      return true;
    }
  }

  return false;
}

},{"./model/buildTopics":4,"./model/question":7}],2:[function(require,module,exports){
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

},{"./question":7}],3:[function(require,module,exports){
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

},{"./question":7}],4:[function(require,module,exports){
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

},{"./MultipleChoiceTopic":2,"./TrueOrFalseTopic":3,"./choiceTopic":5,"./fillInTopic":6,"./shortAnswerTopic":8}],5:[function(require,module,exports){
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

},{"./question":7}],6:[function(require,module,exports){
var Question = require('./question');

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
module.exports = Fill;

},{"./question":7}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{"./question":7}]},{},[1]);
