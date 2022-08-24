import http from "../http-common";
import { IUserData, IUserLogin } from "../types/user.datatype";
class UserDataService {
  login(info: IUserLogin) {
    return http.post<IUserData>("/auth/login", info);
  };
  getAll() {
    return http.get<Array<IUserData>>("/tutorials");
  };
  get(id: string) {
    return http.get<IUserData>(`/tutorials/${id}`);
  };
  create(data: IUserData) {
    return http.post<IUserData>("/tutorials", data);
  };
  update(data: IUserData, id: any) {
    return http.put<any>(`/tutorials/${id}`, data);
  };
  delete(id: any) {
    return http.delete<any>(`/tutorials/${id}`);
  };
  deleteAll() {
    return http.delete<any>(`/tutorials`);
  };
  findByTitle(title: string) {
    return http.get<Array<IUserData>>(`/tutorials?title=${title}`);
  };
}
export default new UserDataService();