import app from './app';
import ip from 'ip';

app.listen(3333, () => {
  console.log(`🔥 Server started at http://${ip.address()}:3333`);
});
