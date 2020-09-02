import React, {useState} from 'react';
import { createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles';
import {sendEmail} from '../actions/formActions'

const styles = (theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
			marginTop: '15%',
			width: '300px'
		},
		row: {
			padding: theme.spacing(1),
		}
	})

interface IFormProps {
	classes: any;
}

interface IEmailFields {
	subject: '';
	to: '';
	message: '';
}
interface IErrorFields {
	subject: boolean;
	to: boolean;
	message: boolean;
}

const handleSend = async(fields: IEmailFields) => {
	await sendEmail(fields)
}

const FormComponent: React.FC<IFormProps> = (props) => {
	const [subject, updateSubject] = React.useState();
	const [to, updateTo] = React.useState();
	const [message, updateMessage] = React.useState();
	const [error, setError] = React.useState({
		subject: false,
		to: false,
		message: false
	})
	const classes = props.classes

	const handleChange = (updater:any) => (event:any) => updater(event.target.value);
	return (
		<div className={classes.root}>
			<Grid
				container
				item xs={12}
				justify="center"
				alignItems="center"
			>
				<Paper elevation={3} className={classes.paper}>
					<form className={classes.root}>
						<div className={classes.row}>
							<TextField
								id="email-subject"
								label="Subject:"
								variant="outlined"
								value={subject}
								onChange={handleChange(updateSubject)}
								required
								error={error.subject}
							/>
						</div>
						<div className={classes.row}>
							<TextField
								id="email-to"
								label="To:"
								type="email"
								variant="outlined"
								value={to}
								onChange={(e) => updateTo(e.target.value)}
								required
								error={error.to}
							/>
						</div>
						<div className={classes.row}>
							<TextField
								id="outlined-multiline-static"
								label="Message:"
								multiline
								rows={4}
								variant="outlined"
								value={message}
								onChange={(e) => updateMessage(e.target.value)}
								error={error.message}
							/>
						</div>
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							onClick={() => handleSend({subject, to, message})}
						>
							Send
						</Button>
					</form>
				</Paper>
			</Grid>
		</div>
	);
}

export default withStyles(styles)(FormComponent);
