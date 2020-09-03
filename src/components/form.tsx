import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {sendEmail} from '../actions/formActions'
import TextField from '@material-ui/core/TextField';
import {styles} from './styles/formStyle'
interface IFormProps {
	classes: any;
}

interface IEmailFields {
	subject: '';
	to: '';
	message: '';
}

const handleSend = (fields: IEmailFields) => async(e:any) => {
	e.preventDefault()
	await sendEmail(fields)
}

const handleChange = (updater:any) => (event:any) => updater(event.target.value);

const FormComponent: React.FC<IFormProps> = (props) => {
	const [subject, updateSubject] = React.useState();
	const [to, updateTo] = React.useState();
	const [message, updateMessage] = React.useState();
	const classes = props.classes

	return (
		<div className={classes.root}>
			<Grid
				container
				item xs={12}
				justify="center"
				alignItems="center"
			>
				<Paper elevation={3} className={classes.paper}>
					<form onSubmit={handleSend({subject, to, message})}>
						<div className={classes.row}>
							<TextField
								className={classes.formField}
								label="Subject:"
								name='subject'
								variant="outlined"
								onChange={handleChange(updateSubject)}
								value={subject}
								required
							/>
						</div>
						<div className={classes.row}>
							<TextField
								className={classes.formField}
								label="To:"
								name='to'
								variant="outlined"
								onChange={handleChange(updateTo)}
								value={to}
								required
								type="email"
							/>
						</div>
						<div className={classes.row}>
							<TextField
								className={classes.formField}
								label="Message:"
								name='message'
								variant="outlined"
								onChange={handleChange(updateMessage)}
								value={message}
								required
								multiline
								rows={4}
							/>
						</div>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							className={classes.button}
							data-testid="form-action-button"
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
