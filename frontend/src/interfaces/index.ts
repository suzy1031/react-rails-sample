export interface SignUpParams {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface PostParams {
  name: string;
  nekoType: string;
  favoriteFood: string;
  favoriteToy: string;
}

export interface GenerateParams {
  name: string;
  nekoType: string;
  detailInfo: {
    favoriteFood: string;
    favoriteToy: string;
  };
}
