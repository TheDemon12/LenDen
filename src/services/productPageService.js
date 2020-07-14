import http from './httpService';
import { api } from '../config.json';
import { getCurrentUser } from './authService';

const apiEndPoint = `${api}/products/product`;
const user = getCurrentUser();

let userId = user ? user.userId : null;

export function getProductInfo(id) {
	return http.post(`${apiEndPoint}/${id}`, {
		userId: userId,
	});
}
