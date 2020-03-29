import React from 'react';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import { Link } from 'react-router-dom';

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/es/components/UIShell';

const ArgusHeader = () => (
  <Header aria-label="Argus">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="IBM">
      Argus
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/argusondw">
        Argus on Deepweb
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/tryargus">
        Try Argus
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/admin">
        Admin Area
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);
export default ArgusHeader;
