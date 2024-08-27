// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userKey = 'user';  // La clave para almacenar el usuario en localStorage

  constructor(private router: Router) {}

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.getUser();
  }

  // Guarda la información del usuario en localStorage
  setUser(user: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  // Obtiene la información del usuario desde localStorage
  getUser(): any {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  // Elimina la información del usuario de localStorage
  clearUser(): void {
    localStorage.removeItem(this.userKey);
  }

  // Método para autenticar al usuario
  authenticate(email: string, password: string, tokenDigIdentity: string): any {

    // Reemplazar la lógica con la que verifiques el usuario real



    // Ejemplo de cómo podria hacerce
    const users = [
      { email: 'user@user.com', password: 'password123', rolLevel: 10,
        
        name: 'Carlos', fLastname:'Lopez', mLastname: 'Pimentel',
        gender: true, bday: 19, bmonth:6, byear:1980,
        state: 'Jalisco', municipality: 'Guadalajara', 
        //Date in Epoch format 
        dateCreation: 1724685214,
        dateLastUpdate: 1724686872,  //Change every time th einfo is updated (Epoch format)
        tokenFather: 'PLOIFE809H2', //No idea of tht type address and how the token would be?
        tokenMother: '09823JHDFWK', //No idea of tht type address and how the token would be ?
        tokenDigIdentity: 'PQ90D20OUIP' //No idea of tht type address and how the token would be ?


       },
      { email: 'another@user.com', password: 'password123', rolLevel: 10,
        
        name: 'Brandon', fLastname:'Magana', mLastname: 'Avalos',
        gender: true, bday: 27, bmonth:2, byear:2003,
        state: 'Jalisco', municipality: 'Zapopan', 
        //Date in Epoch format 
        dateCreation: 1724685214,
        dateLastUpdate: 1724686872,  //Change every time th einfo is updated (Epoch format)
        tokenFather: 'H7G37HDWI8D', //No idea of tht type address and how the token would be?
        tokenMother: 'FHOW9WH920L', //No idea of tht type address and how the token would be ?
        tokenDigIdentity: 'AC073V0KPJE' //No idea of tht type address and how the token would be ?

       },
       {email: 'zaidgg@email.com', password: 'p1234', rolLevel: 0, //for the app auth 
        
        name: 'Zaid', fLastname:'Gutierrez', mLastname: 'Gonzales',
         gender: true, bday: 8, bmonth:1, byear:2003,
         state: 'Jalisco', municipality: 'Guadalajara', 
         //Date in Epoch format 
         dateCreation: 1724685214,
         dateLastUpdate: 1724686872,  //Change every time th einfo is updated (Epoch format)
         tokenFather: 'NAG36733G8D', //No idea of tht type address and how the token would be?
         tokenMother: '876DHOOAAW8', //No idea of tht type address and how the token would be ?
         tokenDigIdentity: 'HU432FE34W2' //No idea of tht type address and how the token would be ?
          }
    ];

    
    const user = users.find(user =>
      user.email === email &&
      user.password === password &&
      user.tokenDigIdentity === tokenDigIdentity
    );
    return user || null;
  }

  // Obtiene la rolLevel del usuario desde el token
  getUserrityPrio(tokenDigIdentity: string): number | null {
    const users = [
      { email: 'user@user.com', password: 'password123', rolLevel: 10,
        
        name: 'Carlos', fLastname:'Lopez', mLastname: 'Pimentel',
        gender: true, bday: 19, bmonth:6, byear:1980,
        state: 'Jalisco', municipality: 'Guadalajara', 
        //Date in Epoch format 
        dateCreation: 1724685214,
        dateLastUpdate: 1724686872,  //Change every time th einfo is updated (Epoch format)
        tokenFather: 'PLOIFE809H2', //No idea of tht type address and how the token would be?
        tokenMother: '09823JHDFWK', //No idea of tht type address and how the token would be ?
        tokenDigIdentity: 'PQ90D20OUIP' //No idea of tht type address and how the token would be ?


       },
      { email: 'another@user.com', password: 'password123', rolLevel: 10,
        
        name: 'Brandon', fLastname:'Magana', mLastname: 'Avalos',
        gender: true, bday: 27, bmonth:2, byear:2003,
        state: 'Jalisco', municipality: 'Zapopan', 
        //Date in Epoch format 
        dateCreation: 1724685214,
        dateLastUpdate: 1724686872,  //Change every time th einfo is updated (Epoch format)
        tokenFather: 'H7G37HDWI8D', //No idea of tht type address and how the token would be?
        tokenMother: 'FHOW9WH920L', //No idea of tht type address and how the token would be ?
        tokenDigIdentity: 'AC073V0KPJE' //No idea of tht type address and how the token would be ?

       },
       {email: 'zaidgg@email.com', password: 'p1234', rolLevel: 0, //for the app auth 
        
        name: 'Zaid', fLastname:'Gutierrez', mLastname: 'Gonzales',
         gender: true, bday: 8, bmonth:1, byear:2003,
         state: 'Jalisco', municipality: 'Guadalajara', 
         //Date in Epoch format 
         dateCreation: 1724685214,
         dateLastUpdate: 1724686872,  //Change every time th einfo is updated (Epoch format)
         tokenFather: 'NAG36733G8D', //No idea of tht type address and how the token would be?
         tokenMother: '876DHOOAAW8', //No idea of tht type address and how the token would be ?
         tokenDigIdentity: 'HU432FE34W2' //No idea of tht type address and how the token would be ?
          }
    ];
    const user = users.find(user => user.tokenDigIdentity === tokenDigIdentity);
    console.group( user ? user.rolLevel : null);
    return user ? user.rolLevel : null;
  }

  getUsers(): any[] {
    return [
      { email: 'user@user.com', password: 'password123', rolLevel: 10,
        
        name: 'Carlos', fLastname:'Lopez', mLastname: 'Pimentel',
        gender: true, bday: 19, bmonth:6, byear:1980,
        state: 'Jalisco', municipality: 'Guadalajara', 
        //Date in Epoch format 
        dateCreation: 1724685214,
        dateLastUpdate: 1724686872,  //Change every time th einfo is updated (Epoch format)
        tokenFather: 'PLOIFE809H2', //No idea of tht type address and how the token would be?
        tokenMother: '09823JHDFWK', //No idea of tht type address and how the token would be ?
        tokenDigIdentity: 'PQ90D20OUIP' //No idea of tht type address and how the token would be ?


       },
      { email: 'another@user.com', password: 'password123', rolLevel: 10,
        
        name: 'Brandon', fLastname:'Magana', mLastname: 'Avalos',
        gender: true, bday: 27, bmonth:2, byear:2003,
        state: 'Jalisco', municipality: 'Zapopan', 
        //Date in Epoch format 
        dateCreation: 1724685214,
        dateLastUpdate: 1724686872,  //Change every time th einfo is updated (Epoch format)
        tokenFather: 'H7G37HDWI8D', //No idea of tht type address and how the token would be?
        tokenMother: 'FHOW9WH920L', //No idea of tht type address and how the token would be ?
        tokenDigIdentity: 'AC073V0KPJE' //No idea of tht type address and how the token would be ?

       },
       {email: 'zaidgg@email.com', password: 'p1234', rolLevel: 0, //for the app auth 
        
        name: 'Zaid', fLastname:'Gutierrez', mLastname: 'Gonzales',
         gender: true, bday: 8, bmonth:1, byear:2003,
         state: 'Jalisco', municipality: 'Guadalajara', 
         //Date in Epoch format 
         dateCreation: 1724685214,
         dateLastUpdate: 1724686872,  //Change every time th einfo is updated (Epoch format)
         tokenFather: 'NAG36733G8D', //No idea of tht type address and how the token would be?
         tokenMother: '876DHOOAAW8', //No idea of tht type address and how the token would be ?
         tokenDigIdentity: 'HU432FE34W2' //No idea of tht type address and how the token would be ?
          }
    ];
  }
  
}