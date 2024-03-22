import ApiService from "../ApiService";

export default class ReleasesService extends ApiService {
  constructor() {
    super("/api/releases");
  }

  search(filterReleases) {
    let params = `?year=${filterReleases.year}`;

    if (filterReleases.month) {
      params = `${params}&month=${filterReleases.month}`;
    }
    if (filterReleases.type) {
      params = `${params}&type=${filterReleases.type}`;
    }
    if (filterReleases.status) {
      params = `${params}&status=${filterReleases.status}`;
    }
    if (filterReleases.user) {
      params = `${params}&user=${filterReleases.user}`;
    }
    return this.get(params);
  }
}
