const topicsContainer = document.querySelector(`[data-topics-container]`);
const topicForm = document.querySelector(`[data-topic-form]`);
const topicFormInput = document.querySelector(`[data-topic-form-input]`);
const topicsDeleteButton = document.querySelector(`[data-topics-delete]`);
const tasksCount = document.querySelector(`[data-tasks-count]`);
const tasksTopicName = document.querySelector(`[data-tasks-topic-name]`);
const tasksContainer = document.querySelector(`[data-tasks-display-container]`);

const topicsLocalStorageKey = `topicsKey`;
const selectedTopicIdLocalStorageKey = `selectedTopicKey`;
let topicsList = JSON.parse(localStorage.getItem(topicsLocalStorageKey)) || [];
let selectedTopicId = localStorage.getItem(selectedTopicIdLocalStorageKey);

function clearAllTopics(topicsContainer) {
    while(topicsContainer.firstChild) {
        topicsContainer.firstChild.remove();
    }
}

function createList(topicInput) {
    return {
        id: Date.now().toString(),
        topicName: topicInput,
        task: [],
    }
}

function saveTopicToLocal() {
    localStorage.setItem(topicsLocalStorageKey, JSON.stringify(topicsList));
    localStorage.setItem(selectedTopicIdLocalStorageKey, selectedTopicId);
}

function renderTopicsList() {
    clearAllTopics(topicsContainer);
    topicsList.forEach((topic) => {
        const topicNew = document.createElement(`li`);
        topicNew.dataset.id = topic.id;
        topicNew.innerText = topic.topicName;
        if(topic.id === selectedTopicId) {
            topicNew.style.fontWeight = `700`;
        }
        topicsContainer.append(topicNew);
    });
}

topicForm.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const topicInput = topicFormInput.value;
    if(topicInput === `` || topicInput == null) {return}
    const list = createList(topicInput);
    topicFormInput.value = null;
    topicsList.push(list);
    saveTopicToLocal();
    renderTopicsList();
});

topicsContainer.addEventListener(`click`, (e) => {
    if(e.target.tagName.toLowerCase() === `li`) {
        selectedTopicId = e.target.dataset.id;
        saveTopicToLocal();
        renderTopicsList();
    }
});

topicsDeleteButton.addEventListener(`click`, () => {
    topicsList = [];
    saveTopicToLocal();
    renderTopicsList();
});