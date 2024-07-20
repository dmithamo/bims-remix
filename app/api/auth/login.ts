import { SessionUser, UUID } from '~/utils/types';

enum AuthErrorType {
  InvalidCredentials = 'INVALID_CREDENTIALS',
}

type AuthError = {
  message: AuthErrorType;
};

type AuthResponse = {
  sessionId?: UUID;
  sessionUser?: SessionUser;
  error?: AuthError;
};

export async function login(
  username: FormDataEntryValue,
  password: FormDataEntryValue,
): Promise<Awaited<AuthResponse>> {
  // fake a delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  if (username === 'b@dmithamo.dev' && password === 'password') {
    return Promise.resolve({
      sessionId: '9d2e758e-697a-4f3b-a137-fd77fed45e68',
      sessionUser: {
        id: '9d2e758e-697a-4f3b-a137-fd77fed45e68',
        name: username.split('@')[0],
        email: username,
        account: {
          id: '4f5038d1-26b9-468b-9e5c-e1fd05303a65',
          name: 'Acme Inc.',
        },
        role: {
          id: '89166613-aaed-44a7-9393-b992caf0ac42',
          name: 'Admin',
        },
      },
    });
  }

  return Promise.resolve({
    error: {
      message: AuthErrorType.InvalidCredentials,
    },
  });
}
