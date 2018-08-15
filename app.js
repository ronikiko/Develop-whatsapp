// Quick an dirty script that sends and receives messages from the server in real-time.
// Just kidding. It a simple script that duplicates the first message and changes its content.
const historyNode = document.querySelector('.Chat-main');
const inputNode = document.querySelector('#new-msg');

inputNode.addEventListener('keydown', event => {
    // on any key other than Enter, continue as normal

    let msgNode = '';

    if (event.keyCode === 13) {
         msgNode = historyNode.querySelector('.Message--in').cloneNode(true);
    }
    else if (event.keyCode === 17) {
         msgNode = historyNode.querySelector('.Message--out').cloneNode(true);
     }
    else {
         return;
     }
    event.preventDefault();

    // on Enter key pressed, clone the first message, change its content and prepend
    
    msgNode.querySelector('.Message-content').textContent = event.target.value;

    historyNode.prepend(msgNode);

    event.target.value = '';

    // requestAnimationFrame(() => {
    //     historyNode.scrollTo({
    //         top: historyNode.scrollHeight,
    //         behavior: 'smooth'
    //     });
    // });
});

// fake chatTabs

const users = [
    {
        avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
        name: 'Fidela Larrimore'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
        name: 'Melynda Ohlson'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
        name: 'Nathan Hollenbeck'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Jamie Duca'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
        name: 'Clyde Hosford'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Milo Saylors'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
        name: 'Shizue Inge'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/31.jpg',
        name: 'Maya Firth'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
        name: 'Taunya Lugar'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: 'Dakota Bill'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
        name: 'Kera Schulte'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
        name: 'Fidela Larrimore'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
        name: 'Melynda Ohlson'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/15.jpg',
        name: 'Nathan Hollenbeck'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Jamie Duca'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
        name: 'Clyde Hosford'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Milo Saylors'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
        name: 'Shizue Inge'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/31.jpg',
        name: 'Maya Firth'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
        name: 'Taunya Lugar'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: 'Dakota Bill'
    },
    {
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
        name: 'Kera Schulte'
    }
];

const chatTabs = document.querySelector('.ChatTabs');
const chatTab = chatTabs.firstElementChild;

users.forEach(user => {
    const node = chatTab.cloneNode(true);
    node.querySelector('img').src = user.avatar;
    node.querySelector('.ChatTab-name').textContent = user.name;
    chatTabs.appendChild(node);
});