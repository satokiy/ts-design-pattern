export {};

import _ from "lodash";

abstract class ItemPrototype {
  constructor(public name: string, public detail: Detail = { comment: [] }) {}

  addComment(comment: string) {
    this.detail.comment.push(comment)
  }

  abstract createCopy(): ItemPrototype
}

type Detail = { comment: string[] };

class DeepCopyItem extends ItemPrototype {
    createCopy(): ItemPrototype {
        return _.cloneDeep(this);
    }
}
class ShallowCopyItem extends ItemPrototype {
    createCopy(): ItemPrototype {
        return _.clone(this);
    }
}


class ItemManager {
    items: {[key: string]: ItemPrototype } = {};
    registerItem(key: string, item: ItemPrototype) {
        this.items[key] = item;
    }

    create(key: string) {
        if (key in this.items) {
            const item = this.items[key]
            return item.createCopy();
        }
        throw new Error('key not found')
    }
}

function run() {
    const manager = new ItemManager();
    manager.registerItem('mouse', )
}
