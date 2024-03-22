import ApiService from "../ApiService";

export default class ReleasesService extends ApiService {
  constructor() {
    super("/api/releases");
  }

  obtainListMoths() {
    return [
      { label: "Select", value: "" },
      { label: "January", value: 1 },
      { label: "February", value: 2 },
      { label: "March", value: 3 },
      { label: "April", value: 4 },
      { label: "May", value: 5 },
      { label: "June", value: 6 },
      { label: "July", value: 7 },
      { label: "August", value: 8 },
      { label: "September", value: 9 },
      { label: "October", value: 10 },
      { label: "November", value: 11 },
      { label: "December", value: 12 },
    ];
  }

  obtainListsTypes() {
    return [
      { label: "Select..", value: "" },
      { label: "Despesa", value: "DESPESA" },
      { label: "Receita", value: "RECEITA" },
    ];
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
    if (filterReleases.description) {
      params = `${params}&description=${filterReleases.description}`;
    }
    return this.get(params);
  }

  releaseDelete(id) {
    return this.delete(`/${id}`);
  }
}
