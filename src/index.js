const topicsContainer = document.querySelector(`[data-topics-container]`);

let topicsList = [
    {
        id: 1,
        topicName: `one`,
    },
    {
        id: 2,
        topicName: `two`,
    }
];                      //Dummy elements to check code.

function clearAllTopics(topicsContainer) {
    while(topicsContainer.firstChild) {
        topicsContainer.firstChild.remove();
    }
}

function renderTopicsList() {
    clearAllTopics(topicsContainer);
    topicsList.forEach((topic) => {
        const topicNew = document.createElement(`li`);
        topicNew.dataset.id = topic.id;
        topicNew.innerText = topic.topicName;
        topicsContainer.append(topicNew);
    });
}

renderTopicsList();