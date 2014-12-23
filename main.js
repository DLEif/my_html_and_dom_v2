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
