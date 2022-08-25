import React, { useState } from "react";
import {
    Tooltip,
    Fab,
    Modal,
    Box,
    styled,
    Typography,
    Avatar
} from '@mui/material';
import {
    Add as AddIcon
} from "@mui/icons-material"

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})


const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip
                onClick={e => setOpen(true)}
                title="Delete"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: {
                        xs: "calc(50% - 25px)",
                        md: 30
                    }
                }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={280}
                    bgcolor="white"
                    p={3}
                    borderRadius={5}
                >
                    <Typography variant="h6"
                        color="grey"
                        textAlign={"center"}
                    >
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography
                            fontWeight={500}
                            variant={"span"}
                        >
                            John Doe
                        </Typography>
                    </UserBox>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add