import { Modal, Button } from '@mantine/core';
import { useState } from 'react';

interface ConfirmDeleteModal {
	onClose: () => void;
	onConfirm: () => void;
}

const UsersDelete = ({ onClose, onConfirm }: ConfirmDeleteModal) => {
	const [show] = useState(true);
	return (
		<Modal
			opened={show}
			onClose={onClose}
			title="Do you want delete this user?"
			transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
		>
			<Button variant="gradient" gradient={{ from: 'orange', to: 'red' }} onClick={onConfirm}>
				{' '}
				Yes{' '}
			</Button>{' '}
			<Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={onClose}>
				{' '}
				No{' '}
			</Button>
		</Modal>
	);
};
export default UsersDelete;
