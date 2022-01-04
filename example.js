const from = new Date()
const to = new Date()

// Note that we're using the setUTC* methods explicitly, rather than the Date
// constructor. This is because the Date constructor actually constructs the
// Date according to _local time_, which is completely system dependant.
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#parameters
// > The parameter values are all evaluated against the local time zone, rather than UTC.
//
// Example uses the range [2021-01-01T00:00:00Z / 2021-02-01T00:00:00Z[
from.setUTCFullYear(2021)
from.setUTCDate(1)
from.setUTCMonth(0)
from.setUTCHours(0, 0, 0, 0)

to.setUTCFullYear(2021)
to.setUTCDate(1)
to.setUTCMonth(1)
// This will actually affect the date, causing it to go back to just before
// midnight the day before, effectively making this into an exclusive range.
to.setUTCHours(0, 0, 0, -1)

print(from)
print(to)

function print(date) {
	console.table({
		// Number of milliseconds since the Unix Epoch.
		//
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
		// > getTime() always uses UTC for time representation. For example, a client
		// > browser in one timezone, getTime() will be the same as a client browser
		// > in any other timezone.
		timestamp: date.getTime(),
		// Culture specific representation, completely useless for all but display.
		locale: date.toLocaleString(),
		// RFC7231 representation, mostly useless except for display.
		utc: date.toUTCString(),
		// ISO 8601 representation, usefull for typical programmatic purposes.
		// Most serialization libraries support this out of the box, or profiles
		// hereof such as RFC3339.
		iso: date.toISOString(),
	})
}
