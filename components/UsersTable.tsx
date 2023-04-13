import { useState } from 'react';
import { ActionIcon, Image, ScrollArea, Table } from '@mantine/core';
import { IconTrash } from '@tabler/icons';

import { User } from '@/types/data';
import dayjs from 'dayjs';
import useStyles from './UsersTable.styles';
import UsersDelete from './UsersDelete';

interface UsersTableProps {
	users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
	const { classes, cx } = useStyles();
	const [scrolled, setScrolled] = useState(false);
	const [userDeleteShow, setUserDeleteShow] = useState(false);
	const [userDeleteId, setUserDeleteId] = useState('');

	const handleUserDelete = (userName: string) => {
		setUserDeleteShow(true);
		setUserDeleteId(userName);
	};

	const handleUserDeleteConfirm = () => {
		setUserDeleteShow(false);
		console.log(userDeleteId, 'has been deleted');
	};

	const rows = users.map((row: any) => (
		<tr key={row.login.uuid}>
			<td>
				<Image src={row.picture.thumbnail} width={50} height={50} />
			</td>
			<td>
				{row.name.first} {row.name.last}
			</td>
			<td>{row.email}</td>
			<td>{row.dob.age}</td>
			<td>
				{row.location.city}, {row.location.state}, {row.location.country}
			</td>
			<td>{dayjs(row.registered).format('MM/DD/YYYY')}</td>
			<td>
				<ActionIcon
					variant="subtle"
					color="hcPurple"
					onClick={() => {
						handleUserDelete(row.login.username);
					}}
				>
					<IconTrash size={24} />
				</ActionIcon>
			</td>
		</tr>
	));

	return (
		<>
			<ScrollArea h={600} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
				<Table miw={700}>
					<thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
						<tr>
							<th />
							<th>Name</th>
							<th>Email</th>
							<th>Age</th>
							<th>Location</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
			</ScrollArea>
			{userDeleteShow === true && (
				<UsersDelete onClose={() => setUserDeleteShow(false)} onConfirm={handleUserDeleteConfirm} />
			)}
		</>
	);
};

export default UsersTable;
