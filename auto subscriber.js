const sub = () => {
	let btn = document.querySelector(".add.active");
	if(btn) {
		btn.click();
		setTimeout('sub()', 500);
	} else {
		alert("You have subscribed to all the subreddits successfully");
		return;
	}
}
setTimeout('sub()', 500);