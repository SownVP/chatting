var messageList = document.getElementById('messageList'),
    myMessageInput = document.getElementById('myMessageInput'),
    myMessageSend = document.getElementById('myMessageSend'),
    inboxSettingItems = [...document.querySelectorAll('.inboxSetting__item')],
    inboxSettingItem_angleIcons = [...document.querySelectorAll('.inboxSetting__item--angleIcon')],
    inboxSetting_Son = [...document.querySelectorAll('.inboxSetting--son')],
    chatSettingIcon = document.querySelector('.header-chatSetting--wrapper')
    partSecond = document.querySelector('.partSecond'),
    partThird = document.querySelector('.partThird'),
    messageList_wrappers = [...document.querySelectorAll('.messageList__wrapper')],
    openBtnList = [...document.querySelectorAll('.openBtn')],
    coating = document.querySelector('.coating'),
    boardList = [...document.querySelectorAll('.board')],
    closeBtnList = [...document.querySelectorAll('.closeBtn')],
    inboxEmoticon = document.querySelector('.inboxEmoticon')
    inboxList = [...document.querySelectorAll('.inboxList__Item')],
    nicknameChangeBtn = [document.querySelectorAll('.nickname--changeBtn')],
    nicknameList = [...document.querySelectorAll('.nickname__wrapper--nickname')];
document.querySelector('.inboxList__Item').classList.add('inboxList__Item--target');
var iconList = '😀😁😂🤣😃😄😅😆😉😊😋😎😍😘🥰😗😙😚🙂🤗🤩🤔🤨😐😑😶🙄😏😣😮🤐😯😪😫🥱😴😌😛😜😝🤤😒😓😔😕🙃🤑😲🙁😖😞😟😤😢😭😦😧😨😩🤯😬😰😱🥵🥶😳🤪😵🥴😠😡🤬😷🤒🤕🤢🤮🤧😇🥳🥺🤠🤡🤥🤫🤭🧐🤓😈👿👹👺💀☠👻👽👾🤖💩😺😸😹😻😼😼😽🙀😿😾';
for (var i of iconList) {
    document.querySelector('.iconList').innerHTML = `${document.querySelector('.iconList').innerHTML} 
    <li class="iconItem">${i}</li>`
}

function totalHeight() {
    var S = 0;
    for (var i of arguments) {
        S += i.clientHeight;
    }
    return S;
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
            test = false;
            break;
        }
    }
    return test;
}
function isEmoticon(char) {
    var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return regex.test(char);
}
function isEmoticonStr(str) {
    var test = true;
    for (var i of str) {
        if (isEmoticon(i) == false && i !== ' ') {
            test = false;
            break;
        }
    }
    return test;
}
function replaceIcon(str) {
    str = str.replace("🙁(", "😭");
    str = str.replace("🙂)", "😂");
    str = str.replace(":)", "🙂");
    str = str.replace(":D", "😃");
    str = str.replace(";)", "😉");
    str = str.replace(":(", "🙁");
    str = str.replace(":P", "😜");
    str = str.replace("-_-", "😑");
    return str;
}
[...document.querySelectorAll(".iconItem")].forEach(function (iconItem) {
    iconItem.addEventListener('click', function () {
        myMessageInput.value += iconItem.innerHTML;
        input_myMessageInput();
    })
})

document.querySelector('.iconList--coating').addEventListener('click', function () {
    document.querySelector('.iconList--board').style.display = 'none';
    document.querySelector('.iconList--coating').style.display = 'none';
})
document.querySelector('.iconList--openBtn').addEventListener('click', function () {
    if (document.querySelector('.iconList--board').style.display === 'block') {
        document.querySelector('.iconList--board').style.display = 'none';
        document.querySelector('.iconList--coating').style.display = 'none';
    } else {
        document.querySelector('.iconList--board').style.display = 'block';
        document.querySelector('.iconList--coating').style.display = 'block';
    }
})
function getPresentTime() {
    var presentTime = new Date(),
        presentHours = presentTime.getHours(),
        presentMinutes = presentTime.getMinutes();
    if (presentHours < 10) {
        presentHours = `0${presentHours}`;
    }
    if (presentMinutes < 10) {
        presentMinutes = `0${presentMinutes}`;
    }
    return `${presentHours}:${presentMinutes}`
}

function ifMessageSend(){
    var indexOfInboxItemTarget;
    inboxList.forEach(function(inboxItem, index){
        if(inboxItem.classList.contains('inboxList__Item--target')){
            indexOfInboxItemTarget = index;
        }
    })
    if(indexOfInboxItemTarget > 0){
        var intermediate = inboxList[indexOfInboxItemTarget].innerHTML;
        console.log(intermediate);
        for(var i = indexOfInboxItemTarget; i > 0; --i){
            inboxList[i].innerHTML = inboxList[i - 1].innerHTML;
        }
        inboxList[0].innerHTML = intermediate;
        document.querySelector('.inboxList__Item--target').classList.remove('inboxList__Item--target')
        inboxList[0].classList.add('inboxList__Item--target');
    }
}
function sendMessage(event) {
    event.preventDefault();
    document.querySelector('.inboxList__Item--target .inboxList__Item--lastMessageSendingTime').innerHTML = getPresentTime();
    if (isEmptyStr(myMessageInput.value) === false) {
        document.querySelector('.inboxList__Item--target .inboxList__Item--lastMessage').innerHTML = `Bạn: ${myMessageInput.value}`;
        if (isEmoticonStr(myMessageInput.value)) {
            messageList.innerHTML = `
                    ${messageList.innerHTML}
                    <li class="messageList__wrapper messageList__wrapper--myMessageIcon">
                        <span class="messageList__item--wrapper myMessageIcon--wrapper">
                            <span class="messageList__item messageList__item--myMessageIcon" title="${getPresentTime()}">${myMessageInput.value}</span>
                            <i class="fa-solid fa-circle-check messageList__item--seen messageList__item--seenIcon"></i>
                            <!-- <img class="messageList__item--seen avt" src="https://s.memehay.com/files/posts/20210515/toan-bo-loi-ran-day-cua-huan-hoa-hong-huan-rose.jpg" alt=""> -->
                        </span>
                    </li>
                `
        } else {
            if (messageList_wrappers[messageList_wrappers.length - 1].classList.contains('messageList__wrapper--yourMessage')
                || messageList_wrappers[messageList_wrappers.length - 1].classList.contains('messageList__wrapper--myMessageIcon')) {
                messageList.innerHTML = `
                        ${messageList.innerHTML}
                        <li class="messageList__wrapper messageList__wrapper--myMessage">
                            <span class="messageList__item--wrapper myMessage--wrapper">
                                <span class="messageList__item messageList__item--myMessage" title="${getPresentTime()}">${myMessageInput.value}</span>
                                <i class="fa-solid fa-circle-check messageList__item--seen messageList__item--seenIcon"></i>
                                <!-- <img class="messageList__item--seen avt" src="https://s.memehay.com/files/posts/20210515/toan-bo-loi-ran-day-cua-huan-hoa-hong-huan-rose.jpg" alt=""> -->
                            </span>
                        </li>
                    `
            } else {
                messageList_wrappers[messageList_wrappers.length - 1].innerHTML = `
                    ${messageList_wrappers[messageList_wrappers.length - 1].innerHTML}
                    <span class="messageList__item--wrapper myMessage--wrapper">
                        <span class="messageList__item messageList__item--myMessage" title="${getPresentTime()}">${myMessageInput.value}</span>
                        <i class="fa-solid fa-circle-check messageList__item--seen messageList__item--seenIcon"></i>
                        <!-- <img class="messageList__item--seen avt" src="https://s.memehay.com/files/posts/20210515/toan-bo-loi-ran-day-cua-huan-hoa-hong-huan-rose.jpg" alt=""> -->
                    </span>
                `
            }
        }
        myMessageInput.value = '';
        removeAll_myMessageInput();
        messageList_wrappers = [...document.querySelectorAll('.messageList__wrapper')];
        messageList.scrollTo(0, messageList.scrollHeight);
        ifMessageSend();
    }
}
inboxEmoticon.addEventListener('click', function () {
    document.querySelector('.inboxList__Item--target .inboxList__Item--lastMessage').innerHTML = `Bạn: ${inboxEmoticon.innerHTML}`;
    messageList.innerHTML = `
        ${messageList.innerHTML}
        <li class="messageList__wrapper messageList__wrapper--myMessageIcon">
            <span class="messageList__item--wrapper myMessageIcon--wrapper">
                <span class="messageList__item messageList__item--myMessageIcon" title="${getPresentTime()}">${inboxEmoticon.innerHTML}</span>
                <i class="fa-solid fa-circle-check messageList__item--seen messageList__item--seenIcon"></i>
                <!-- <img class="messageList__item--seen avt" src="https://s.memehay.com/files/posts/20210515/toan-bo-loi-ran-day-cua-huan-hoa-hong-huan-rose.jpg" alt=""> -->
            </span>
        </li>
    `
    messageList.scrollTo(0, messageList.scrollHeight);
    ifMessageSend();
})
function input_myMessageInput() {
    document.querySelector('.partSecond__footer--iconWrapper').style.display = 'none';
    document.querySelector('.sendBtnIcon').style.display = 'block';
    document.querySelector('.inboxEmoticon').style.display = 'none';
    document.querySelector('.myMessageInput--wrapper').style.marginLeft = '8px';
    document.querySelector('.sendBtnIcon--wrapper').style.zIndex = '0';
}
function removeAll_myMessageInput() {
    document.querySelector('.partSecond__footer--iconWrapper').style.display = 'block';
    document.querySelector('.sendBtnIcon').style.display = 'none';
    document.querySelector('.inboxEmoticon').style.display = 'block';
    document.querySelector('.myMessageInput--wrapper').style.marginLeft = '0px';
    document.querySelector('.sendBtnIcon--wrapper').style.zIndex = '11';
}
myMessageInput.addEventListener('input', function () {
    myMessageInput.value = replaceIcon(myMessageInput.value);
    if (isEmptyStr(myMessageInput.value) === false) {
        input_myMessageInput();
    } else {
        removeAll_myMessageInput();
    }
})
inboxList.forEach(function (inboxItem) {
    inboxItem.onclick = function () {
        inboxList.forEach(function (inboxItem) {
            inboxItem.classList.remove('inboxList__Item--target');
        })
        inboxItem.classList.add('inboxList__Item--target');
        inboxItem.classList.remove('inboxList__Item--notSeen');
        document.querySelector('.partSecond__header--inboxName').innerHTML = `${document.querySelector('.inboxList__Item--target .inboxList__Item--inboxName').innerHTML}`
        document.querySelector('.partSecond__header--avt').setAttribute('src', `${document.querySelector('.inboxList__Item--target .inboxList__Item--avt').getAttribute('src')}`)
        document.querySelector('.partThird__header--avt').setAttribute('src', `${document.querySelector('.inboxList__Item--target .inboxList__Item--avt').getAttribute('src')}`)
        document.querySelectorAll('.messageList__item--avt').forEach(function (item) {
            item.setAttribute('src', `${document.querySelector('.inboxList__Item--target .inboxList__Item--avt').getAttribute('src')}`)
        })
        document.querySelectorAll('.messageList__item--seen').forEach(function (item) {
            item.setAttribute('src', `${document.querySelector('.inboxList__Item--target .inboxList__Item--avt').getAttribute('src')}`)
        })
        document.querySelector('.partThird__header--nameUser').innerHTML = `${document.querySelector('.inboxList__Item--target .inboxList__Item--inboxName').innerHTML}`
    }
})

inboxSettingItems.forEach(function (inboxSettingItem, i) {
    inboxSettingItem.onclick = function () {
        if (inboxSettingItem_angleIcons[i].classList.contains('fa-angle-right')) {
            inboxSettingItem_angleIcons[i].classList.remove('fa-angle-right');
            inboxSettingItem_angleIcons[i].classList.add('fa-angle-down');
            inboxSetting_Son[i].style.display = 'block';
        } else {
            inboxSettingItem_angleIcons[i].classList.remove('fa-angle-down');
            inboxSettingItem_angleIcons[i].classList.add('fa-angle-right');
            inboxSetting_Son[i].style.display = 'none';
        }
    }
})
chatSettingIcon.addEventListener('click', function () {
    if (partThird.style.display === 'block') {
        partThird.style.display = 'none';
        partSecond.style.width = '72%';
    } else {
        partThird.style.display = 'block';
        partSecond.style.width = '46%';
    }
})
openBtnList.forEach(function (openBtn, index) {
    openBtn.addEventListener('click', function () {
        boardList[index].style.display = 'block';
        coating.style.display = 'block';
    })
})
closeBtnList.forEach(function (closeBtn, index) {
    closeBtn.addEventListener('click', function () {
        console.log(1);
        boardList[index].style.display = 'none';
        coating.style.display = 'none';
    })
})
coating.addEventListener('click', function () {
    boardList.forEach(function (boardItem) {
        boardItem.style.display = 'none';
        coating.style.display = 'none';
    })
})
nicknameChangeBtn.forEach(function(changeBtn){
    changeBtn.addEventListener('click', function(){
        
    })
})
