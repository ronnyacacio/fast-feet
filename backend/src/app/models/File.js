import Sequelize, { Model } from 'sequelize';
import ip from 'ip';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://${ip.address()}:3333/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default File;
