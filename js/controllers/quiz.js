(function(){

	 angular
	 	.module("intFacts")
	 	.controller("quizCtrl", QuizController);

	 	QuizController.$inject = ['quizMetrics', 'DataService'];

	 	function QuizController(quizMetrics, DataService) {
	 		var vm = this;
	 		vm.quizMetrics = quizMetrics;
	 		vm.dataService = DataService;
	 		vm.questionAnswered = questionAnswered;
	 		vm.selectAnswer = selectAnswer;
	 		vm.setActiveQuestion = setActiveQuestion;
	 		vm.activeQuestion = 0;
	 		vm.error = false;
	 		vm.finalise = false;
	 		vm.finaliseAnswers = finaliseAnswers;
	 		 var numQuestionAnswered = 0;


	 		function setActiveQuestion(index){
	 			if(index === undefined) {
	 			var breakOut = false;
	 			var quizlength = DataService.quizQuestions.length - 1;

	 				while(!breakOut) {

		 				vm.activeQuestion = vm.activeQuestion < quizlength?++vm.activeQuestion:0;

		 				if(vm.activeQuestion === 0){
		 					vm.error = true;

		 				}

		 				if(DataService.quizQuestions[vm.activeQuestion].selected === null){
		 					breakOut = true;

		 				}
	 				}

	 			}
	 			else
	 			{
	 				vm.activeQuestion = index;
	 			}

	 		}

	 		function questionAnswered(){

	 			var quizlength = DataService.quizQuestions.length;
				numQuestionAnswered = 0;
					for (var x = 0; x < quizlength; x++) {
			 			            	
			 			if(DataService.quizQuestions[vm.activeQuestion].selected !== null) {
			 				numQuestionAnswered++;
			 				if(numQuestionAnswered >= quizlength){

			 					//final

			 					for (var i = 0; i < quizlength; i++) {
			 						if (DataService.quizQuestions[i].selected === null) {
			 							setActiveQuestion(i);
			 							return;
			 						}
			 						
			 					}

				 				vm.error = false;
				 				vm.finalise = true;
				 				return;
	 						}
	 					}
	 				}

	 				vm.setActiveQuestion();
	 			
	 			}

	 		function selectAnswer(index){

	 		 	DataService.quizQuestions[vm.activeQuestion].selected = index;
	 		
	 		}

	 		function finaliseAnswers(){

	 		 		vm.finalise = false;
	 		 		numQuestionAnswered = 0;
	 		 		vm.activeQuestion = 0;
	 		 		quizMetrics.markQuiz();
	 		 		quizMetrics.changeState("quiz",false);

	 		 		quizMetrics.changeState("results",true);

	 		}
	 	}
	}
)();