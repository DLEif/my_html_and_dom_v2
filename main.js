function checkform(){
  var score = 0;
  var inputs = Question.all();
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

// JudgeNull.getjudgeNull = function() {
//   var personName = document.getElementById("name").value;
//   var personId = document.getElementById("id").value;
//   var personClass = document.getElementById("class").value;
//   if(personName === ''|| personId === '' || personClass === ''){
//     alert("Please improve personal information.");
//   }
// };
