var notificationMessage = {
		message : '<%= file.relative %> : <%= options.status %>',
		title: 'Build Status',
		templateOptions : {
			status: 'Build Successful'
		},
		displayNotification: false
};

module.exports = notificationMessage;
