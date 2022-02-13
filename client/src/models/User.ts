export interface UserModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    numberPhone: number;
    role: Role;
  }

  enum Role{
    examinee,
    editor
  }