const test = require('ava')
const axios = require('axios')

test.cb('test health check', t => {
	t.plan(2)

	axios.get('http://localhost:7852/health').then((response) => {
        t.is(response.status, 200)
        t.is(response.data, 'healthy')
        t.end()
    }).catch(() => {
        t.fail()
    })
})
