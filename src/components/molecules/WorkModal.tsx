import { type FC } from 'react';
import { Container, Modal, ModalOwnProps, Typography } from '@mui/material';

interface Props {
    isModalOpen: boolean;
    closeModal: ModalOwnProps['onClose'];
}

const style = {
    modal: {
        backgroundColor: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,
        height: '80%',
    },
} as const;

export const WorkModal: FC<Props> = ({ isModalOpen, closeModal }) => {
    return (
        <Modal open={isModalOpen} onClose={closeModal}>
            <Container sx={style.modal} maxWidth="md">
                <Typography variant="h6" component="h2">
                    hi
                </Typography>
            </Container>
        </Modal>
    );
};
