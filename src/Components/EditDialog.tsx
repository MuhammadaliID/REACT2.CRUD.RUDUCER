import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button
} from "@mui/material";

function EditDialog({ user, onClose, editUser }) {
    let { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (user) {
            reset({
                name: user.name,
                age: user.age
            });
        }
    }, [user, reset]);

    function onSubmit(data) {
        editUser({
            id: user.id,
            name: data.name,
            age: Number(data.age)
        });

        onClose();
    }

    return (
        <Dialog open={Boolean(user)} onClose={onClose}>
            <DialogTitle>Edit User</DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Name"
                        margin="normal"
                        {...register("name", { required: true })}
                    />

                    <TextField
                        fullWidth
                        label="Age"
                        type="number"
                        margin="normal"
                        {...register("age", { required: true })}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>

                    <Button type="submit" variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default EditDialog;