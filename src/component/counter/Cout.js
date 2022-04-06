import React, { useState } from "react";

export default function Count() {
	let [count, setCount] = useState(0);
	var save = new Set();

	let [first, setFirst] = useState(0);

	var Incremental = () => {
		return setCount(count + 1);
	};

	var ReSet = () => {
		return setCount(0);
	};

	var Saves = () => {
		save.add(count);
		let [first] = save;
		first = save;

		var Set = (first) => {
			return setFirst(first);
		};
		Set(first);
	};

	return (
		<div className="container">
			<div className="row">
				<table className="table table-striped border border-white shadow">
					<thead>
						<tr>
							<th scope="col">{count}</th>
							<th scope="col">
								<button
									onClick={Incremental}
									type="button"
									className="btn btn-primary">
									Increment
								</button>
							</th>
							<th scope="col">
								<button
									onClick={ReSet}
									type="button"
									className="btn btn-warning">
									Reset
								</button>
							</th>

							<th scope="col">
								<button
									onClick={Saves}
									type="button"
									className="btn btn-success">
									Save
								</button>
							</th>
						</tr>
					</thead>
				</table>
			</div>

			<table class="table table-striped">
				<thead>
					<tr>
						<th scope="col">Count On Save</th>
						<th scope="col">value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">{first}</th>
						<td>Save</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
