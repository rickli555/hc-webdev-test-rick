export interface User {
	cell: string;
	dob: UserDob;
	email: string;
	gender: string;
	id: UserId;
	location: UserLocation;
	login: UserLogin;
	name: UserName;
	nat: string;
	phone: string;
	picture: UserPicture;
	registered: UserRegistered;
}

interface UserDob {
	date: string;
	age: number;
}

interface UserId {
	name: string;
	value: string;
}

interface UserLocation {
	street: UserLocationStreet;
	city: string;
	state: string;
	country: string;
	postcode: string;
	coordinates: UserLocationCoordinates;
	timezone: UserLocationTimezone;
}

interface UserLocationCoordinates {
	latitude: string;
	longitude: string;
}

interface UserLocationStreet {
	number: number;
	name: string;
}

interface UserLocationTimezone {
	offset: string;
	description: string;
}

interface UserLogin {
	uuid: string;
	username: string;
	password: string;
	salt: string;
	md5: string;
	sha1: string;
	sha256: string;
}

interface UserName {
	title: string;
	first: string;
	last: string;
}

interface UserPicture {
	large: string;
	medium: string;
	thumbnail: string;
}

interface UserRegistered {
	date: string;
	age: number;
}
