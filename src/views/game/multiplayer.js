import Game from 'Game/multiplayer/';
import Ws from 'Modules/ws';
import Mediator from 'Modules/mediator';

class GameView {
  show() {
    this.ws = new Ws();
    this.mediator = new Mediator();

    this.ws.connect(() => {
      this.ws.send('JoinGame', {
        typeOfGame: 'multi',
      });
    });

    this.mediator.on('InitGameMultiPlayer$Response', (data) => {
      console.log(data)
      this.ws.userId = data.userId;
      this.game = new Game(data);
    });
  }

  hide() {
    this.ws.send('FinishGame$Request', {
      userId: this.ws.userId,
    });

    this.game.destructor();
  }
}

export default GameView;
