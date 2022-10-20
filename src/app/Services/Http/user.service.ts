import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  allUsers(token: string){
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.get(`${environment.connectionURL}/v1/account`, {headers: headers});
  }
  
  getByID(id: string, token: string){
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.get(`${environment.connectionURL}/v1/account/${id}/profile`, {headers: headers});
  }

  authenticate(email: string, password: string) {
    return this.http.post(`${environment.connectionURL}/v1/account/login`, { email: email, password: password });
  }

  editUser(name: string, surname: string, nickname: string, email: string, password: string, avatarID: number, mobile: string, magazineBranchId: number, userID: number, token: string) {
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.put(`${environment.connectionURL}/Users/${userID}`, {
      firstName         : name,
      lastName          : surname,
      username          : nickname,
      password          : password,
      email             : email,
      avatar            : avatarID,
      mobileNumber      : mobile,
      magazineBranchId  : magazineBranchId
    }, {headers: headers});
  }

  registerToStore(userID: number, positionID: number, storeID: number, token: string) {
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.post(`${environment.connectionURL}/Users/UserReferenceCreate`, {
      userId: userID,
      magazineBranchId: storeID,
      positionId: positionID
    }, {headers: headers});
  }
  
  getByStore(storeID: number, token: string) {
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.get(`${environment.connectionURL}/MagazineBranches/${storeID}/users`, {headers: headers});
  }

  removeFromStore(userID: number, token: string) {
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.delete(`${environment.connectionURL}/Users/UserReferenceRemove/${userID}`, {headers: headers});
    
  }

  registerToSection(userID: number, sectionID: number, token: string) {
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.post(`${environment.connectionURL}/ResponsiblePersonsForProducts`, [{
      userId: userID,
      responsiblePersonsGroupId: sectionID
    }], {headers: headers});
  }

  removeFromSection(UserId: number, GroupId: number, token: string) {
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.delete(`${environment.connectionURL}/ResponsiblePersonsForProducts/?UserId=${UserId}&GroupId=${GroupId}`, {headers: headers});
    
  }

  getLevels(token: string){
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.get(`${environment.connectionURL}/v1/user-level`, {headers: headers});
  }

  getLevel(token: string, id: number){
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.get(`${environment.connectionURL}/v1/user-level/${id}`, {headers: headers});
  }

  updateLevel(token: string, id: number, levelData: any) {
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.put(`${environment.connectionURL}/v1/user-level/${id}`, {
        friendlyName: levelData.friendlyName,
        minimumGames: levelData.minimumGames,
        minimumBet: levelData.minimumBet,
        minimumInvites: levelData.minimumInvites,
        defaultLevel: levelData.defaultLevel,
        level1Percent: levelData.level1Percent,
        level2Percent: levelData.level2Percent,
        level3Percent: levelData.level3Percent,
        level4Percent: levelData.level4Percent,
        level5Percent: levelData.level5Percent
    }, {headers: headers});
  }

  getSinglePosition(id: number, token: string){
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.get(`${environment.connectionURL}/Users/PositionGet/${id}`, {headers: headers});
  }

  getUserRoles(token: string){
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.get(`${environment.connectionURL}/Users/RoleList`, {headers: headers});
  }

  setUserRole(userID: number, roleID: number, token: string){
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.post(`${environment.connectionURL}/Users/SetRole`,{userId: userID, roleId: roleID}, {headers: headers});
  }

  deleteUserRole(usedRoleID: number, token: string){
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.delete(`${environment.connectionURL}/Users/DeleteRole?Id=${usedRoleID}`, {headers: headers});
  }

  getUsersWithRoles(id:number, token: string){
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.get(`${environment.connectionURL}/Users/UsedRole?userId=${id}`, {headers: headers});
  }

  createPosition(name: string, isActive: boolean, token: string) {
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.post(`${environment.connectionURL}/Users/PositionCreate`,{name: name, isActive: isActive}, {headers: headers});
  }

  updatePosition(roleID: number, name: string, isActive: boolean, token: string) {
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.put(`${environment.connectionURL}/Users/PositionUpdate`, {id: roleID, name : name, isActive : isActive}, {headers: headers});
  }

  removePosition(roleID: number, token: string){
    let headerSettings = {};
    headerSettings['Authorization'] = `Bearer ${token}`;
    let headers = new HttpHeaders(headerSettings);
    return this.http.delete(`${environment.connectionURL}/Users/PositionRemove/${roleID}`, {headers: headers});
  }
}
