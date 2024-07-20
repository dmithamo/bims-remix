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
    <FlexContainer
      align={AlignOption.center}
      gap={GapOption.minimum}
      className={'text-sm'}>
      <img
        className={'h-10 w-10 rounded-full'}
        src={avatar ?? genericAvatar}
        alt={name}
      />
      <div className={'hidden sm:block capitalize text-gray-500'}>
        <FlexContainer direction={DirectionOption.column} gap={GapOption.none}>
          <div className={'text-primary'}>{name}</div>
          <div className={'text-xs'}>
            <span className={''}>{role.name}</span>
            <span> &#8226; </span>
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
    <FlexContainer
      align={AlignOption.center}
      gap={GapOption.minimum}
      className={'text-sm'}>
      <img
        className={'h-20 w-20 rounded-full -ml-4'}
        src={avatar ?? genericAvatar}
        alt={name}
      />
      <div className={'capitalize text-gray-500'}>
        <FlexContainer direction={DirectionOption.column} gap={GapOption.none}>
          <div className={'text-primary'}>{name}</div>
          <div className={'text-xs lowercase'}>{email}</div>

          <div className={'text-xs'}>
            <span className={''}>{role.name}</span>
            <span> &#8226; </span>
            <span className={''}>{account.name}</span>
          </div>
        </FlexContainer>
      </div>
    </FlexContainer>
  );
};
