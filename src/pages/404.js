import { useRouter } from 'next/router';
import React from 'react';

const NotFoundPage = () => {
	const router = useRouter()
	setTimeout(()=> {
		router.push('/')
	}, 5000)
    return (
        <section className="flex items-center min-h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
			<button className=" w-44 hover:bg-black rounded-full bg-green-400 text-black hover:text-white h-9">Back to Home</button>
		</div>
	</div>
</section>
    );
};

export default NotFoundPage;