import sirv from 'sirv';
import fyre from 'fyrejet';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

fyre({
  prioRequestsProcessing: false, // without this option set to 'false' uWS is going to be extremely sluggish. However, this will reduce speed for node's native http
  server: fyre.uwsCompat(), // You can pass options to low(), check low-http-server documentation
  serverType: 'uWebSockets' // also required, or there will always be errors
})
  //SETTINGS (MAX COMPATABILITY FOR NOW, OPTIMIZE LATER)
  //.set('fyrejet mode', 'properties as functions')

  //SETTINGS (MAX PERFORMANCE, TESTING)
  .set('fyrejet mode', 'api')

	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.start(3000);
