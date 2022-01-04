const from = new Date()
const to = new Date()

// Note that we're using the setUTC* methods explicitly, rather than the Date
// constructor. This is because the Date constructor actually constructs the
// Date according to _local time_, which is completely system dependant.
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#parameters
// > The parameter values are all evaluated against the local time zone, rather than UTC.
//
// Example uses the range [2021-01-01T00:00:00Z / 2021-02-01T00:00:00Z]
from.setUTCFullYear(2021)
from.setUTCDate(1)
from.setUTCMonth(0)
from.setUTCHours(0, 0, 0, 0)

to.setUTCFullYear(2021)
to.setUTCDate(1)
to.setUTCMonth(1)
to.setUTCHours(0, 0, 0, 0)

print(from)
print(to)

function print(date) {
	console.table({
		timestamp: date.getTime(),
		   locale: date.toLocaleString(),
		      utc: date.toUTCString(),
		      iso: date.toISOString(),
	})
}
