import path from 'path';
import { createStream } from 'rotating-file-stream';

const accessLogStream = createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, 'log/access'),
});

const errorLogStream = createStream('error.log', {
  interval: '1d',
  path: path.join(__dirname, 'log/error'),
});

const logging = {
  access: {
    skip: function (req, res) { return res.statusCode > 400 },
    stream: accessLogStream
  },
  error: {
    skip: function (req, res) { return res.statusCode < 400 },
    stream: errorLogStream
  }
};

export default logging;
