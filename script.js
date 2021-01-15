function calcOnClick() {
	let output = document.querySelector(".output");
	output.style.display = "block";
	
	let hours = document.querySelector("#hours");
	hours.innerText = "";
	

	// get current time
	
	let hh = document.getElementById("hh").value;
	let mm = document.getElementById("mm").value;
	let ampm = document.getElementById("ampm").value;
	hh = ampm === "PM" ? Number.parseInt(hh) + 12 : hh;

	let now = new Date();
	now.setHours(hh);
	now.setMinutes(mm);
	now = now.valueOf();

	let minute = 60 * 1000; // milliseconds
	let cycle = now;

	// allow 14 minutes to fall asleep
	// cycle += 14 * minute;
	
	// calculate 6 sleep cycles (each 90 minutes)
	for(let i = 0; i < 6; ++i) {
		cycle += 90 * minute;

		// append sleep cycles to hours string
		// hours += new Date(cycle).toLocaleTimeString([], { hour : '2-digit', minute: '2-digit' });
		
		let span = document.createElement("span");
		span.id = "cycle-" + (i+1);
		span.innerText = new Date(cycle).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		hours.appendChild(span);


		if(i < 5) {
			// hours += " OR ";
			let or = document.createTextNode(" OR ");
			hours.appendChild(or);
		}
	}

	// output horus
	//let hoursElm = document.querySelector("#hours");
	//hoursElm.innerText = hours;

}
