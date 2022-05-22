const topicsContainer = document.querySelector(`[data-topics-container]`);
const topicForm = document.querySelector(`[data-topic-form]`);
const topicFormInput = document.querySelector(`[data-topic-form-input]`);

let topicsList = [];        //Dummy elements to check code.

function createList(topicInput) {
    return {
        id: Date.now().toString(),
        topicName: topicInput,
        task: [],
    }
}

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

topicForm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const topicInput = topicFormInput.value;
    if(topicInput === `` || topicInput == null) {return}
    const list = createList(topicInput);
    topicFormInput.value = null;
    topicsList.push(list);
    renderTopicsList();
});