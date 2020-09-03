import { createStyles, Theme } from '@material-ui/core/styles';
export const styles = (theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            marginTop: '15%',
            width: '50%'
        },
        row: {
            padding: theme.spacing(1),
            width: 'inherit'
        },
        formField: {
            width: '-webkit-fill-available'
        },
        button: {
            margin: theme.spacing(2),
        }
    })