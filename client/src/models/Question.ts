export interface QuestionModel {
    id: number
    title: string
	textBelow: string
	questionType: Type
	//PossibleAnswers
	tags: string
  }

  enum Type{
      horizontal,
      vertical
  }
  