const sendNotification = async (uid, title, description) => {
    try {
        await fetch(`https://alumini-nitp-api.vercel.app/sendNotification`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ uid, title, description }),
        });
    } catch (error) {
        console.log(error);
    }
}

export default sendNotification;