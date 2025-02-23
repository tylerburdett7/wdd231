// const fruit = "apple"

// switch (fruit) {
//     case "berry":
//         break
//     case "apple":
//         console.log(":)")
//     default:
//         console.log("")
// }


const data = {
    courseName: "Frontend Web Development 1",
    topics: [
      {
        topicName: "HTML",
        subTopics: [
          { subTopicName: "Tags", inClass: true },
          { subTopicName: "Attributes", inClass: false },
          { subTopicName: "Attributes", inClass: false },
        ],
      },
      {
        topicName: "CSS",
        subTopics: [
          { subTopicName: "Selectors", inClass: false },
          { subTopicName: "Properties", inClass: true },
          { subTopicName: "Pseudo Classes", inClass: true },
          null,
        ],
      },
      null,
    ],
  };
  
  function getInClassSubTopicNames(data) {
    for (let i = 0; i < data.topics.length; i++) {
        const topic = data.topics[i]

        if (topic && topic.subTopics) {
            
        }
    }
  }