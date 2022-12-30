/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconEye from './IconEye';
import IconNoEye from './IconNoEye';
import IconContactO from './IconContactO';
import IconPeople from './IconPeople';
import IconHome from './IconHome';
import IconHomeO from './IconHomeO';
import IconManage from './IconManage';
import IconManageO from './IconManageO';
import IconPeopleO from './IconPeopleO';
import IconCart from './IconCart';
import IconCartO from './IconCartO';
import IconContact from './IconContact';
import IconCameraFill from './IconCameraFill';
import IconPositionFill from './IconPositionFill';
import IconVoiceFill from './IconVoiceFill';
import IconPhotoFill from './IconPhotoFill';
import IconVideoCallFill from './IconVideoCallFill';
import IconFile from './IconFile';
import IconFile1 from './IconFile1';
export { default as IconEye } from './IconEye';
export { default as IconNoEye } from './IconNoEye';
export { default as IconContactO } from './IconContactO';
export { default as IconPeople } from './IconPeople';
export { default as IconHome } from './IconHome';
export { default as IconHomeO } from './IconHomeO';
export { default as IconManage } from './IconManage';
export { default as IconManageO } from './IconManageO';
export { default as IconPeopleO } from './IconPeopleO';
export { default as IconCart } from './IconCart';
export { default as IconCartO } from './IconCartO';
export { default as IconContact } from './IconContact';
export { default as IconCameraFill } from './IconCameraFill';
export { default as IconPositionFill } from './IconPositionFill';
export { default as IconVoiceFill } from './IconVoiceFill';
export { default as IconPhotoFill } from './IconPhotoFill';
export { default as IconVideoCallFill } from './IconVideoCallFill';
export { default as IconFile } from './IconFile';
export { default as IconFile1 } from './IconFile1';

export type IconNames = 'icon-eye' | 'icon-no_eye' | 'icon-contact_o' | 'icon-people' | 'icon-home' | 'icon-home_o' | 'icon-manage' | 'icon-manage_o' | 'icon-people_o' | 'icon-cart' | 'icon-cart-o' | 'icon-contact' | 'icon-camera_fill' | 'icon-position_fill' | 'icon-voice_fill' | 'icon-photo_fill' | 'icon-video_call_fill' | 'icon-file' | 'icon-file1';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-eye':
      return <IconEye key="1" {...rest} />;
    case 'icon-no_eye':
      return <IconNoEye key="2" {...rest} />;
    case 'icon-contact_o':
      return <IconContactO key="3" {...rest} />;
    case 'icon-people':
      return <IconPeople key="4" {...rest} />;
    case 'icon-home':
      return <IconHome key="5" {...rest} />;
    case 'icon-home_o':
      return <IconHomeO key="6" {...rest} />;
    case 'icon-manage':
      return <IconManage key="7" {...rest} />;
    case 'icon-manage_o':
      return <IconManageO key="8" {...rest} />;
    case 'icon-people_o':
      return <IconPeopleO key="9" {...rest} />;
    case 'icon-cart':
      return <IconCart key="10" {...rest} />;
    case 'icon-cart-o':
      return <IconCartO key="11" {...rest} />;
    case 'icon-contact':
      return <IconContact key="12" {...rest} />;
    case 'icon-camera_fill':
      return <IconCameraFill key="13" {...rest} />;
    case 'icon-position_fill':
      return <IconPositionFill key="14" {...rest} />;
    case 'icon-voice_fill':
      return <IconVoiceFill key="15" {...rest} />;
    case 'icon-photo_fill':
      return <IconPhotoFill key="16" {...rest} />;
    case 'icon-video_call_fill':
      return <IconVideoCallFill key="17" {...rest} />;
    case 'icon-file':
      return <IconFile key="18" {...rest} />;
    case 'icon-file1':
      return <IconFile1 key="19" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
