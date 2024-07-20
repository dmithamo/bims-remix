import { type ReactElement } from 'react';
import genericAvatar from '~/assets/generic-avatar.jpg';
import {
  AlignOption,
  DirectionOption,
  FlexContainer,
  GapOption,
} from '~/components/flex/flex-container';
import { type SessionUser } from '~/utils/types';

interface Props {
  user: SessionUser;
}

export const LoggedInUser = (props: Props): ReactElement => {
  const {
    user: { name, avatar, account, role },
  } = props;
  return (
    <FlexContainer align={AlignOption.center} gap={GapOption.minimum}>
      <img
        className={'h-10 sm:h-14 w-10 sm:w-14 rounded-full'}
        src={avatar ?? genericAvatar}
        alt={name}
      />
      <div className={'hidden sm:block capitalize text-gray-500'}>
        <FlexContainer direction={DirectionOption.column} gap={GapOption.none}>
          <div className={'text-primary'}>{name}</div>
          <div className={'text-sm'}>
            <span className={''}>{role.name}</span>
            <span> | </span>
            <span className={''}>{account.name}</span>
          </div>
        </FlexContainer>
      </div>
    </FlexContainer>
  );
};

export const DetailedLoggedInUser = (props: Props): ReactElement => {
  const {
    user: { name, avatar, email, account, role },
  } = props;
  return (
    <FlexContainer align={AlignOption.center} gap={GapOption.minimum}>
      <img
        className={'h-20 w-20 rounded-full -ml-4'}
        src={avatar ?? genericAvatar}
        alt={name}
      />
      <div className={'capitalize text-gray-500'}>
        <FlexContainer direction={DirectionOption.column} gap={GapOption.none}>
          <div className={'text-primary'}>{name}</div>
          <div className={'text-sm lowercase'}>{email}</div>

          <div className={'text-sm'}>
            <span className={''}>{role.name}</span>
            <span> | </span>
            <span className={''}>{account.name}</span>
          </div>
        </FlexContainer>
      </div>
    </FlexContainer>
  );
};
