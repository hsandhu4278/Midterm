
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "American History",
    pages: [{
        name : "page1",
        elements : [
        {
          type : "text",
          name : "question1",
          title : "What is your relationship with the candidate?"
        },
        {
          type : "text",
          name : "question2",
          title : "Can you describe the candidate's job responsibilities?"
        }
       ],
        title : "Reference Check ",
        description : "Please fill out this reference check for an employee we are interested in. Thanks"
      },
      {
        name : "page2",
        elements : [
        {
          type : "radiogroup",
          name : "question13",
          title : "Did the candidate miss a lot of work?",
          choices : [
          {
            value : "item1",
            text : "YES"
          },
          {
           value : "item2",
           text : "NO"
          }
         ]
        },
        {
         type : "radiogroup",
         name : "question14",
         title : "How would you rate the candidates listening and communication skills? ( 1 -Bad 5-Excellent)",
         choices : [
          {
            value : "item1",
           text : "1"
          },
          {
           value : "item2",
            text : "2"
          },
          {
            value : "item3",
            text : "3"
          },
          {
            value : "item4",
            text : "4"
          }
         ],
          hasOther : true,
          otherText : "5"
        }
       ]
      },
      {
        name : "page3",
        elements : [
        {
          type : "text",
          name : "question3",
          title : "Why did the candidate leave the job?"
        },
        {
          type : "text",
          name : "question4",
          title : "Would you trust the candidate with large sums of money, children, or sensitive information? Why or why not?"
        }
       ]
      },
      {
        name : "page4",
        elements : [
        {
          type : "radiogroup",
          name : "question5",
          title : "\"How does the candidate interact with others?",
          choices : [
          {
            value : "item1",
            text : "Very Well"
          },
          {
            value : "item2",
            text : "Neutral "
          },
          {
            value : "item3",
            text : "Not Well"
          }
         ]
        },
        {
          type : "radiogroup",
          name : "question6",
          title : "Would you recommend the candidate?",
          choices : [
          {
            value : "item1",
            text : "Yes"
          },
          {
            value : "item2",
            text : "No"
          }
         ]
        }
       ]
      },
      {
        name : "page5",
        elements : [
        {
          type : "radiogroup",
          name : "question19",
          title : "Did the candidate ever supervise other employees?",
          choices : [
          {
            value : "item1",
            text : "Yes"
          },
          {
            value : "item2",
            text : "No"
          }
         ]
        },
        {
          type : "text",
         name : "question20",
         title : "Please provide a number we can contact you for further questions.",
          isRequired : true,
          placeHolder : "###-###-####"
        }
       ]
      }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });