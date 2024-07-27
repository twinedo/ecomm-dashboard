// withAuth.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import authStore, { IAuthState } from '@/stores/auth';

const withAuth = <P extends object>(
	WrappedComponent: React.ComponentType<P>
) => {
	return (props: P) => {
		const { isLoggedIn, _onCheckExpired, _onLogin } = authStore();
		const router = useRouter();

		useEffect(() => {
			const checkAuthentication = async () => {
				const access_token = localStorage.getItem('@lebahbiru_access_token');
				const refresh_token = localStorage.getItem('@lebahbiru_refresh_token');
				const id = localStorage.getItem('@lebahbiru_id');

				if (access_token) {
					const data: IAuthState = {
						access_token: access_token!,
						refresh_token: refresh_token!,
						id: id!,
					};
					_onLogin(data);
					_onCheckExpired();
				} else {
					router.push('/');
				}

				// if (!isLoggedIn) {
				// 	router.push('/');
				// }
			};

			checkAuthentication();
		}, [isLoggedIn, _onLogin, router]);

		return <WrappedComponent {...props} />;
	};
};

export default withAuth;
