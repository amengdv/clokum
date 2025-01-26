(() => {

	function clock() {
		const now = new Date();
		/**
		 * @type HTMLCanvasElement
		 */
		const canvas = document.getElementById("clockCanvas");
		const ctx = canvas.getContext("2d");
		const currTimeH3 = document.getElementById("currTime");
		
		const second = now.getSeconds();
		const minute = now.getMinutes();
		const hour = now.getHours();
		currTimeH3.textContent = `TIME: ${hour}:${minute}:${second}`;

		const secondText = String(second).padStart(2, '0');
		const minuteText = String(minute).padStart(2, '0');
		const hourText = String(hour).padStart(2, '0');
		const margin = 15;
		ctx.clearRect(0, 0, 400, 400);


		ctx.save();
		ctx.translate(200, 200);
		ctx.rotate((Math.PI / 30) * minute + (Math.PI / 1800) * second);
		ctx.font = "20px Arial";
		ctx.fillStyle = "#000000";

		let minPos = 0;
		while (minPos < 200) {
			ctx.fillText(minuteText, -10, -minPos);
			minPos += ctx.measureText(minuteText).width + margin;
		}

		ctx.restore();

		ctx.save();
		ctx.translate(200, 200);

		ctx.rotate((second * Math.PI) / 30);
		ctx.font = "20px Arial";
		ctx.fillStyle = "#D40000";

		// Draw the repeated text along the line
		let secPos = 0;
		while (secPos < 200) {
			ctx.fillText(secondText, -10, -secPos);
			secPos += ctx.measureText(secondText).width + margin;
		}

		ctx.restore();

		ctx.save();
		ctx.translate(200, 200);
		ctx.font = "20px Arial";
		ctx.rotate(
			(Math.PI / 6) * hour + (Math.PI / 360) * minute + (Math.PI / 21600) * second,
		);
		ctx.fillStyle = "#0000FF";

		let hourPos = 0;
		while (hourPos < 150) {
			ctx.fillText(hourText, -10, -hourPos);
			hourPos += ctx.measureText(hourText).width + margin;
		}

		ctx.restore();

		window.requestAnimationFrame(clock);
	}

	clock();
})();
