
export default class ReducerUtils {
  static normalize(entityArray: Entity[]) {
    return entityArray.reduce((entities: { [id: number]: Entity }, entity: Entity) => {
      return {
        ...entities, ...{
          [entity.id]: entity
        }
      };
    }, {});
  }

  static filterDuplicateIds (ids: number[]) {
    return ids.filter((elem, index, self) => index === self.indexOf(elem));
  }

  static removeKey(obj, deleteKey) {
    return Object.keys(obj)
      .filter(key => key !== deleteKey)
      .reduce((result, current) => {
        result[current] = obj[current];
        return result;
      }, {});
  }




}

interface Entity {
  id: number;
}
