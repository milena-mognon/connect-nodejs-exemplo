import IUserDTO from "./IUserDTO";

class UserController {
  public create(): void {
    let user: IUserDTO;

    user = {
      nome: "Milena",
      idade: 23,
      email: "milena@mail.com",
      contatos: [
        {
          type: "telefone",
          description: "(00) 00000-0000",
        },
      ],
    };

    console.log(user);
  }
}
