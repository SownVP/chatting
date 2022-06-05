var messageList = document.getElementById('messageList'),
    myMessageInput = document.getElementById('myMessageInput'),
    myMessageSend = document.getElementById('myMessageSend'),
    inboxSettingItems = [...document.querySelectorAll('.inboxSetting__item')],
    inboxSettingItem_angleIcons = [...document.querySelectorAll('.inboxSetting__item--angleIcon')],
    inboxSetting_Son = [...document.querySelectorAll('.inboxSetting--son')],
    chatSettingIcon = document.querySelector('.header-chatSetting--wrapper'),
    partThird = document.querySelector('.partThird');
function totalHeight() {
    var S = 0;
    for (var i of arguments) {
        S += i.clientHeight
    }
    return S
}
document.querySelector('.inboxList').style.height =
    `calc(100vh - ${totalHeight(
        document.querySelector('.partFirst__header--wrapper'),
        document.querySelector('.partFirst__header--search')
    )
    }px - 40px`
document.querySelector('.messageList').style.height =
    `calc(100vh - ${totalHeight(
        document.querySelector('.partSecond__header'),
        document.querySelector('.partSecond__footer')
    )
    }px - 16px)`

function isEmptyStr(str) {
    var test = true;
    for (var i of str) {
        if (i !== ' ') {
            test = false
            break
        }
    }
    return test;
}
function sendMessage(event) {
    event.preventDefault();
    if (isEmptyStr(myMessageInput.value) == false) {
        messageList.innerHTML = `
            ${messageList.innerHTML}
            <li class="messageList__wrapper messageList__wrapper--myMessage">
                <span class="messageList__item messageList__item--myMessage">${myMessageInput.value}</span>
            </li>
        `
        messageList.scrollTo(0, messageList.scrollHeight)
        myMessageInput.value = ''
    }
}


var inboxList = [...document.getElementsByClassName('inboxList__Item')]
inboxList.forEach(function (inboxItem) {
    inboxItem.onclick = function () {
        inboxList.forEach(function (inboxItem) {
            inboxItem.style.transform = ''
            inboxItem.style.background = ''
            inboxItem.style.boxShadow = ''
        })
        inboxItem.classList.remove('inboxList__Item--notSeen')
        inboxItem.style.transform = 'scale(1.02)'
        inboxItem.style.background = '#EDEDED'
        inboxItem.style.boxShadow = '0 1px 4px 0 rgb(96, 96, 96)'
    }
})

inboxSettingItems.forEach(function (inboxSettingItem, i) {
    inboxSettingItem.onclick = function () {
        if(inboxSettingItem_angleIcons[i].classList.contains('fa-angle-right')){
            inboxSettingItem_angleIcons[i].classList.remove('fa-angle-right')
            inboxSettingItem_angleIcons[i].classList.add('fa-angle-down')
            inboxSetting_Son[i].style.display = 'block'
        }else{
            inboxSettingItem_angleIcons[i].classList.remove('fa-angle-down')
            inboxSettingItem_angleIcons[i].classList.add('fa-angle-right')
            inboxSetting_Son[i].style.display = 'none'
        }
    }
})
function changeDisplay(element){
    if(element.style.display === 'none'){
        element.style.display = 'block'
    }else{
        element.style.display = 'none'
    }
}
chatSettingIcon.onclick = changeDisplay(partThird)