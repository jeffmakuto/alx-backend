#!/usr/bin/yarn dev
import { createClient, print } from 'redis';
import { promisify } from 'util';

const client = createClient();

client.on('error', (err) => {
	console.log('Redis client not connected to the server:', err.toString());
});

client.on('connect', () => {
	console.log('Redis client connected to the server');
});

const setNewSchool = (schoolName, value) => {
	client.SET(schoolName, value, print);
};

const displaySchoolValue = async (schoolName) => {
	console.log(await promisify(client.GET).bind(client)(schoolName));
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
