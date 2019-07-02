import * as shell  from 'shell'
import { Packman } from './models/packman'

const app = new shell();
let packman;

app.configure(function() {
    app.use(shell.router({shell: app}));
    app.use(shell.error({shell: app}));
});

app.cmd('PLACE :x,:y,:direction', function(req, res) {
    if (!packman)  {
        packman = new Packman(req.params.x, req.params.y, req.params.direction);
    } else {
        packman.place(req.params.x, req.params.y, req.params.direction);
    }

    res.prompt();
});

app.cmd('MOVE', function(req, res){
    if (!packman)  {
        console.log('Please PLACE your Pacman.');
        res.prompt();
        return;
    }
    packman.move();
    res.prompt();
});

app.cmd('LEFT', function(req, res) {
    if (!packman)  {
        console.log('Please PLACE your Pacman.');
        res.prompt();
        return;
    }
    packman.left();
    res.prompt();
});

app.cmd('RIGHT', function(req, res) {
    if (!packman)  {
        console.log('Please PLACE your Pacman.');
        res.prompt();
        return;
    }
    packman.right();
    res.prompt();
});

app.cmd('REPORT', function(req, res) {
    if (!packman)  {
        console.log('Please PLACE your Pacman.');
        res.prompt();
        return;
    }
    console.log(`${packman.x},${packman.y},${packman.direction}`);
    res.prompt();
});