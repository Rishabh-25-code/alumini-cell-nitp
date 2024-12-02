import React, { ReactNode } from 'react';

class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null, errorInfo: null };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return <div className='flex flex-col justify-center min-h-screen w-full items-center text-center px-5'>
                <h1 className='text-white text-lg font-medium'>Something went wrong.</h1>
                <p className='text-gray-500 text-sm'>Please refresh the page or try again later.</p>
                <p className='text-gray-500 text-sm'>{
                    process.env.NODE_ENV === 'development' ? 'Error: ' + this.state.error : ''
                }</p>
                <a href='/' className='text-white text-sm font-medium mt-5'>
                    <button className='text-black font-medium uppercase py-2.5 px-6 rounded-full hover:bg-sky-600 bg-sky-500'>
                        Go back home
                    </button>
                </a>
            </div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;