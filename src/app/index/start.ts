export class Start {
	public MyObject;

	public activate() {
		setTimeout(() => {
			this.MyObject = {
				Firstname: "Ryan",
				Lastname: "Southgate"
			}
		}, 3000)
	}
}