import React, { useEffect } from 'react';

import useAirtable from './useAirtable';

function User() {
  const [users] = useAirtable('');

  console.log(users)

  return <div></div>;
}

export default User;
