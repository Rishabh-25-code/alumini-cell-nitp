this.addEventListener('activate', function (event) {
    console.log('You will receive notifications about events and other important updates.');
});

this.addEventListener('push', async function (event) {
    const message = await event.data.json();
    let { title, description, image } = message;
    await event.waitUntil(
        this.registration.showNotification(title, {
            body: description,
            icon: image,
            actions: [
                { title: 'say hi', action: 'say-hi' }
            ],
        })
    );
});


