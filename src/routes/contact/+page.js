// import { DB_USER, DB_PASSWORD } from '$env/static/private';
import { PUBLIC_USER_NAME } from '$env/static/public';

export const load = () => {
	console.log('Public env variable is  ', PUBLIC_USER_NAME);

	return {};
};
