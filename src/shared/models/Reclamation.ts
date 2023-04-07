import {UserModule} from '../../app/layouts/user/users.module';

export class Reclamation {
    idReclamation:  number
    description: string ;
    typeReclamation: string;
    DateOfReclam: Date;
    status: string;
    user: UserModule
}
