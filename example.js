const d = new Date()

print(d)

// Reset to midnight, UTC time.
d.setUTCHours(0, 0, 0, 0)

print(d)

function print(date) {
	console.table({
		timestamp: date.getTime(),
		   locale: date.toLocaleString(),
		      utc: date.toUTCString(),
		      iso: date.toISOString(),
	})
}
