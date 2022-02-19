const Question = require('../models/Question')

class NewQuestionService {
   addQuestion(question) {
       const newQuestion = new Question({
           id: question.id,
           questionType: question.questionType,
           title: question.title,
           content: question.content,
           answers: question.answers,
           viewAnswers: question.viewAnswers,
           tags: question.tags,
           points: question.points
        })
        newQuestion.save()
   } 
}

module.exports = new NewQuestionService()