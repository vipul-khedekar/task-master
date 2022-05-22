const topicsContainer = document.querySelector(`[data-topics-container]`);

let topicsList = [1, 2, 3];     //Dummy elements to check code.

function clearAllTopics(topicsContainer) {
    while(topicsContainer.firstChild) {
        topicsContainer.firstChild.remove();
    }
}

function renderTopicsList() {
    clearAllTopics(topicsContainer);
    topicsList.forEach((topic) => {
        const topicNew = document.createElement(`li`);
        topicNew.innerText = topic;
        topicsContainer.append(topicNew);
    });
}

renderTopicsList();