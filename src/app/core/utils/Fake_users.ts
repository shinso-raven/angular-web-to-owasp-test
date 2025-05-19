import { role, user } from '../models/User';

export const fake_user: user = {
  id_user: 0,
  name_user: '',
  role: [],
  email: '',
  phone: '',
  id_route: null,
};

export const fake_role: role = {
  id_role: 0,
  name_role: '',
};

// export const USERS_LIST: user[] = [
//     {
//         cod_user: 1,
//         name_user: "Marcos",
//         role: {
//             cod_role: 1,
//             name_role: "admin"
//         },
//         user: "marcos",
//         password: "1234"
//     },
//     {
//         cod_user: 2,
//         name_user: "Radhames",
//         role: {
//             cod_role: 2,
//             name_role: "technician"
//         },
//         user: "radhames",
//         password: "1234"
//     },
//     {
//         cod_user: 3,
//         name_user: "Josmar",
//         role: {
//             cod_role: 3,
//             name_role: "client"
//         },
//         user: "josmar",
//         password: "4321"
//     }

// ]
