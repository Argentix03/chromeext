(() => {
    chrome.tts.speak('aaaaaaaa', {'lang': 'en-US', 'rate': 2.0, 'pitch': 3});
    var notification = new Notification('Notification title', {
        icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
        body: 'Hey there! You\'ve been notified!',
    });
});