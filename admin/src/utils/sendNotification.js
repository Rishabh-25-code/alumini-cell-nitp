const sendNotification = async (uid, title, description) => {
    try {
        await fetch(`${import.meta.VITE_API_URL}/sendNotification`, {
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