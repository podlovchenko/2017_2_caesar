import Block from 'Components/block/';
import BaseView from 'Views/base/';
import Router from 'Modules/router';
import UserService from 'Services/user-service';

class PlayerMenuView extends BaseView {
  constructor() {
    super('div');

    this.addClasses(['menu']);

    this.single = Block.create('div', {
    }, ['menu__button'], 'Одиночная игра');

    this.multi = Block.create('div', {
    }, ['menu__button'], 'Игра по сети');

    this.profile = Block.create('div', {
    }, ['menu__button'], 'Профиль');

    this.rating = Block.create('div', {
    }, ['menu__button'], 'Рейтинг');

    this.logout = Block.create('div', {
    }, ['menu__button'], 'Выйти');

    this.render();

    this.addListener();
  }

  render() {
    this
      .append(this.single)
      .append(this.multi)
      .append(this.profile)
      .append(this.rating)
      .append(this.logout);
  }

  addListener() {
    const router = new Router();
    const userService = new UserService();

    this.single.on('click', () => {
      router.go('/singleplayer-online/');
    });
    this.multi.on('click', () => {
      router.go('/multiplayer/');
    });
    this.profile.on('click', () => {
      router.go('/profile/');
    });
    this.rating.on('click', () => {
      router.go('/rating/');
    });
    this.logout.on('click', () => {
      router.go('/login/');
      userService.logout();
    });
  }
}

export default PlayerMenuView;
