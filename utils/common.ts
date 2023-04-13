import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

export const checkIsOverDue = (dueDate: string) => {
	dayjs.extend(isSameOrAfter);
	return dayjs().isSameOrAfter(dueDate, 'day');
};

export const fetchWithToken = async (url: string, token: string) => {
	let fetchResponse;
	try {
		fetchResponse = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
		const json = await fetchResponse.json();
		return json;
	} catch (error: any) {
		console.error(`Fetch Error - ${error}`);
		throw new Error(error);
	}
};

export const formatDate = (timestamp: string | number | Date | dayjs.Dayjs | null | undefined) => {
	const date = dayjs(timestamp).format('MM/DD/YYYY');
	if (date === 'Invalid Date') {
		return '';
	}
	return date;
};

export const ls = {
	del: (key: string): string | undefined => {
		if (typeof window !== 'undefined') {
			window.localStorage.removeItem(key);
			return undefined;
		}
		return undefined;
	},
	get: (key: string): string | undefined => {
		if (typeof window !== 'undefined') {
			const val = window.localStorage.getItem(key);
			return val || undefined;
		}
		return undefined;
	},
	set: (key: string, value: string): string | undefined => {
		if (typeof window !== 'undefined') {
			window.localStorage.setItem(key, value);
			return undefined;
		}
		return undefined;
	},
};

export const sleep = (ms: number): Promise<void> =>
	new Promise((resolve) => {
		setTimeout(resolve, ms);
	});

export const toTitleCase = (str: string) => {
	return str
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};
