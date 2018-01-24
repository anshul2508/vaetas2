
export default class ServicesUtil {
  static objToSearchParams (obj: URLSearchParams) {
    return Object.keys(obj).reduce( (params: URLSearchParams, current) => {
      params.set(current, obj[current]);
      return params;
    }, new URLSearchParams() );
  }
}
