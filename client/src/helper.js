async function regSw() {
    if ('serviceWorker' in navigator) {
        let url = 'https://alumini-nitp.vercel.app/sw.js';
        const reg = await navigator.serviceWorker.register(url, { scope: '/' });
        console.log('service config is', { reg });
        return reg;
    }
    throw Error('serviceworker not supported');
}

async function subscribe(serviceWorkerReg, uid) {
    let subscription = await serviceWorkerReg.pushManager.getSubscription();
    if (subscription === null) {
        subscription = await serviceWorkerReg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'BB12svZvz9FhimAVNpibHZNOu91_JvBQRxewmDXq72xBSgrhs6Gu2tJ1qhRsaTvjk61XUhlPR59i8pO1JV81nS4',
        });

        await fetch('https://alumini-nitp-api.vercel.app' + '/subscribe', {
            method: 'POST',
            body: JSON.stringify({
                subscription,
                uid,
            }),
            headers: {
                'content-type': 'application/json',
            },
        });
    }
}

const unSubscribe = async (serviceWorkerReg) => {
    const subscription = await serviceWorkerReg.pushManager.getSubscription();
    if (subscription) {
        await subscription.unsubscribe();
        await fetch('http://localhost:5000' + '/unsubscribe', {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'content-type': 'application/json',
            },
        });
    }
}

export { regSw, subscribe, unSubscribe };